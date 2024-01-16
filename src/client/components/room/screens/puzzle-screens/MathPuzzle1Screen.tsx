import React from "react";
import { RoomScreen } from "../../RoomScreen";
import { SimpleAnswerPuzzle } from "../../puzzles/SimpleAnswerPuzzle";
import { useRoomNumber } from "../../../../hooks/useRoomNumber";
import { useGameState } from "../../../../hooks/useGameState";
import { trpcClient } from "../../../../trpc/trpcClient";
import { TypedText } from "../../../effects/TypedText";
import { SymbolPuzzleSymbols } from "../../../../utils/symbolPuzzleUtils";

export const MathPuzzle1Screen: React.FC = () => {
  const roomNumber = useRoomNumber();
  const gameState = useGameState();

  if (!gameState) return null;

  const isComplete = gameState.puzzleProgress[`room${roomNumber}`].math1;
  return (
    <RoomScreen title={"Math Puzzle 1" + (isComplete ? " (COMPLETE)" : "")}>
      <SimpleAnswerPuzzle
        isComplete={isComplete}
        onComplete={() =>
          trpcClient.admin.completePuzzle.mutate({
            roomNumber,
            puzzleName: "math1",
          })
        }
        validateAnswer={(answer) => answer === "3"}
      >
        <TypedText>What is 1 + 2?</TypedText>

        <p
          className="text-2xl my-4
        "
        >
          {SymbolPuzzleSymbols.map((s) => (
            <span>{s} </span>
          ))}
        </p>
      </SimpleAnswerPuzzle>
    </RoomScreen>
  );
};
