import React from "react";
import { RoomScreen } from "../../RoomScreen";
import { SimpleAnswerPuzzle } from "../../puzzles/SimpleAnswerPuzzle";
import { useRoomNumber } from "../../../../hooks/useRoomNumber";
import { useGameState } from "../../../../hooks/useGameState";
import { trpcClient } from "../../../../trpc/trpcClient";
import { TypedText } from "../../../effects/TypedText";

export const MathPuzzle3Screen: React.FC = () => {
  const roomNumber = useRoomNumber();
  const gameState = useGameState();

  if (!gameState) return null;

  const isComplete = gameState.puzzleProgress[`room${roomNumber}`].math3;
  return (
    <RoomScreen title="Math Puzzle 3">
      <SimpleAnswerPuzzle
        isComplete={isComplete}
        onComplete={() =>
          trpcClient.admin.completePuzzle.mutate({
            roomNumber,
            puzzleName: "math3",
          })
        }
        validateAnswer={(answer) => answer === "11"}
      >
        <TypedText>What is Square + Circle?</TypedText>
      </SimpleAnswerPuzzle>
    </RoomScreen>
  );
};
