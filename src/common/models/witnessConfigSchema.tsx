import { z } from "zod";

const witnessCellSchema = z.tuple([z.number(), z.number()]);

export const witnessConfigSchema = z.object({
  size: z.tuple([z.number(), z.number()]),
  walls: z.array(witnessCellSchema),
  visibleWalls1: z.array(witnessCellSchema),
  visibleWalls2: z.array(witnessCellSchema),
  start: witnessCellSchema,
  end: witnessCellSchema,
});

export type WitnessConfig = z.infer<typeof witnessConfigSchema>;
