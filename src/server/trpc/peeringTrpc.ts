import iassign from "immutable-assign";
import { z } from "zod";
import { roomNumberSchema } from "../../common/models/RoomNumber";
import { updateGameState } from "../gameState";
import { trpc } from "./trpc";

export const peeringTrpcRouter = trpc.router({
  setPeerId: trpc.procedure
    .input(
      z.object({
        roomNumber: roomNumberSchema,
        peerId: z.string(),
      }),
    )
    .mutation(async ({ input: { roomNumber, peerId } }) => {
      return updateGameState((old) =>
        iassign(
          old,
          (x) => x.signaling[`room${roomNumber}PeerId`],
          () => peerId,
        ),
      );
    }),

  reset: trpc.procedure.mutation(async () => {
    return updateGameState((old) =>
      iassign(
        old,
        (x) => x.signaling,
        () => ({}),
      ),
    );
  }),
});
