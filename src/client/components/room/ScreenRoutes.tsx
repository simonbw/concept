import React, { ReactElement } from "react";
import { z } from "zod";
import { objectKeysTuple } from "../../../common/utils/typeUtils";
import { BootingScreen } from "./screens/BootingScreen";
import { DilemmaScreen } from "./screens/DilemmaScreen";
import { HintScreen } from "./screens/HintScreen";
import { LogScreen } from "./screens/LogScreen";
import { LoginScreen } from "./screens/LoginScreen";
import { MainMenuScreen } from "./screens/MainMenuScreen";
import { NotesScreen } from "./screens/NotesScreen";
import { ArtScreen } from "./screens/leisure-screens/ArtScreen";
import { MusicScreen } from "./screens/leisure-screens/MusicScreen";
import { TicTacToeScreen } from "./screens/leisure-screens/TicTacToeScreen";
import { TvScreen } from "./screens/leisure-screens/TvScreen";
import { MathPuzzle1Screen } from "./screens/puzzle-screens/MathPuzzle1Screen";
import { MathPuzzle2Screen } from "./screens/puzzle-screens/MathPuzzle2Screen";
import { MathPuzzle3Screen } from "./screens/puzzle-screens/MathPuzzle3Screen";
import MazePuzzle1Screen from "./screens/puzzle-screens/MazePuzzle1Screen";
import { MusicPuzzleScreen } from "./screens/puzzle-screens/MusicPuzzleScreen";

type Routes = Record<string, () => ReactElement | null>;

const puzzleRoutes = {
  "math-puzzle-1": () => <MathPuzzle1Screen />,
  "math-puzzle-2": () => <MathPuzzle2Screen />,
  "math-puzzle-3": () => <MathPuzzle3Screen />,
  "maze-puzzle-1": () => <MazePuzzle1Screen />,
  "maze-puzzle-2": () => <MazePuzzle1Screen />,
  "maze-puzzle-3": () => <MazePuzzle1Screen />,
  "music-puzzle-1": () => <MusicPuzzleScreen />,
} satisfies Routes;

const leisureRoutes = {
  "tic-tac-toe": () => <TicTacToeScreen />,
  art: () => <ArtScreen />,
  music: () => <MusicScreen />,
  tv: () => <TvScreen />,
} satisfies Routes;

const otherRoutes = {
  "main-menu": () => <MainMenuScreen />,
  booting: () => <BootingScreen />,
  dilemma: () => <DilemmaScreen />,
  login: () => <LoginScreen />,
  hints: () => <HintScreen />,
  log1: () => <LogScreen room={1} />,
  log2: () => <LogScreen room={2} />,
  notes: () => <NotesScreen roomNumber={1} />,
  transition: () => null,
} satisfies Routes;

export const screenRoutes = {
  ...puzzleRoutes,
  ...leisureRoutes,
  ...otherRoutes,
} satisfies Routes;

export type RoomScreenId = keyof typeof screenRoutes;

export const screenRouteSchema = z.enum(objectKeysTuple(screenRoutes));
