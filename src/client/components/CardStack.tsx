import React, { useState } from "react";
import { range } from "../../common/utils/arrayUtils";
import { clamp } from "../../common/utils/mathUtils";
import { CardData, allCards } from "../cards/cards";
import { useGameState } from "../hooks/useGameState";
import { trpcClient } from "../trpc/trpcClient";
import { classNames } from "../utils/classNames";
import { DrawnCard } from "./DrawnCard";
import { ModalBackground } from "./ModalBackground";
import { ShuffleIcon } from "./icons/ShuffleIcon";
import { UndoIcon } from "./icons/UndoIcon";

export const CardStack: React.FC = () => {
  const gameState = useGameState();
  const cardsDrawn = gameState?.cardsDrawn ?? 0;
  const cardsRemain = allCards.length - cardsDrawn;

  const [currentCard, setCurrentCard] = useState<CardData | null>(null);

  const stackClassNames = [
    "translate-y-[0.2rem] scale-[0.99]",
    "translate-y-[0.4rem] scale-[0.98]",
    "translate-y-[0.6rem] scale-[0.97]",
    "translate-y-[0.8rem] scale-[0.96]",
    "translate-y-[1.0rem] scale-[0.95]",
    "translate-y-[1.2rem] scale-[0.94]",
    "translate-y-[1.4rem] scale-[0.93]",
    "translate-y-[1.6rem] scale-[0.92]",
    "translate-y-[1.8rem] scale-[0.91]",
    "translate-y-[2.0rem] scale-[0.90]",
    // "translate-y-[2.2rem] scale-[0.89]",
    // "translate-y-[2.4rem] scale-[0.88]",
    // "translate-y-[2.6rem] scale-[0.87]",
    // "translate-y-[2.8rem] scale-[0.86]",
    // "translate-y-[3.0rem] scale-[0.85]",
    // "translate-y-[3.2rem] scale-[0.84]",
    // "translate-y-[3.4rem] scale-[0.83]",
    // "translate-y-[3.6rem] scale-[0.82]",
    // "translate-y-[3.8rem] scale-[0.81]",
    // "translate-y-[4.0rem] scale-[0.80]",
  ];

  const deckRenderSize = clamp(
    Math.ceil((cardsRemain / allCards.length) * stackClassNames.length),
    0,
    stackClassNames.length
  );

  return (
    <>
      {currentCard && (
        <ModalBackground onClose={() => setCurrentCard(null)}>
          <DrawnCard card={currentCard} />
        </ModalBackground>
      )}

      <div className="relative rounded-xl break-all hyphens-auto aspect-[3/2] max-w-full max-h-full">
        {range(0, deckRenderSize - 1)
          .reverse()
          .map((i) => (
            <div
              key={i}
              className={classNames(
                stackClassNames[i],
                "absolute inset-2 rounded-xl flex items-center justify-center shadow select-none p-2",
                "bg-white dark:bg-slate-800 dark:shadow-black/50"
              )}
            >
              <div className="border-2 border-slate-300 dark:border-slate-600 w-full h-full rounded-xl flex items-center justify-center">
                <img className="w-40" src="/static/images/favicon.png" />
              </div>
            </div>
          ))}
        {cardsRemain > 0 && (
          <div
            className={classNames(
              "absolute inset-2 rounded-xl flex items-center justify-center shadow select-none cursor-pointer p-2",
              "bg-white dark:bg-slate-800 dark:shadow-black/50",
              "transition-transform hover:scale-105 hover:shadow-md active:scale-110 active:shadow-lg"
            )}
            onClick={() => {
              trpcClient.cards.draw.mutate();
              setCurrentCard(allCards[cardsDrawn]);
            }}
          >
            <div className="border-2 border-slate-300 dark:border-slate-600 w-full h-full rounded-xl flex items-center justify-center">
              <img className="w-40" src="/static/images/favicon.png" />
            </div>
          </div>
        )}

        {cardsDrawn > 0 && (
          <LastCardButton
            onClick={() => setCurrentCard(allCards[cardsDrawn - 1])}
          />
        )}
        <ShuffleButton />
      </div>
    </>
  );
};

const LastCardButton: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <button
      className={classNames(
        "absolute left-0 drop-shadow-sm  w-6 h-6 rounded-full flex items-center justify-center",
        "bg-slate-500 text-slate-100 dark:bg-slate-800 dark:text-slate-200",
        "transition hover:scale-[1.15] hover:drop-shadow-md active:scale-125 active:drop-shadow-lg"
      )}
      onClick={onClick}
    >
      <UndoIcon className="w-4 h-4" />
    </button>
  );
};

const ShuffleButton: React.FC = () => {
  return (
    <button
      className={classNames(
        "absolute right-0 drop-shadow-sm  w-6 h-6 rounded-full flex items-center justify-center",
        "bg-slate-500 text-slate-100 dark:bg-slate-800 dark:text-slate-200",
        "transition hover:scale-[1.15] hover:drop-shadow-md active:scale-125 active:drop-shadow-lg"
      )}
      onClick={() => trpcClient.cards.shuffle.mutate()}
    >
      <ShuffleIcon className="w-4 h-4" />
    </button>
  );
};
