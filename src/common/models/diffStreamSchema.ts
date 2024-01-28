import { Operation } from "fast-json-patch";
import { z } from "zod";

export function diffStreamSchema<T>(state: z.ZodType<T>) {
  return z.union([
    z.object({ type: z.literal("replace"), state }),
    z.object({ type: z.literal("diff"), diff: z.array(operationSchema) }),
  ]) as z.ZodType<DiffStream<T>>;
}

export type DiffStream<T> =
  | { type: "replace"; state: T }
  | { type: "diff"; diff: Operation[] };

export const operationSchema = z.custom<Operation>((value) =>
  z.any().parse(value)
);
