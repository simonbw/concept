import { Transition } from "@headlessui/react";
import React from "react";
import { useGameState } from "../hooks/useGameState";
import { BoardPositionProvider } from "./BoardPositionContext";
import { GameBoard } from "./GameBoard";
import { GamePiece } from "./GamePiece";
import { PieceStacks } from "./PieceStacks";

export const GamePage: React.FC = () => {
  const gameState = useGameState();

  return (
    <div className="p-8">
      <Transition
        unmount={false}
        show
        appear
        enter="transition duration-500"
        enterFrom="scale-y-0"
        enterTo="scale-y-100"
        // leave="transition duration-500"
        // leaveFrom="scale-y-100"
        // leaveTo="scale-y-0"
      >
        <h1 className="text-7xl font-black uppercase tracking-[0.4em] text-center p-4">
          Concept
        </h1>
      </Transition>
      <BoardPositionProvider>
        {gameState?.pieces.map((piece, i) => (
          <GamePiece key={i} id={piece.id} />
        ))}
        <PieceStacks />

        <GameBoard />
      </BoardPositionProvider>
    </div>
  );
};
