import { observable } from "@trpc/server/observable";
import merge from "ts-deepmerge";
import {
  GameState,
  gameStateSchema,
} from "../../common/models/GameStateSchema";
import { DiffStream } from "../../common/models/diffStreamSchema";
import { idMaker } from "../../common/utils/idMaker";
import { WebError } from "../WebError";
import {
  getGameState,
  getGameStateDiffChannel,
  resetGameState,
  updateGameState,
} from "../gameState";
import { trpc } from "./trpc";

const makeId = idMaker();

export const gameStateTrpcRouter = trpc.router({
  // Queries
  get: trpc.procedure.query(({ ctx }) => getGameState(ctx.gameId)),

  stream: trpc.procedure.subscription(({ ctx }) =>
    observable<DiffStream<GameState>>((observer) => {
      const id = makeId();

      observer.next({ type: "replace", state: getGameState(ctx.gameId) });

      const gameStateDiffChannel = getGameStateDiffChannel(ctx.gameId);
      const listenerId = gameStateDiffChannel.subscribe((data) => {
        observer.next(data);
      });

      return () => {
        gameStateDiffChannel.unsubscribe(listenerId);
      };
    })
  ),

  // Mutations
  reset: trpc.procedure.mutation(async ({ ctx }) => {
    console.log("Resetting game state");
    await resetGameState(ctx.gameId);
    return getGameState(ctx.gameId);
  }),

  patch: trpc.procedure
    .input(gameStateSchema.deepPartial())
    .mutation(async ({ input: gameStatePatch, ctx }) => {
      console.log("Patching Game State", gameStatePatch);

      return await updateGameState(ctx.gameId, (gameState) => {
        const merged = merge.withOptions(
          { allowUndefinedOverrides: false, mergeArrays: false },
          gameState,
          gameStatePatch
        );
        const result = gameStateSchema.safeParse(merged);
        if (result.success) {
          return result.data;
        } else {
          throw new WebError(result.error.message, 400);
        }
      });
    }),
});
