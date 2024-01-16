import { z } from "zod";
import { type screenRouteSchema } from "../../client/components/room/ScreenRoutes";
import { roomNumberSchema } from "./RoomNumber";
import { configSchema } from "./configSchema";
import { progressSchema } from "./progressSchema";
import { puzzleProgressSchema } from "./puzzleProgressSchema";
import { ticTacToeStateSchema } from "./ticTacToeStateSchema";

const hintSchema = z.object({
  text: z.string(),
  time: z.number(),
});

export type Hint = z.infer<typeof hintSchema>;

export const userIdSchema = z.union([
  z.literal("room_user"),
  z.literal("admin"),
]);
export type UserId = z.infer<typeof userIdSchema>;

const logSchema = z.object({
  time: z.number(),
  text: z.string(),
});

export type Log = z.infer<typeof logSchema>;

const prisonersDilemmaSchema = z.object({
  startedAt: z.number().nullable(),
  pressedButton: roomNumberSchema.nullable(),
});

const perRoomSchema = <T extends z.ZodType>(schema: T) =>
  z.object({ room1: schema, room2: schema });

const signalingSchema = z.object({
  room1PeerId: z.string().optional(),
  room2PeerId: z.string().optional(),
});

export const gameStateSchema = z.object({
  startedAt: z.number().nullable(),
  prisonersDilemma: prisonersDilemmaSchema,
  config: configSchema,
  ticTacToe: ticTacToeStateSchema,
  currentUser: perRoomSchema(userIdSchema.nullable()),
  signaling: signalingSchema,
  secretKeys: z.tuple([z.boolean(), z.boolean(), z.boolean(), z.boolean()]),
  progress: progressSchema,
  puzzleProgress: perRoomSchema(puzzleProgressSchema),
  hints: perRoomSchema(z.array(hintSchema)),
  logs: perRoomSchema(z.array(logSchema)),
  // this is janky because we can't actually take the schema screenRouteSchema because it's defined in the client
  // and we can't cross that boundary.
  currentScreen: perRoomSchema(z.string() as any as typeof screenRouteSchema),
});

export type GameState = Readonly<z.infer<typeof gameStateSchema>>;
