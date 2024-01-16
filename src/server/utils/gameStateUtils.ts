import iassign from "immutable-assign";
import { RoomNumber } from "../../common/models/RoomNumber";
import { updateGameState } from "../gameState";

export async function addLog(roomNumber: RoomNumber, text: string) {
  return updateGameState((gameState) => {
    return iassign(
      gameState,
      (g) => g.logs[`room${roomNumber}`],
      (logs) => [...logs, { text, time: Date.now() }],
    );
  });
}
