import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export const sizeValidator = v.union(
  v.literal("large"),
  v.literal("medium"),
  v.literal("small"),
);

export const colorValidator = v.union(
  v.literal("green"),
  v.literal("red"),
  v.literal("blue"),
  v.literal("yellow"),
  v.literal("black"),
);

/** A piece position is an [x, y] pair. Convex has no tuple validator. */
export const positionValidator = v.array(v.number());

export const pieceValidator = v.object({
  id: v.string(),
  size: sizeValidator,
  color: colorValidator,
  position: positionValidator,
  lifted: v.boolean(),
});

export default defineSchema({
  games: defineTable({
    // The game id is the first URL path segment; "" is the default game.
    gameId: v.string(),
    startedAt: v.number(),
    deckSeed: v.number(),
    cardsDrawn: v.number(),
    pieces: v.array(pieceValidator),
  }).index("by_gameId", ["gameId"]),
});
