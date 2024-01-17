import { esbuildTrpcRouter } from "./esbuildTrpc";
import { gameStateTrpcRouter } from "./gameStateTrpc";
import { trpc } from "./trpc";

export const trpcRouter = trpc.router({
  healthcheck: trpc.procedure.query(() => {
    return { ok: true };
  }),
  esbuild: esbuildTrpcRouter,
  gameState: gameStateTrpcRouter,
});

export type TrpcRouter = typeof trpcRouter;
