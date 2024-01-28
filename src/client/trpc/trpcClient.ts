import { createTRPCClient, createWSClient, wsLink } from "@trpc/client";
import type { TrpcRouter } from "../../server/trpc/trpcRouter";

const isSecure = window.location.protocol === "https:";

const gameId = window.location.pathname.split("/")[1] ?? "";

const wsUrl = `${isSecure ? "wss" : "ws"}://${
  window.location.host
}/trpc/${gameId}`;

export const trpcClient = createTRPCClient<TrpcRouter>({
  links: [
    wsLink({
      client: createWSClient({ url: wsUrl }),
    }),
  ],
});

// export const trpcQuery =
