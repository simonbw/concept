import { z } from "zod";
import { witnessConfigSchema } from "./witnessConfigSchema";

const loginConfigSchema = z.object({
  username: z.string(),
  password: z.string(),
});

export const configSchema = z.object({
  login_1: loginConfigSchema,
  login_2: loginConfigSchema,
  loginAdmin: loginConfigSchema,
  witness: witnessConfigSchema,
  mazePuzzle1: witnessConfigSchema,
  mazePuzzle2: witnessConfigSchema,
  mazePuzzle3: witnessConfigSchema,
  mazePuzzle4: witnessConfigSchema,
  mazePuzzle5: witnessConfigSchema,
});
