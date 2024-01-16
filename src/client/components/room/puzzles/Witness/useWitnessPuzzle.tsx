import { useCallback, useEffect, useState } from "react";
import { beep, rest, victoryBeep } from "../../../../../common/utils/beep";
import {
  WitnessCell,
  WitnessMove,
  getPath,
  getSolveState as getSolveStatus,
  isValidMove,
} from "./witnessHelpers";

export function useWitnessPuzzle(
  start: WitnessCell,
  end: WitnessCell,
  gridSize: [number, number],
  allWalls: WitnessCell[],
  onComplete: () => void,
) {
  const [resetting, setResetting] = useState(false);
  const [moves, setMoves] = useState<WitnessMove[]>([]);

  const path = getPath(moves, start);
  const solveStatus = getSolveStatus(path, end, allWalls);

  // Check if the puzzle has just been completed
  useEffect(() => {
    switch (solveStatus) {
      case "correct": {
        victoryBeep();
        onComplete();
        break;
      }
      case "incorrect": {
        rest(100)
          .then(() => beep({ pitch: 0, duration: 200 }))
          .then(() => beep({ pitch: -4, duration: 300 }));
        break;
      }
    }
  }, [solveStatus]);

  return {
    moves,
    addMove: (move: WitnessMove) => {
      if (!resetting && solveStatus === "incomplete") {
        setMoves((moves) => {
          if (isValidMove(move, getPath(moves, start), gridSize)) {
            beep({ pitch: 4, duration: 30 });
            return [...moves, move];
          } else {
            beep({ pitch: 0, duration: 70 });
            return moves;
          }
        });
      }
    },
    undoMove: () => {
      setMoves((moves) => moves.slice(0, -1));
      beep({ pitch: 0, duration: 30 });
    },
    reset: useCallback(async () => {
      // TODO: This is kinda broken
      if (!resetting) {
        setResetting(true);
        for (let i = moves.length; i >= 0; i--) {
          setMoves(moves.slice(0, i));
          await beep({ pitch: 0, duration: 30 });
          await rest(10);
        }
        setResetting(false);
      }
    }, [resetting]),
    resetting,
    solveStatus,
    path,
  };
}
