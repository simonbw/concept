import iassign from "immutable-assign";
import { z } from "zod";
import { puzzleProgressSchema } from "../../common/models/puzzleProgressSchema";
import { roomNumberSchema } from "../../common/models/RoomNumber";
import { progressSchema } from "../../common/models/progressSchema";
import { updateGameState } from "../gameState";
import { trpc } from "./trpc";

export const adminTrpcRouter = trpc.router({
  startGame: trpc.procedure.mutation(async () => {
    return updateGameState((gameState) => ({
      ...gameState,
      startedAt: Date.now(),
    }));
  }),

  log: trpc.procedure
    .input(
      z.object({
        roomNumber: roomNumberSchema,
        text: z.string(),
      }),
    )
    .mutation(async ({ input: { roomNumber, text } }) => {
      const time = Date.now();
      return updateGameState((gameState) =>
        iassign(
          gameState,
          (g) => g.logs[`room${roomNumber}`],
          (l) => [...l, { text, time }],
        ),
      );
    }),

  deleteLog: trpc.procedure
    .input(
      z.object({
        roomNumber: roomNumberSchema,
        index: z.number(),
      }),
    )
    .mutation(async ({ input: { roomNumber, index } }) => {
      return updateGameState((gameState) =>
        iassign(
          gameState,
          (g) => g.logs[`room${roomNumber}`],
          (l) => l.filter((_, i) => i !== index),
        ),
      );
    }),

  giveHint: trpc.procedure
    .input(
      z.object({
        roomNumber: roomNumberSchema,
        hint: z.string(),
      }),
    )
    .mutation(async ({ input: { hint, roomNumber: room } }) => {
      console.log("Giving hint", room, hint);
      return updateGameState((gameState) =>
        iassign(
          gameState,
          (g) => g.hints[`room${room}`],
          (hints) => [...hints, { text: hint, time: Date.now() }],
        ),
      );
    }),

  progress: trpc.procedure
    .input(
      z.object({
        puzzleName: progressSchema.keyof(),
      }),
    )
    .mutation(async ({ input: { puzzleName } }) =>
      updateGameState((gameState) =>
        iassign(
          gameState,
          (s) => s.progress[puzzleName],
          () => true,
        ),
      ),
    ),

  completePuzzle: trpc.procedure
    .input(
      z.object({
        roomNumber: roomNumberSchema,
        puzzleName: puzzleProgressSchema.keyof(),
      }),
    )
    .mutation(async ({ input: { roomNumber, puzzleName } }) =>
      updateGameState((gameState) =>
        iassign(
          gameState,
          (s) => s.puzzleProgress[`room${roomNumber}`][puzzleName],
          () => true,
        ),
      ),
    ),
});
