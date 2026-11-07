# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

A web-based clone of the board game *Concept*. Players place colored/sized pieces on a shared board and draw clue cards; all clients see the same board state in real time. State is synced through [Convex](https://convex.dev); the app deploys to Vercel as a static site.

## Commands

Requires Node 24.x / npm 10+ (see `.nvmrc`, `package.json` engines).

- `npm run dev` — runs the esbuild client watcher/dev-server and `convex dev` in parallel. Client is served by esbuild on `ES_BUILD_DEV_PORT` (default 3001), with SPA fallback so `/:gameId` routes work.
- `npm run build` — production client build (`esbuild-client.config.mjs`) into `dist/client/`.
- `npm run tsc` — typecheck only (`tsc --noEmit`). There is no test suite.
- `npm run format` — Prettier over `src/**/*.{ts,tsx}`.

`npx convex dev` (run once, and as part of `npm run dev`) links the Convex project, generates `convex/_generated/`, and writes `CONVEX_URL` into `.env.local`. **`convex/_generated/` must exist before `npm run build` or `npm run tsc` can resolve.**

## Build system

esbuild is the only bundler — `esbuild-client.config.mjs`:
- Bundles every file in `src/client/pages/` and every `*index.css` in `src/client/styles/` as separate entry points into `dist/client/static/`. **Adding a new page = adding a file to `src/client/pages/`.**
- Runs PostCSS/Tailwind, copies `static/` into `dist/client/static/`, and emits `dist/client/index.html`.
- Inlines `process.env.NODE_ENV` and `process.env.CONVEX_URL` via esbuild `define`.

Convex functions in `convex/` are deployed by the Convex CLI (`convex deploy`), wrapped into the Vercel build command in `vercel.json`.

## Architecture

Source roots:
- `src/common/` — shared client code: the Zod schemas (`models/GameStateSchema.tsx`) and utils.
- `src/client/` — React 18 frontend.
- `convex/` — Convex backend: schema (`schema.ts`) and query/mutation functions (`games.ts`).

### Real-time game state

There is no custom server. Game state lives in Convex — one document per game in the `games` table (`convex/schema.ts`), keyed by `gameId`.

1. `gameId` is the first path segment of the URL (`src/client/gameId.ts`); empty string is the default game.
2. `convex/games.ts` holds the functions: `get` (live query), `ensureGame` (lazy create on first visit), and the mutations `addPiece`, `movePiece`, `resetPieces`, `drawCard`, `shuffle`. Mutations validate their args server-side via Convex `v.*` validators and are the single chokepoint for state changes.
3. Clients subscribe with Convex's `useQuery`; it is reactive — components re-render on every change. That is the real-time sync.
4. Mutations apply optimistically on the client (`withOptimisticUpdate`) for instant local feedback.

### Client state access

- `src/client/hooks/useGameState.tsx` — `GameStateProvider` subscribes to the Convex `get` query, calls `ensureGame` on mount, and projects the Convex document into the `GameState` shape. `useGameState()` reads it; `useGameStateListener()` fires a callback on each change (used by `EffectsManager` for sounds/effects).
- `src/client/hooks/useGameActions.tsx` — game mutations bound to the current `gameId`, with optimistic updates on `movePiece`/`addPiece`. Drag handlers throttle `movePiece` via `useThrottledCallback` (`DRAG_SYNC_MS`).

### Routing & pages

The app is a static site. `esbuild-client.config.mjs` emits a single `dist/client/index.html`; `vercel.json` rewrites all paths to it (SPA fallback). The `/:gameId` route is just a URL the client reads — there is no server-side routing. The one entry point is `src/client/pages/game-page.tsx`, which calls `renderPage()` inside a `ConvexProvider`.

### Game content

`src/client/cards/` holds clue-card text (split by difficulty: easy/medium/hard/media/saying), assembled into 9-clue cards by `cards.ts` using a seeded shuffle. `src/client/concepts/` defines the board's concept squares and their SVG icons (`components/icons/`). Card order per game is reproducible from `deckSeed` in the game state.

## Conventions

- TypeScript `strict` mode; classic React JSX (`jsx: "react"`, so `import React` is required in `.tsx` files).
- Validate client-side external data with Zod schemas from `src/common/models/`; Convex functions validate with Convex `v.*` validators (`convex/schema.ts`).
- Deployment: static client on Vercel + Convex (provisioned via the Vercel Convex Marketplace integration). See `docs/migration-to-vercel.md`.
