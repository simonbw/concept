import iassign from "immutable-assign";
import { z } from "zod";
import { updateGameState } from "../gameState";
import { trpc } from "./trpc";

const secretKeySchema = z.union([
  z.literal(0),
  z.literal(1),
  z.literal(2),
  z.literal(3),
]);

export const secretKeysTrpcRouter = trpc.router({
  press: trpc.procedure
    .input(z.object({ key: secretKeySchema }))
    .mutation(async ({ input: { key } }) => {
      // TODO: Set timeout?
      const newState = await updateGameState((gameState) => {
        return iassign(
          gameState,
          (g) => g.secretKeys[key],
          () => true,
        );
      });
      if (newState.secretKeys.every((k) => k)) {
        return updateGameState((gameState) => {
          return iassign(
            gameState,
            (g) => g.progress.secretKeys,
            () => true,
          );
        });
      }
      return newState;
    }),
  release: trpc.procedure
    .input(z.object({ key: secretKeySchema }))
    .mutation(async ({ input: { key } }) => {
      return updateGameState((gameState) => {
        return iassign(
          gameState,
          (g) => g.secretKeys[key],
          () => false,
        );
      });
      // TODO: Set timeout?
    }),
});
