import React from "react";
import { RoomScreen } from "../../RoomScreen";
import { WitnessPuzzle } from "../../puzzles/Witness/WitnessPuzzle";
import { trpcClient } from "../../../../trpc/trpcClient";
import { useGameState } from "../../../../hooks/useGameState";
import { useRoomNumber } from "../../../../hooks/useRoomNumber";

const MazePuzzle1Screen: React.FC = () => {
  const gameState = useGameState();
  const roomNumber = useRoomNumber();

  if (!gameState) return null;
  const { start, end, walls, visibleWalls1, visibleWalls2, size } =
    gameState.config.mazePuzzle1;

  return (
    <RoomScreen>
      <WitnessPuzzle
        gridSize={size}
        onComplete={() => {
          trpcClient.admin.progress.mutate({ puzzleName: "witness" });
        }}
        start={start}
        end={end}
        visibleWalls={roomNumber == 1 ? visibleWalls1 : visibleWalls2}
        allWalls={walls}
      />
    </RoomScreen>
  );
};

export default MazePuzzle1Screen;
