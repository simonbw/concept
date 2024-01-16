import { GameState } from "../models/GameStateSchema";

const walls: GameState["config"]["witness"]["walls"] = [
  [1, 1],
  [2, 4],
  [3, 6],
  [2, 6],
  [1, 6],
  [0, 6],
  [1, 4],
  [5, 6],
  [6, 6],
  [7, 6],
  [3, 4],
  [4, 4],
  [6, 4],
  [7, 4],
  [7, 1],
  [6, 2],
  [5, 2],
  [3, 2],
  [3, 1],
  [9, 1],
  [9, 2],
  [9, 3],
  [8, 3],
  [8, 6],
  [8, 4],
  [9, 4],
  [0, 1],
  [2, 1],
  [4, 2],
  [5, 0],
  [1, 3],
  [5, 4],
  [5, 7],
  [8, 8],
  [7, 8],
  [5, 8],
  [6, 8],
  [3, 8],
  [2, 8],
  [1, 8],
  [4, 8],
  [9, 8],
];

const midpoint = Math.floor(walls.length / 2);
const visibleWalls1 = walls.slice(0, midpoint);
const visibleWalls2 = walls.slice(midpoint, walls.length);

export const initialConfigWitnessState: GameState["config"]["witness"] = {
  size: [10, 10],
  start: [0, 0],
  end: [9, 9],
  walls: walls,
  visibleWalls1,
  visibleWalls2,
};
