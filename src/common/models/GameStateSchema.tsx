import { z } from "zod";

export const pieceSizeSchema = z.enum(["large", "medium", "small"]);
export type PieceSize = z.infer<typeof pieceSizeSchema>;

export const pieceColorSchema = z.enum([
  "green",
  "red",
  "blue",
  "yellow",
  "black",
]);
export type PieceColor = z.infer<typeof pieceColorSchema>;

export const piecePositionSchema = z.tuple([z.number(), z.number()]);
export type PiecePosition = z.infer<typeof piecePositionSchema>;

export const gameStateSchema = z.object({
  startedAt: z.number().nullable(),

  pieces: z.array(
    z.object({
      id: z.string(),
      size: pieceSizeSchema,
      color: pieceColorSchema,
      position: piecePositionSchema,
    })
  ),

  deckSeed: z.number(),
  cardsDrawn: z.number(),
});

export type GameState = Readonly<z.infer<typeof gameStateSchema>>;
