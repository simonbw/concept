import { last } from "../../../../../common/utils/arrayUtils";

export type WitnessMove = "UP" | "DOWN" | "LEFT" | "RIGHT";
export type WitnessCell = readonly [number, number];
export type WitnessPath = readonly WitnessCell[];

export function getMove([x, y]: WitnessCell, move: WitnessMove): WitnessCell {
  switch (move) {
    case "UP":
      return [x, y - 1];
    case "DOWN":
      return [x, y + 1];
    case "LEFT":
      return [x - 1, y];
    case "RIGHT":
      return [x + 1, y];
    default:
      throw new Error("Invalid move", move);
  }
}

export function isValidMove(
  move: WitnessMove,
  path: WitnessPath,
  [gridWidth, gridHeight]: [number, number],
): boolean {
  const [x, y] = getMove(last(path), move);
  // No out of bounds
  if (x < 0 || y < 0 || x >= gridWidth || y >= gridHeight) {
    return false;
  }
  // No overlaps
  if (path.some(([x2, y2]) => x2 === x && y2 === y)) {
    return false;
  }

  return true;
}

export function getPath(
  moves: readonly WitnessMove[],
  start: WitnessCell = [0, 0],
): WitnessPath {
  const path = [start];

  for (const move of moves) {
    path.push(getMove(last(path), move));
  }

  return path;
}

export function getSolveState(
  path: WitnessPath,
  end: WitnessCell,
  walls: readonly WitnessCell[],
): "correct" | "incorrect" | "incomplete" {
  if (last(path)[0] !== end[0] || last(path)[1] !== end[1]) {
    return "incomplete";
  }

  const wallSet = new Set(walls.map((cell) => cell.join(",")));
  for (const cell of path) {
    if (wallSet.has(cell.join(","))) {
      return "incorrect";
    }
  }

  // TODO: Do we need every other cell to be in the path?

  return "correct";
}
