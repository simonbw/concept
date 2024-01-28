import { applyWSSHandler } from "@trpc/server/adapters/ws";
import express from "express";
import { WebSocketServer } from "ws";
import { DEFAULT_GAME_ID } from "./gameState";
import { errorHandler } from "./middleware/errorHandler";
import { getStaticsMiddleware } from "./middleware/getStaticsMiddleware";
import pagesRouter from "./middleware/pagesRouter";
import { createTrpcContext } from "./trpc/trpc";
import { trpcRouter } from "./trpc/trpcRouter";

export async function makeApp() {
  // Initialize database connection
  // await getDb();

  const wss = new WebSocketServer({ noServer: true });
  applyWSSHandler({
    wss,
    router: trpcRouter,
    createContext: (props) => {
      const url = props.req.url;
      if (!url) throw new Error("No url");

      const gameId = url.split("/")[2] ?? DEFAULT_GAME_ID;

      console.log({ url });
      console.log("creating websocket for game id", gameId);

      return createTrpcContext({ gameId });
    },
  });

  const app = express();

  // Body Parsers
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(express.text());

  // Static Files
  app.use("/static", getStaticsMiddleware());

  // Routes
  app.use(pagesRouter);

  // Error handling
  app.use(errorHandler);

  return { app, wss };
}
