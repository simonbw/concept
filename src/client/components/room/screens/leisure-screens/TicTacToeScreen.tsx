import React, { useEffect } from "react";
import { ticTacToeSquareSchema } from "../../../../../common/models/ticTacToeStateSchema";
import {
  beep,
  lossBeep,
  tieBeep,
  victoryBeep,
} from "../../../../../common/utils/beep";
import { useGameState } from "../../../../hooks/useGameState";
import { useKeyDown } from "../../../../hooks/useKeyDown";
import { useRoomNumber } from "../../../../hooks/useRoomNumber";
import { trpcClient } from "../../../../trpc/trpcClient";
import { classNames } from "../../../../utils/classNames";
import {
  getTTTState,
  ticTacToeSquares,
} from "../../../../utils/ticTacToeUtils";
import { RevealedText } from "../../../effects/RevealedText";
import { SlideIn } from "../../../effects/SlideIn";
import { SubSequencer } from "../../../effects/SubSequencer";
import { TypedText } from "../../../effects/TypedText";
import { RoomScreen } from "../../RoomScreen";

export const TicTacToeScreen: React.FC = () => {
  const gameState = useGameState();
  const roomNumber = useRoomNumber();

  if (!gameState) return null;

  const moves = gameState.ticTacToe.moves;
  const xs = moves.filter((_, index) => index % 2 === 0);
  const os = moves.filter((_, index) => index % 2 === 1);
  const isPlayerTurn = moves.length % 2 === roomNumber - 1;
  const finishState = getTTTState(moves);
  const playerSymbol = roomNumber === 1 ? "X" : "O";

  // TODO: Play sound when opponent makes a move

  useEffect(() => {
    // Update puzzles
    if (finishState === "X") {
      trpcClient.admin.progress.mutate({ puzzleName: "ticTacToeXWin" });
    } else if (finishState === "O") {
      trpcClient.admin.progress.mutate({ puzzleName: "ticTacToeOWin" });
    } else if (finishState === "TIE") {
      trpcClient.admin.progress.mutate({ puzzleName: "ticTacToeTie" });
    }

    // Playe some sounds
    if (finishState === playerSymbol) {
      victoryBeep();
    } else if (finishState === "X" || finishState === "O") {
      lossBeep();
    } else if (finishState === "TIE") {
      tieBeep();
    }
  }, [finishState]);

  useKeyDown((event) => {
    switch (event.code) {
      case "Digit1":
      case "Digit2":
      case "Digit3":
      case "Digit4":
      case "Digit5":
      case "Digit6":
      case "Digit7":
      case "Digit8":
      case "Digit9":
        if (isPlayerTurn && finishState === "IN_PROGRESS") {
          const move = ticTacToeSquareSchema.parse(Number(event.code[5]));

          if (!gameState.ticTacToe.moves.includes(move)) {
            trpcClient.ticTacToe.move.mutate({ move });
            beep({ duration: 50 });
          }
        }
      case "KeyR":
        if (
          finishState === "O" ||
          finishState === "X" ||
          finishState === "TIE"
        ) {
          trpcClient.ticTacToe.newGame.mutate();
        }
    }
  });

  return (
    <RoomScreen>
      <SlideIn direction="top-to-bottom">
        <div className="grid grid-cols-3">
          {ticTacToeSquares.map((square, i) => (
            <div
              key={square}
              className={classNames(
                "aspect-square flex justify-center items-center relative",
                square < 7 && "border-b",
                square % 3 !== 0 && "border-r",
              )}
            >
              <span
                className={classNames(
                  "absolute top-1 left-1",
                  isPlayerTurn ? "" : "text-green-500/50",
                )}
              >
                [{square}]
              </span>
              <span className="text-6xl">
                {xs.includes(square) && "X"}
                {os.includes(square) && "O"}
              </span>
            </div>
          ))}
        </div>
      </SlideIn>
      <section className="grid grid-cols-2">
        <div>
          {roomNumber === 1 && (
            <div>
              <TypedText>You are X's</TypedText>
            </div>
          )}
          {roomNumber === 2 && (
            <div>
              <TypedText>You are O's</TypedText>
            </div>
          )}
          {finishState === "X" && (
            <div>
              <TypedText>X wins!</TypedText>
            </div>
          )}
          {finishState === "O" && (
            <div>
              <TypedText>O wins!</TypedText>
            </div>
          )}
          {finishState === "TIE" && (
            <div>
              <TypedText>It's a draw!</TypedText>
            </div>
          )}
          {finishState === "IN_PROGRESS" && (
            <TypedText>
              {isPlayerTurn ? "Your turn" : "Opponent's turn"}
            </TypedText>
          )}
          {finishState !== "IN_PROGRESS" && <TypedText>[R] to reset</TypedText>}
        </div>
        <div className="text-right whitespace-pre-wrap">
          <div>
            <TypedText>X:</TypedText>
            <SlideIn
              direction="left-to-right"
              duration={100}
              className="inline-block"
            >
              <span className="text-inverse px-2 py-1">
                <SubSequencer canStart={gameState.progress.ticTacToeXWin}>
                  <RevealedText interval={80}>xclue</RevealedText>
                </SubSequencer>
              </span>
            </SlideIn>
          </div>
          <div>
            <TypedText>O:</TypedText>
            <SlideIn
              direction="left-to-right"
              duration={100}
              className="inline-block"
            >
              <span className="text-inverse px-2 py-1">
                <SubSequencer canStart={gameState.progress.ticTacToeOWin}>
                  <RevealedText interval={80}>oclue</RevealedText>
                </SubSequencer>
              </span>
            </SlideIn>
          </div>
          <div>
            <TypedText>C:</TypedText>
            <SlideIn
              direction="left-to-right"
              duration={100}
              className="inline-block"
            >
              <span className="text-inverse px-2 py-1">
                <SubSequencer canStart={gameState.progress.ticTacToeTie}>
                  <RevealedText interval={80}>cclue</RevealedText>
                </SubSequencer>
              </span>
            </SlideIn>
          </div>
        </div>
      </section>
    </RoomScreen>
  );
};
