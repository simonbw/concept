import { idMaker } from "../../common/utils/idMaker";
import { rInteger } from "../../common/utils/randUtils";
import { updateGameState } from "../gameState";
import { trpc } from "./trpc";

const makeId = idMaker();

export const cardsTrpcRouter = trpc.router({
  // Mutations
  draw: trpc.procedure.mutation(async () => {
    await updateGameState((gameState) => {
      return {
        ...gameState,
        cardsDrawn: gameState.cardsDrawn + 1,
      };
    });
  }),

  shuffle: trpc.procedure.mutation(async () => {
    await updateGameState((gameState) => {
      return {
        ...gameState,
        cardsDrawn: 0,
        // deckSeed: rInteger(0, Number.MAX_SAFE_INTEGER),
      };
    });
  }),
});
