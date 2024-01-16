import { z } from "zod";

export const ticTacToeSquareSchema = z.union([
  z.literal(1),
  z.literal(2),
  z.literal(3),
  z.literal(4),
  z.literal(5),
  z.literal(6),
  z.literal(7),
  z.literal(8),
  z.literal(9),
]);

export const ticTacToeStateSchema = z.object({
  moves: z.array(ticTacToeSquareSchema),
  history: z.array(z.union([z.literal("X"), z.literal("O"), z.literal("TIE")])),
});
