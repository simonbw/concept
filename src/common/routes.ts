// Define routes here so they can be referenced safely from both the server and client
const r = {
  // Dev
  esbuild: "/esbuild",

  // Pages
  home: "/",
  admin: "/admin",
  room1: "/room-1",
  room2: "/room-2",
  clock1: "/clock-1",
  clock2: "/clock-2",
  huffmanManual: "/huffman-manual",
  huffmanClue: "/huffman-clue",

  playtest: {
    index: "/playtest/",
    puzzle1: "/playtest/puzzle-1",
    puzzle1ez: "/playtest/puzzle-1-ez",
    clue1a: "/playtest/clue-1-a",
    clue1b: "/playtest/clue-1-b",
    puzzle2a: "/playtest/puzzle-2-a",
    puzzle2b: "/playtest/puzzle-2-b",
  },

  // Camera Streams
  camera1: "/cameras/1",
  camera2: "/cameras/2",

  // Api
  gameStateStream: "/api/game-state-stream",
  gameState: "/api/game-state",

  // Signaling
  setPeerId: "/api/signaling/set-peer-id",
  resetSignaling: "/api/signaling/reset",

  // Admin
  resetGame: "/api/reset-game",

  // Player
  logIn: "/api/log-in",
  logOut: "/api/log-out",
};

export const routes = r;
