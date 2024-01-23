import { Transition } from "@headlessui/react";
import React from "react";
import { useGameState } from "../hooks/useGameState";
import { BoardPositionProvider } from "./BoardPositionContext";
import { GameBoard } from "./GameBoard";
import { GamePiece } from "./GamePiece";
import { PieceStacks } from "./PieceStacks";
import { classNames } from "../utils/classNames";

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
        <h1
          className={classNames(
            "text-7xl font-black uppercase tracking-[0.4em] text-center p-4",
            "text-slate-900 dark:[text-shadow:4px_4px_0px_theme(colors.slate.100),-4px_-4px_0px_theme(colors.slate.100)]"
          )}
        >
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
