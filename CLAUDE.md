# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

A web-based clone of the board game *Concept*. Players place colored/sized pieces on a shared board and draw clue cards; all clients see the same board state in real time.

## Commands

Requires Node 20.x / npm 10.x (see `.nvmrc`, `package.json` engines).

- `npm run dev` — full dev mode: rebuilds client + server on change, runs the server under `nodemon`. Client hot-reload via an esbuild dev server on `ES_BUILD_DEV_PORT` (default 3001); app server on `PORT` (default 3000).
- `npm run build` — production build (`build:client` + `build:server`).
- `npm start` — run the production build (`dist/server/index.js`); requires `npm run build` first.
- `npm run tsc` — typecheck only (`tsc --noEmit`). There is no test suite.
- `npm run format` — Prettier over `src/**/*.{ts,tsx}`.

Copy `.env.sample` to `.env` for local config (`PORT`, `ES_BUILD_DEV_PORT`). `configure-env.js` loads `.env` for the nodemon-run server.

## Build system

esbuild is the only bundler — there are two config scripts, not a CLI flag:
- `esbuild-client.config.mjs` — bundles every file in `src/client/pages/` and every `*index.css` in `src/client/styles/` as separate entry points into `dist/client/`. Also runs PostCSS/Tailwind and copies `static/` into `dist/client/`. **Adding a new page = adding a file to `src/client/pages/`.**
- `esbuild-server.config.mjs` — bundles `src/server/index.ts` into `dist/server/`.

## Architecture

Three source roots, distinguished by where code runs:
- `src/common/` — shared by client and server. Holds the Zod schemas (`models/GameStateSchema.tsx`), `initialGameState.ts`, and utils. **The source of truth for the game-state shape.**
- `src/server/` — Express + tRPC backend.
- `src/client/` — React 18 frontend.

### Real-time game state

There is **no database** (`db.ts` is fully commented out). Game state lives in in-memory `Map`s in `src/server/gameState.ts`, keyed by `gameId`. Games are created lazily on first access and never cleaned up.

State sync is tRPC over WebSocket only (`wsLink`, no HTTP link — see `src/client/trpc/trpcClient.ts`). Flow:
1. The `gameId` is the first path segment of the URL (e.g. `/mygame`); empty string is `DEFAULT_GAME_ID`. It is parsed from `props.req.url` in `makeApp` and put on the tRPC context.
2. Clients subscribe to `gameState.stream`. The first message is a full `replace`; subsequent messages are JSON Patch `diff`s produced by `DiffChannel` (`fast-json-patch`). See `common/models/diffStreamSchema.ts`.
3. Clients mutate via `gameState.patch`, which is a *deep partial* of the schema. The server deep-merges it onto current state (`ts-deepmerge`, `mergeArrays: false`), re-validates with `gameStateSchema.safeParse`, and rejects invalid results with a 400 `WebError`.

`updateGameState(gameId, updater)` is the single chokepoint for all state changes — it stamps `updatedAt`, publishes diffs, and notifies `gameStoreChannel` (used by the admin page to watch all games).

tRPC routers are composed in `src/server/trpc/trpcRouter.ts`; `TrpcRouter` is the type imported by the client for end-to-end type safety.

### Client state access

`src/client/hooks/useGameState.tsx` wraps the stream in a `GameStateProvider` context. Note the **override** mechanism: `useGameStateOverride` lets a component locally apply optimistic piece changes (e.g. during a drag) on top of server state without mutating it — `useRawGameState` sees server truth, `useGameState` sees state-with-overrides. This is the latency-compensation layer.

### Routing & pages

`src/server/middleware/pagesRouter.ts` serves bare HTML shells (`pages/pageHtml.ts`) that load a bundled page script. `/admin` → admin page; `/` and the `/:gameId` catch-all → game page. The two entry points are `src/client/pages/game-page.tsx` and `admin-page.tsx`, each calling `renderPage()`.

### Game content

`src/client/cards/` holds clue-card text (split by difficulty: easy/medium/hard/media/saying), assembled into 9-clue cards by `cards.ts` using a seeded shuffle. `src/client/concepts/` defines the board's concept squares and their SVG icons (`components/icons/`). Card order per game is reproducible from `deckSeed` in the game state.

## Conventions

- TypeScript `strict` mode; classic React JSX (`jsx: "react"`, so `import React` is required in `.tsx` files).
- Validate all external/cross-boundary data with Zod schemas from `src/common/models/`.
