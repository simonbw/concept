import { z } from "zod";

export const pieceSizeSchema = z.enum(["small", "medium", "large"]);
export type PieceSize = z.infer<typeof pieceSizeSchema>;

export const pieceColorSchema = z.enum([
  "red",
  "green",
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
});

export type GameState = Readonly<z.infer<typeof gameStateSchema>>;
