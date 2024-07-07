import { Transition } from "@headlessui/react";
import React from "react";
import { useGameState } from "../hooks/useGameState";
import { classNames } from "../utils/classNames";
import { BoardPositionProvider } from "./BoardPositionContext";
import { EffectsManager } from "./EffectsManager";
import { GameBoard } from "./GameBoard";
import { GamePiece } from "./GamePiece";
import { PieceStacks } from "./PieceStacks";
import { useSettings } from "./SettingsContext";
import { HowToModal } from "./settings/HowToModal";
import { MuteButton } from "./settings/MuteButton";
import { TitleCollapseButton } from "./settings/TitleCollapseButton";

export const GamePage: React.FC = () => {
  const gameState = useGameState();
  return (
    <div className="p-8 flex flex-col items-center justify-start min-h-screen">
      {/* Settings bar */}
      <div className="absolute top-4 left-4 z-40 flex gap-2">
        <TitleCollapseButton />
      </div>

      {/* Help bar */}
      <div className="fixed top-4 right-4 z-40 flex gap-2">
        <MuteButton />
        <HowToModal />
      </div>

      <PageHeading />

      <BoardPositionProvider>
        <EffectsManager />
        {gameState?.pieces.map((piece, i) => (
          <GamePiece key={i} id={piece.id} />
        ))}

        <PieceStacks />

        <GameBoard />
      </BoardPositionProvider>
    </div>
  );
};

export const PageHeading: React.FC = () => {
  const { titleCollapsed } = useSettings();
  return (
    <Transition
      show={!titleCollapsed}
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
  );
};
