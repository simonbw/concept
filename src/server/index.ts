import { createServer } from "http";
import { makeApp } from "./app";
import { getPort } from "./utils/envUtils";

// Serve in dev mode (Is this not in production too?)
makeApp().then(({ app, wss }) => {
  const server = createServer(app);

  server.on("upgrade", (request, socket, head) => {
    wss.handleUpgrade(request, socket, head, (socket) => {
      wss.emit("connection", socket, request);
    });
  });

  const port = getPort();
  server.listen(port, () => {
    console.log(`[server] Concept serving at http://localhost:${port}`);
    console.log("[server] NODE_ENV:", process.env.NODE_ENV);
  });
});

process.on("unhandledRejection", (error: Error) => {
  console.warn("unhandledRejection!", error.message);
  console.error(error);
  // process.exit(1);
});

process.on("uncaughtException", (error: Error) => {
  console.warn("uncaughtException!", error.message);
  console.error(error);
  // process.exit(1);
});
