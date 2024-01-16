import { z } from "zod";

export const roomNumberSchema = z.union([z.literal(1), z.literal(2)]);
export type RoomNumber = z.infer<typeof roomNumberSchema>;
