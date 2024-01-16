export const ticTacToeSquares = [1, 2, 3, 4, 5, 6, 7, 8, 9] as const;
type TTTSquare = (typeof ticTacToeSquares)[number];

export const winningCombos: [TTTSquare, TTTSquare, TTTSquare][] = [
  [1, 2, 3], // top row
  [4, 5, 6], // middle row
  [7, 8, 9], // bottom row
  [1, 4, 7], // left column
  [2, 5, 8], // middle column
  [3, 6, 9], // right column
  [1, 5, 9], // top left to bottom right
  [3, 5, 7], // top right to bottom left
];

export function getTTTState(
  moves: ReadonlyArray<TTTSquare>,
): "X" | "O" | "TIE" | "IN_PROGRESS" {
  const xs = moves.filter((move, index) => index % 2 === 0);
  const os = moves.filter((move, index) => index % 2 === 1);

  for (const combo of winningCombos) {
    if (combo.every((square) => xs.includes(square))) return "X";
    if (combo.every((square) => os.includes(square))) return "O";
  }

  if (moves.length === 9) return "TIE";

  return "IN_PROGRESS";
}

export function roomNumberToSymbol(roomNumber: number): "X" | "O" {
  return roomNumber === 1 ? "X" : "O";
}

export function symbolToRoomNumber(symbol: "X" | "O"): number {
  return symbol === "X" ? 1 : 2;
}
