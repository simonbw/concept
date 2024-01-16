import { WitnessConfig } from "../models/witnessConfigSchema";

const walls: WitnessConfig["walls"] = [[1, 1]];

const midpoint = Math.floor(walls.length / 2);
const visibleWalls1 = walls.slice(0, midpoint);
const visibleWalls2 = walls.slice(midpoint, walls.length);

export const mazePuzzle1: WitnessConfig = {
  size: [10, 10],
  start: [0, 0],
  end: [9, 9],
  walls: walls,
  visibleWalls1,
  visibleWalls2,
};
