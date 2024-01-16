import iassign from "immutable-assign";
import { z } from "zod";
import { userIdSchema } from "../../common/models/GameStateSchema";
import { roomNumberSchema } from "../../common/models/RoomNumber";
import { getGameState, updateGameState } from "../gameState";
import { addLog } from "../utils/gameStateUtils";
import { trpc } from "./trpc";

export const authTrpcRouter = trpc.router({
  logIn: trpc.procedure
    .input(
      z.object({
        userId: userIdSchema,
        roomNumber: roomNumberSchema,
      }),
    )
    .mutation(async ({ input: { roomNumber, userId } }) => {
      const puzzleName = `login_${roomNumber}` as const;
      if (userId === "room_user") {
        if (getGameState().progress[puzzleName]) {
          await addLog(roomNumber, `Ok, they logged in again.`);
        } else {
          await addLog(roomNumber, `They finally managed to log in.`);
        }
      } else if (userId === "admin") {
        addLog(roomNumber, `Uh oh.`);
      }
      return updateGameState((gameState) => ({
        ...gameState,
        currentUser: {
          ...gameState.currentUser,
          [`room${roomNumber}`]: userId,
        },
        progress: {
          ...gameState.progress,
          [puzzleName]: true,
        },
      }));
    }),

  logOut: trpc.procedure
    .input(
      z.object({
        roomNumber: roomNumberSchema,
      }),
    )
    .mutation(async ({ input: { roomNumber } }) => {
      addLog(roomNumber, `Huh, they logged out.`);
      return updateGameState((gameState) =>
        iassign(
          gameState,
          (g) => g.currentUser[`room${roomNumber}`],
          () => null,
        ),
      );
    }),
});
