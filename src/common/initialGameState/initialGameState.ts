import { GameState } from "../models/GameStateSchema";
import { initialConfigWitnessState } from "./initialWitnessState";

export const initialGameState: GameState = {
  startedAt: null,
  signaling: {},
  prisonersDilemma: { startedAt: null, pressedButton: null },
  config: {
    login_1: { username: "simon", password: "1234" },
    login_2: { username: "eric", password: "4321" },
    loginAdmin: { username: "admin", password: "admin" },
    witness: initialConfigWitnessState,
    mazePuzzle1: initialConfigWitnessState,
    mazePuzzle2: initialConfigWitnessState,
    mazePuzzle3: initialConfigWitnessState,
    mazePuzzle4: initialConfigWitnessState,
    mazePuzzle5: initialConfigWitnessState,
  },
  currentUser: {
    room1: null,
    room2: null,
  },
  currentScreen: {
    room1: "login",
    room2: "login",
  },
  ticTacToe: { moves: [], history: [] },
  secretKeys: [false, false, false, false],
  progress: {
    login_1: false,
    login_2: false,
    witness: false,
    ticTacToeXWin: false,
    ticTacToeOWin: false,
    ticTacToeTie: false,
    theIncident: false,
    secretKeys: false,
    huffman: false,
  },
  puzzleProgress: {
    room1: {
      math1: false,
      math2: false,
      math3: false,
      maze1: false,
      maze2: false,
      maze3: false,
      music1: false,
    },
    room2: {
      math1: false,
      math2: false,
      math3: false,
      maze1: false,
      maze2: false,
      maze3: false,
      music1: false,
    },
  },
  hints: {
    room1: [],
    room2: [],
  },
  logs: {
    room1: [],
    room2: [],
  },
};
