import { inferAsyncReturnType, initTRPC } from "@trpc/server";

// created for each request
export const createTrpcContext = ({ gameId }: { gameId: string }) => ({
  gameId,
}); // no context
export type TrpcContext = inferAsyncReturnType<typeof createTrpcContext>;

/**
 * Initialization of tRPC backend
 * Should be done only once per backend!
 */
export const trpc = initTRPC.context<TrpcContext>().create();
