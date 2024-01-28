import { observable } from "@trpc/server/observable";
import { GameState } from "../../common/models/GameStateSchema";
import { DiffStream } from "../../common/models/diffStreamSchema";
import { idMaker } from "../../common/utils/idMaker";
import { gameStoreChannel, getAllGames } from "../gameState";
import { DiffChannel } from "../utils/DiffChannel";
import { trpc } from "./trpc";

const makeId = idMaker();

export const adminTrpcRouter = trpc.router({
  // Mutations
  listGames: trpc.procedure.query(async () => {
    return getAllGames();
  }),

  streamAllGames: trpc.procedure.subscription(({ ctx }) =>
    observable<DiffStream<[string, GameState][]>>((observer) => {
      observer.next({ type: "replace", state: getAllGames() });

      const diffChannel = new DiffChannel<[string, GameState][]>();
      const mainListenerId = gameStoreChannel.subscribe(() => {
        diffChannel.stateChanged(getAllGames());
      });
      const diffListenerId = diffChannel.subscribe((diff) => {
        observer.next(diff);
      });

      return () => {
        diffChannel.unsubscribe(diffListenerId);
        gameStoreChannel.unsubscribe(mainListenerId);
      };
    })
  ),
});
