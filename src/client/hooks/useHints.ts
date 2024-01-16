import { Hint } from "../../common/models/GameStateSchema";
import { useGameState } from "./useGameState";
import { useRoomNumber } from "./useRoomNumber";

export function useHints(): ReadonlyArray<Hint> {
  const roomNumber = useRoomNumber();
  const gameState = useGameState();

  return gameState?.hints[`room${roomNumber}`] ?? [];
}
