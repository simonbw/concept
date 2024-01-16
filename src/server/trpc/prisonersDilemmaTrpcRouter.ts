import { z } from "zod";
import { otherRoom } from "../../client/hooks/useRoomNumber";
import { roomNumberSchema } from "../../common/models/RoomNumber";
import { updateGameState } from "../gameState";
import { trpc } from "./trpc";

export const prisonersDilemmaTrpcRouter = trpc.router({
  startDilemma: trpc.procedure.mutation(() => {
    return updateGameState((gameState) => ({
      ...gameState,
      prisonersDilemma: {
        ...gameState.prisonersDilemma,
        startedAt: Date.now(),
      },
    }));
  }),

  pressKillButton: trpc.procedure
    .input(z.object({ roomNumber: roomNumberSchema }))
    .mutation(({ input: { roomNumber } }) => {
      return updateGameState((gameState) => {
        if (
          gameState.prisonersDilemma.pressedButton === otherRoom(roomNumber)
        ) {
          throw new Error("Other room already pressed the button");
        }
        return {
          ...gameState,
          prisonersDilemma: {
            ...gameState.prisonersDilemma,
            pressedButton: roomNumber,
          },
        };
      });
    }),
});
