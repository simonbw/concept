import { v } from "convex/values";
import { MutationCtx, mutation, query } from "./_generated/server";
import { colorValidator, positionValidator, sizeValidator } from "./schema";

const randomSeed = (): number =>
  Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);

async function requireGame(ctx: MutationCtx, gameId: string) {
  const game = await ctx.db
    .query("games")
    .withIndex("by_gameId", (q) => q.eq("gameId", gameId))
    .unique();
  if (!game) {
    throw new Error(`Game "${gameId}" not found`);
  }
  return game;
}

/** Live query for a game's full state. Returns null until the game exists. */
export const get = query({
  args: { gameId: v.string() },
  handler: (ctx, { gameId }) =>
    ctx.db
      .query("games")
      .withIndex("by_gameId", (q) => q.eq("gameId", gameId))
      .unique(),
});

/**
 * Lazily create a game on first access. Idempotent: the check-then-insert is
 * safe because Convex mutations are transactional and retry on conflict.
 */
export const ensureGame = mutation({
  args: { gameId: v.string() },
  handler: async (ctx, { gameId }) => {
    const existing = await ctx.db
      .query("games")
      .withIndex("by_gameId", (q) => q.eq("gameId", gameId))
      .unique();
    if (existing) return;
    await ctx.db.insert("games", {
      gameId,
      startedAt: Date.now(),
      deckSeed: randomSeed(),
      cardsDrawn: 0,
      pieces: [],
    });
  },
});

export const addPiece = mutation({
  args: {
    gameId: v.string(),
    id: v.string(),
    color: colorValidator,
    size: sizeValidator,
    position: positionValidator,
    lifted: v.boolean(),
  },
  handler: async (ctx, { gameId, id, color, size, position, lifted }) => {
    const game = await requireGame(ctx, gameId);
    await ctx.db.patch(game._id, {
      pieces: [...game.pieces, { id, color, size, position, lifted }],
    });
  },
});

export const movePiece = mutation({
  args: {
    gameId: v.string(),
    id: v.string(),
    position: positionValidator,
    lifted: v.boolean(),
  },
  handler: async (ctx, { gameId, id, position, lifted }) => {
    const game = await requireGame(ctx, gameId);
    await ctx.db.patch(game._id, {
      pieces: game.pieces.map((p) =>
        p.id === id ? { ...p, position, lifted } : p,
      ),
    });
  },
});

export const resetPieces = mutation({
  args: { gameId: v.string() },
  handler: async (ctx, { gameId }) => {
    const game = await requireGame(ctx, gameId);
    await ctx.db.patch(game._id, { pieces: [] });
  },
});

export const drawCard = mutation({
  args: { gameId: v.string() },
  handler: async (ctx, { gameId }) => {
    const game = await requireGame(ctx, gameId);
    await ctx.db.patch(game._id, { cardsDrawn: game.cardsDrawn + 1 });
  },
});

export const shuffle = mutation({
  args: { gameId: v.string() },
  handler: async (ctx, { gameId }) => {
    const game = await requireGame(ctx, gameId);
    await ctx.db.patch(game._id, { cardsDrawn: 0, deckSeed: randomSeed() });
  },
});
