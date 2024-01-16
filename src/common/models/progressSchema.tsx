import { z } from "zod";

export const progressSchema = z.object({
  login_1: z.boolean(),
  login_2: z.boolean(),
  witness: z.boolean(),
  ticTacToeXWin: z.boolean(),
  ticTacToeOWin: z.boolean(),
  ticTacToeTie: z.boolean(),
  theIncident: z.boolean(),
  secretKeys: z.boolean(),
  huffman: z.boolean(),
});
