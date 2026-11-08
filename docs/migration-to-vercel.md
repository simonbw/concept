# Design Doc: Migrating Concept from Heroku to Vercel + Convex

Status: Complete (2026-11-07)
Author: Simon
Date: 2026-05-16

> Implementation note (2026-11-07): all checklist steps are done. Convex was
> provisioned via the Vercel Marketplace integration (free plan); the Vercel
> project `concept` is git-connected and `main` deploys to production (Convex
> deployment `brainy-opossum-200`). Preview branches deploy to their own
> Convex preview deployments. `concept.simonbw.com` is served by Vercel, and
> the Heroku app `concept-clone` has been deleted. The Convex project lives in
> the Vercel-managed Convex team; open its dashboard from Vercel (Storage →
> Convex). Local `npx convex dev` uses a local anonymous deployment.

## 1. Summary

Move the Concept board-game clone off Heroku and onto Vercel. The blocker is
that the app's real-time sync depends on a single long-running stateful Node
process (persistent WebSockets + in-memory state), which Vercel's serverless
model does not provide.

The proposal: **delete the backend** and replace the tRPC-over-WebSocket sync
layer with [Convex](https://convex.dev) — a reactive database with server-side
functions. Game state lives in Convex; clients subscribe with live queries.
The Concept app itself becomes a pure static site hosted on Vercel.

Convex is a **Vercel native Marketplace integration**: it is provisioned from
the Vercel dashboard, billed through Vercel, and its env vars are synced
automatically — one dashboard, one bill.

## 2. Goals / Non-goals

**Goals**

- No more Heroku. Static site on Vercel + Convex, all managed/billed in Vercel.
- Preserve the UX: pieces drag around a shared board, positions sync live.
- Keep server-side validation of mutations (Convex mutations run server-side).
- Keep the blast radius contained — game logic, board, cards, icons, styling
  stay as-is.
- Stay within free tiers.

**Non-goals**

- Authentication / user accounts (game stays open-by-URL).
- The `/admin` page — dropped (see §6). It is a dev tool, not needed.
- Buttery 60fps remote drag motion (see §7.4 — accepted trade-off).
- Game cleanup / persistence policy changes.

## 3. Current architecture (what we're replacing)

- **Transport:** tRPC over WebSocket only (`wsLink`, no HTTP link). Clients
  subscribe to `gameState.stream`; first message is a full `replace`, then
  JSON Patch `diff`s from `DiffChannel`.
- **State:** in-memory `Map`s in `src/server/gameState.ts`, keyed by `gameId`.
  No database. `updateGameState(gameId, updater)` is the single mutation
  chokepoint — it applies a pure transform, validates with Zod, publishes
  diffs.
- **Mutations:** `pieces.add/remove/move/reset`, `cards.draw/shuffle`,
  `gameState.patch/reset`. Each is a tiny pure transform over game state —
  there is no real backend logic, only relay + validation.
- **Server also does:** static file serving (`/static`) and HTML-shell
  rendering (`pagesRouter` → `pageHtml.ts`).
- **Game state shape** (`src/common/models/GameStateSchema.tsx`):

  ```ts
  {
    startedAt: number | null,
    updatedAt: number | null,
    pieces: { id, size, color, position: [x, y], lifted }[],
    deckSeed: number,
    cardsDrawn: number,
  }
  ```

- **Cards** are generated client-side from `deckSeed` (seeded shuffle), so the
  deck is reproducible from state. No server involvement.

Key observation: **the server is a sync relay over a tiny state object.** That
maps almost 1:1 onto a Convex table + a handful of mutation functions.

## 4. Target architecture

```
                    ┌─────────────────────────┐
   Browser  ───────►│  Vercel (static hosting) │   HTML + JS + CSS + assets
                    └─────────────────────────┘
        │
        │  live query / mutations (WebSocket, managed by Convex SDK)
        ▼
                    ┌─────────────────────────┐
                    │   Convex                 │  games table + query/mutation
                    │  (provisioned via Vercel │  functions in convex/
                    │   native integration)    │
                    └─────────────────────────┘
```

- **Convex holds game state.** One row per game in a `games` table.
- **Reads:** `useQuery` subscribes to a game row; it is **live** — re-renders
  whenever the row changes. That is the real-time sync.
- **Writes:** Convex `mutation` functions (server-side) replace the tRPC
  mutations — a near-verbatim port of the existing routers. Argument
  validators run server-side, so validation is preserved.
- **No backend of our own.** Vercel serves static files; Convex runs the
  functions. No `src/server/`.

### 4.1 Auth model

No login — anyone with the URL joins. Convex functions are public by default
(no auth required to call them), which matches the current open-by-URL model.
If accounts are ever added, Convex has first-class auth — additive, not a
rewrite.

## 5. Data model

One document per game. `pieces` is a nested array — the state is tiny
(<1 KB), so a whole-document patch per move is fine and keeps the shape
identical to today's `GameState`.

```ts
// convex/schema.ts
import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

const piece = v.object({
  id: v.string(),
  size: v.union(v.literal("large"), v.literal("medium"), v.literal("small")),
  color: v.union(
    v.literal("green"), v.literal("red"), v.literal("blue"),
    v.literal("yellow"), v.literal("black"),
  ),
  position: v.array(v.number()),   // [x, y]
  lifted: v.boolean(),
});

export default defineSchema({
  games: defineTable({
    gameId: v.string(),     // URL slug; "" = default game
    startedAt: v.number(),
    deckSeed: v.number(),
    cardsDrawn: v.number(),
    pieces: v.array(piece),
  }).index("by_gameId", ["gameId"]),
});
```

- `updatedAt` is **dropped** — Convex provides `_creationTime` and the admin
  page (the only `updatedAt` consumer) is being removed.
- `startedAt` is kept (game logic may read it).
- The Convex schema becomes the source of truth for the stored shape; the
  existing Zod types in `GameStateSchema.tsx` can stay as the client-facing
  `GameState`/`PieceState` types, or be replaced by Convex's generated
  `Doc<"games">`. The schema is 5 fields and stable, so either is low-risk.

### 5.1 Functions (`convex/games.ts`)

Each maps to an existing tRPC procedure almost verbatim. Example — the move
mutation next to today's `piecesTrpc.move`:

```ts
export const movePiece = mutation({
  args: {
    gameId: v.string(), id: v.string(),
    position: v.array(v.number()), lifted: v.boolean(),
  },
  handler: async (ctx, { gameId, id, position, lifted }) => {
    const game = await ctx.db.query("games")
      .withIndex("by_gameId", (q) => q.eq("gameId", gameId)).unique();
    if (!game) throw new Error(`game ${gameId} not found`);
    await ctx.db.patch(game._id, {
      pieces: game.pieces.map((p) =>
        p.id === id ? { ...p, position, lifted } : p),
    });
  },
});
```

Full set: `get` (query), `ensureGame`, `movePiece`, `addPiece`,
`removePiece`, `resetPieces`, `drawCard`, `shuffle`, `resetGame`. Port only
the procedures actually in use (grep showed `pieces.add/move/reset`,
`cards.draw/shuffle` as the live call sites; verify `pieces.remove` /
`gameState.*` and drop them if dead).

### 5.2 Lazy game creation

Today `getGameState` creates a game on first access with a random `deckSeed`.
Convex `query` functions are read-only, so creation moves to an idempotent
`ensureGame({ gameId })` **mutation**: on page mount the client calls it once
(creates the row with a random `deckSeed` and `startedAt` if absent), then
`useQuery(api.games.get, { gameId })` takes over as the live subscription.
`Math.random()` / `Date.now()` are allowed inside Convex mutations.

## 6. Component / file migration map

### Delete

- `src/server/` — entire directory.
- `src/client/trpc/` — `trpcClient.ts`.
- `src/client/hooks/useDiffStreamSubscription.tsx`, `useEventSource.tsx`.
- `src/common/models/diffStreamSchema.ts`.
- `src/client/utils/esbuildHotReload.tsx` + `src/server/trpc/esbuildTrpc.ts`
  (esbuild's built-in `serve()` live reload replaces the tRPC-based one).
- `esbuild-server.config.mjs`, `configure-env.js`, `src/server/db.ts`.
- `src/client/hooks/useGameState copy.tsx` — dead file.
- `src/client/pages/admin-page.tsx`, `src/client/components/AdminPage.tsx` —
  admin page dropped.

### Add

- `convex/schema.ts`, `convex/games.ts` — the table + functions (§5).
- `convex/` config files (created by the `convex` CLI on init).
- `src/client/convexClient.ts` — `new ConvexReactClient(CONVEX_URL)`.
- `src/client/hooks/useGameActions.tsx` — `useMutation`-based wrappers.
- `vercel.json`.

### Rewrite

- `src/client/hooks/useGameState.tsx` — thin shim: `useGameState()` calls
  `useQuery(api.games.get, { gameId })` and returns the existing `GameState`
  shape, so consuming components compile unchanged. **The override layer
  (`useGameStateOverride`, `applyOverrides`) is removed** — Convex
  `useMutation(...).withOptimisticUpdate(...)` does the same job natively.
  Collapse `useRawGameState` to alias `useGameState` (verify its callers
  first).
- `src/client/pages/game-page.tsx` — wrap the tree in `<ConvexProvider>`;
  call `ensureGame` once on mount.
- `esbuild-client.config.mjs` — also emit `index.html` at build time (HTML
  generation moves out of the deleted server); add an esbuild `define` to
  inline `CONVEX_URL`; asset paths drop the `/static` prefix (see §8).

### Touch (swap call sites only)

Call `trpcClient.*` mutations — repoint to `useGameActions` hooks:

- `src/client/components/GamePiece.tsx` — `pieces.move` ×3. Throttle the
  drag-move mutation to ~every 50–100ms; the local dragger stays smooth via
  the mutation's optimistic update.
- `src/client/components/PieceStacks.tsx` — `pieces.add`, `pieces.move` ×2,
  `pieces.reset`.
- `src/client/components/CardStack.tsx` — `cards.draw`, `cards.shuffle`.
- `src/client/components/GamePage.tsx`, `EffectsManager.tsx` — use
  `useGameState()`; should compile unchanged via the shim.

`src/common/` stays — shared between `convex/` and `src/client/`. Convex
bundles its functions from `convex/` and can import shared code from there.

## 7. Key design decisions & trade-offs

1. **One document per game, `pieces` nested.** State is tiny; a
   whole-document patch per move is cheap and keeps the shape identical to
   today. A separate `pieces` table would add joins for no real benefit.

2. **Convex mutations preserve server-side validation.** Argument validators
   (`v.*`) run server-side on every call — the `gameStateSchema.safeParse`
   gate is effectively retained, just expressed in Convex's validator system.

3. **Optimistic updates replace the override layer.** Convex `useMutation`
   supports `.withOptimisticUpdate()`, which patches the local query cache so
   the acting client sees instant feedback. This is exactly what
   `useGameStateOverride` did by hand; that layer is deleted.

4. **Drag = throttled mutations — accepted trade-off.** Each piece move is a
   Convex mutation (a DB transaction). Drag-move calls are throttled to
   ~50–100ms. The dragger is smooth locally (optimistic); remote viewers see
   throttled motion. This is "good enough," not buttery — accepted. Escape
   hatch if it ever feels bad: throttle tuning, or revisit a presence-style
   transport. At near-zero traffic this is also free regardless.

5. **Conflicts are last-write-wins.** Two players dragging one piece — last
   mutation wins. Matches current server behavior.

6. **Free-tier fit.** Convex Starter plan is free with monthly function-call /
   bandwidth / storage limits; the app's traffic is near-zero (mostly zero
   active games), so it stays free. Vercel Hobby covers the static site.

## 8. Build & deploy

### HTML generation moves to build time

`pageHtml.ts` / `pagesRouter.ts` are deleted with the server.
`esbuild-client.config.mjs` instead writes `index.html` into `dist/client/`
(loading `game-page.js`). Asset URLs **drop the `/static` prefix**: with
Vercel serving `dist/client` as the web root, bundles live at
`/pages/game-page.js`, styles at `/styles/index.css`, assets at `/images/...`.

### vercel.json

Convex's native integration runs `convex deploy` as part of the build and
provides `CONVEX_URL` automatically.

```jsonc
{
  "buildCommand": "npx convex deploy --cmd 'npm run build'",
  "outputDirectory": "dist/client",
  "rewrites": [
    { "source": "/", "destination": "/index.html" },
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

Vercel serves a real file when one matches and only falls back to rewrites
otherwise, so the `/(.*)` catch-all (powering the `/:gameId` routes) does not
shadow `/pages/*.js`, `/styles/*.css`, or `/images/*`.

### package.json

- `build` becomes client-only (drop `build:server`); remove `start`,
  `dev:server`, nodemon config. Dev runs the esbuild client watcher plus
  `npx convex dev`.
- **Add:** `convex`.
- **Remove (after cutover):** `@trpc/*`, `trpc`, `ws`, `@types/ws`, `express`
  + `@types/express*`, `express-http-proxy`, `fast-json-patch`,
  `ts-deepmerge`, `eventsource` + `@types/eventsource`, `nodemon`,
  `concurrently`, `dotenv`.

### Environment variables

- `CONVEX_URL` — the deployment URL; provided by the Convex/Vercel
  integration, inlined into the client bundle via an esbuild `define`.
- `CONVEX_DEPLOY_KEY` — used by `convex deploy` during the build; set
  automatically by the native integration.

## 9. Implementation checklist

Traffic is near-zero, so no careful staged swap is needed — do it on a branch
and ship. Rough order:

1. Install the Convex native integration from the Vercel dashboard; run
   `npx convex dev` locally to scaffold `convex/` and link the project.
2. Add `convex/schema.ts` (the `games` table) and `convex/games.ts` (query +
   mutations), ported from the existing tRPC routers.
3. Add `convexClient.ts`; wrap `game-page.tsx` in `<ConvexProvider>`; call
   `ensureGame` on mount.
4. Rewrite `useGameState.tsx` as the `useQuery` shim; remove the override
   layer.
5. Add `useGameActions`; repoint `GamePiece`, `PieceStacks`, `CardStack`;
   throttle drag writes.
6. Update `esbuild-client.config.mjs` (emit `index.html`, inline
   `CONVEX_URL`, drop `/static` prefix); add `vercel.json`; trim
   `package.json`.
7. Delete `src/server/`, the admin page, dead hooks/deps.
8. Deploy a Vercel preview; test multi-client sync and dragging end to end.
9. Update `CLAUDE.md` for the new architecture; point the domain at Vercel;
   decommission Heroku.

## 10. Risks & open questions

- **Drag smoothness.** Throttled mutations may feel less fluid than today for
  *remote* viewers. Mitigation: tune the throttle; optimistic updates keep the
  dragger smooth. Accepted risk with a known escape hatch (§7.4).
- **`ensureGame` race.** Two simultaneous first-visitors could both try to
  create the row. Make `ensureGame` re-check inside the mutation (Convex
  mutations are transactional, so a guarded check-then-insert is safe); the
  `by_gameId` index makes the lookup cheap.
- **`deckSeed` reproducibility.** Card generation must remain a pure function
  of `deckSeed` + `cardsDrawn`; unchanged by this migration, but re-verify the
  seeded shuffle survives the Convex round-trip intact.
- **Schema drift.** The Convex `v.*` schema and the Zod `GameStateSchema` now
  describe the same shape in two places. Keep them in sync, or generate one
  from the other (`convex-helpers` has Zod support).
- **Dev hot-reload.** The tRPC-based reload is replaced by esbuild's built-in
  `serve()` live reload + `npx convex dev`; confirm the dev loop still works.

## 11. Rollback

The Heroku app and `src/server/` stay intact until the final cutover, so
rollback before then is "don't switch the domain." Tag the pre-migration
commit (`pre-convex`) before deleting the server code; after cutover,
rollback means redeploying that tag to Heroku and pointing the domain back.

## 12. Alternatives considered

- **Liveblocks** — collaboration infrastructure with a Presence channel
  purpose-built for high-frequency ephemeral motion (genuinely the smoothest
  option for remote drag). Rejected because it is only a *connectable-account*
  Marketplace integration, not native: separate dashboard, separate bill. The
  marketplace integration mainly just auto-syncs API keys. Convex's native
  integration (single pane, single bill) plus restored server-side validation
  outweighed the drag-smoothness edge for a turn-paced board game.
- **PartyKit** — conceptually the closest match to the original architecture
  (one stateful server per room). Rejected: it is a Cloudflare product, not on
  the Vercel Marketplace — it would mean two platforms and two bills, the
  exact thing this migration is meant to escape, and its post-acquisition
  trajectory is uncertain.
- **WebRTC peer-to-peer** — rejected. It still requires a signaling server
  (the same persistent-connection problem) plus TURN relays for users behind
  strict NATs, and it has no source of truth: the board state would not
  persist when peers disconnect, forcing host-migration and CRDT machinery.
  More infrastructure and more complexity, not less.
- **Polling + Redis on pure Vercel functions** — rejected once it was clear
  piece dragging is continuous, not infrequent; polling latency would be too
  visible.
