import { z } from "zod";

export const puzzleProgressSchema = z.object({
  math1: z.boolean(),
  math2: z.boolean(),
  math3: z.boolean(),
  maze1: z.boolean(),
  maze2: z.boolean(),
  maze3: z.boolean(),
  music1: z.boolean(),
});

export type PuzzleName = keyof z.infer<typeof puzzleProgressSchema>;
