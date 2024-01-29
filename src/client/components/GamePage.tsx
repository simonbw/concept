import { Transition } from "@headlessui/react";
import React, { useState } from "react";
import { useGameState } from "../hooks/useGameState";
import { classNames } from "../utils/classNames";
import { BoardPositionProvider } from "./BoardPositionContext";
import { GameBoard } from "./GameBoard";
import { GamePiece } from "./GamePiece";
import { PieceStacks } from "./PieceStacks";
import { HowToModal } from "./HowToModal";

export const GamePage: React.FC = () => {
  const gameState = useGameState();

  const [compact, setCompact] = useState(false);

  return (
    <div className="p-8 flex flex-col items-center justify-start min-h-screen">
      <button
        className={classNames(
          "absolute top-4 left-4 z-40",
          "flex items-center justify-center",
          "rounded-full w-8 h-8 shadow-slate-500/80 dark:shadow-black/80 shadow-md bg-slate-600 text-slate-100"
        )}
        onClick={() => setCompact((c) => !c)}
      >
        <span
          className={classNames(
            "transition-transform duration-300",
            compact ? "rotate-90" : "-rotate-90"
          )}
        >
          {"⏵"}
        </span>
      </button>
      <HowToModal />
      <Transition
        show={!compact}
        appear
        as="div"
        className="transition-all duration-500 shrink"
        enterFrom="opacity-0 basis-1"
        enterTo="opacity-100 translate-y-0 basis-24"
        leaveFrom="opacity-100 translate-y-0 basis-24"
        leaveTo="opacity-0 basis-1"
      >
        <h1
          className={classNames(
            "text-7xl font-black uppercase tracking-[0.4em] text-center p-4 mb-4",
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
