import { adminTrpcRouter } from "./adminRouter";
import { cardsTrpcRouter } from "./cardsRouter";
import { esbuildTrpcRouter } from "./esbuildTrpc";
import { gameStateTrpcRouter } from "./gameStateTrpc";
import { piecesTrpcRouter } from "./piecesTrpc";
import { trpc } from "./trpc";

export const trpcRouter = trpc.router({
  healthcheck: trpc.procedure.query(() => {
    return { ok: true };
  }),
  esbuild: esbuildTrpcRouter,
  gameState: gameStateTrpcRouter,
  pieces: piecesTrpcRouter,
  cards: cardsTrpcRouter,
  admin: adminTrpcRouter,
});

export type TrpcRouter = typeof trpcRouter;
