import React from "react";
import { useGameState } from "../hooks/useGameState";
import { BoardPositionProvider } from "./BoardPositionContext";
import { ConceptSquare } from "./ConceptSquare";
import { GamePiece } from "./GamePiece";
import { PieceStacks } from "./PieceStacks";
import {
  concepts1,
  concepts2,
  concepts3,
  concepts4,
  concepts5,
} from "./concepts";

export const GamePage: React.FC = () => {
  const gameState = useGameState();

  return (
    <div className="p-8">
      <h1 className="text-6xl font-black uppercase tracking-[0.4em] text-center">
        Concept
      </h1>
      <BoardPositionProvider>
        {gameState?.pieces.map((piece, i) => (
          <GamePiece key={i} id={piece.id} />
        ))}
        <PieceStacks />

        <div className="flex flex-row items-start gap-2">
          <div className="grid grid-cols-2 gap-x-0 gap-y-2 w-full justify-around relative">
            {concepts1.map((concept, i) => (
              <ConceptSquare key={i} concept={concept} index={i} />
            ))}
          </div>
          <div className="grid grid-cols-2 gap-x-0 gap-y-2 w-full justify-around relative">
            {concepts2.map((concept, i) => (
              <ConceptSquare key={i} concept={concept} index={i} />
            ))}
          </div>
          <div className="grid grid-cols-2 gap-x-0 gap-y-2 w-full justify-around relative">
            {concepts3.map((concept, i) => (
              <ConceptSquare key={i} concept={concept} index={i} />
            ))}
          </div>
          <div className="grid grid-cols-2 gap-x-0 gap-y-2 w-full justify-around relative">
            {concepts4.map((concept, i) => (
              <ConceptSquare key={i} concept={concept} index={i} />
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-x-0 gap-y-2 w-full justify-around relative">
          {concepts5.map((concept, i) => (
            <ConceptSquare key={i} concept={concept} index={i} />
          ))}
        </div>
      </BoardPositionProvider>
    </div>
  );
};
