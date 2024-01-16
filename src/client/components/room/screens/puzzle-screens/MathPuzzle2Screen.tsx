import React from "react";
import { RoomScreen } from "../../RoomScreen";
import { SimpleAnswerPuzzle } from "../../puzzles/SimpleAnswerPuzzle";
import { useRoomNumber } from "../../../../hooks/useRoomNumber";
import { useGameState } from "../../../../hooks/useGameState";
import { trpcClient } from "../../../../trpc/trpcClient";
import { TypedText } from "../../../effects/TypedText";
import { valueToSymbol } from "../../../../utils/symbolPuzzleUtils";

export const MathPuzzle2Screen: React.FC = () => {
  const roomNumber = useRoomNumber();
  const gameState = useGameState();

  if (!gameState) return null;

  const isComplete = gameState.puzzleProgress[`room${roomNumber}`].math2;
  return (
    <RoomScreen title="Math Puzzle 2">
      <SimpleAnswerPuzzle
        isComplete={isComplete}
        onComplete={() =>
          trpcClient.admin.completePuzzle.mutate({
            roomNumber,
            puzzleName: "math2",
          })
        }
        validateAnswer={(answer) => answer === "7"}
      >
        <TypedText>What is {valueToSymbol(1)} + 2?</TypedText>
      </SimpleAnswerPuzzle>
    </RoomScreen>
  );
};
