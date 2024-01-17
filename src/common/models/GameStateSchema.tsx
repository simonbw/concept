import { z } from "zod";

export const gameStateSchema = z.object({
  startedAt: z.number().nullable(),
});

export type GameState = Readonly<z.infer<typeof gameStateSchema>>;
