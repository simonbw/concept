import { createTRPCProxyClient, createWSClient, wsLink } from "@trpc/client";
import type { TrpcRouter } from "../../server/trpc/trpcRouter";

const wsUrl = `ws://${window.location.host}/trpc`;
export const trpcClient = createTRPCProxyClient<TrpcRouter>({
  links: [
    wsLink({
      client: createWSClient({ url: wsUrl }),
    }),
  ],
});
