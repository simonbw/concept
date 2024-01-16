import { adminTrpcRouter } from "./adminTrpc";
import { authTrpcRouter } from "./authTrpc";
import { esbuildTrpcRouter } from "./esbuildTrpc";
import { gameStateTrpcRouter } from "./gameStateTrpc";
import { peeringTrpcRouter } from "./peeringTrpc";
import { prisonersDilemmaTrpcRouter } from "./prisonersDilemmaTrpcRouter";
import { secretKeysTrpcRouter } from "./secretKeysTrpc";
import { ticTacToeTrpcRouter } from "./ticTacToeTrpc";
import { trpc } from "./trpc";

export const trpcRouter = trpc.router({
  healthcheck: trpc.procedure.query(() => {
    return { ok: true };
  }),
  gameState: gameStateTrpcRouter,
  admin: adminTrpcRouter,
  ticTacToe: ticTacToeTrpcRouter,
  auth: authTrpcRouter,
  peering: peeringTrpcRouter,
  esbuild: esbuildTrpcRouter,
  secretKey: secretKeysTrpcRouter,
  dilemma: prisonersDilemmaTrpcRouter,
});

export type TrpcRouter = typeof trpcRouter;
