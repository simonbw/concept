import { Transition } from "@headlessui/react";
import React, { PropsWithChildren, useState } from "react";
import { classNames } from "../utils/classNames";
import { Tuple } from "../../common/utils/typeUtils";
import { allCards } from "./cards";
import { choose } from "../../common/utils/randUtils";

export const CardStack: React.FC = () => {
  const [cardDrawn, setCardDrawn] = useState(false);

  return (
    <>
      {cardDrawn && (
        <DrawnCardBackdrop onClose={() => setCardDrawn(false)}>
          <DrawnCard />
        </DrawnCardBackdrop>
      )}
      <div className="relative rounded-xl break-all hyphens-auto aspect-[3/2] max-w-full max-h-full">
        <div
          className={classNames(
            "absolute inset-2 rounded-xl flex items-center justify-center shadow select-none cursor-pointer p-2",
            "transition-transform hover:scale-105 hover:shadow-md active:scale-110 active:shadow-lg"
          )}
          onClick={() => setCardDrawn(true)}
        >
          <div className="border-2 border-slate-300 dark:border-slate-600 w-full h-full rounded-xl flex items-center justify-center">
            <img className="w-40" src="/static/images/favicon.png" />
          </div>
        </div>
      </div>
    </>
  );
};

const DrawnCardBackdrop: React.FC<
  PropsWithChildren<{ onClose: () => void }>
> = ({ children, onClose }) => {
  return (
    <Transition
      appear
      show
      enter="transition-opacity duration-150"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      as={React.Fragment}
    >
      <div
        className="fixed inset-0 w-full h-full bg-slate-900/20 z-50 backdrop-blur-[2px] flex items-center justify-center"
        onClick={() => onClose()}
      >
        {children}
      </div>
    </Transition>
  );
};

const DrawnCard: React.FC = () => {
  const [items] = useState<Tuple<string, 9>>(() => choose(...allCards));

  return (
    <Transition
      appear
      show
      enter="transition delay-75 duration-150"
      enterFrom="-rotate-90 scale-0 opacity-0"
      enterTo="rotate-0 scale-100 opacity-100"
      as={React.Fragment}
    >
      <div className="relative rounded-xl shadow-gray-500/50 shadow-xl select-none aspect-[2/3] w-64 bg-white dark:bg-slate-800 p-2">
        <div className="border-2 border-slate-300 dark:border-slate-600 rounded-xl w-full h-full">
          <ol className="w-full h-full flex flex-col justify-between items-center p-3">
            <CardItem item={items[0]} index={0} />
            <CardItem item={items[1]} index={1} />
            <CardItem item={items[2]} index={2} />

            <hr className="w-full border-slate-300 dark:border-slate-600" />

            <CardItem item={items[3]} index={3} />
            <CardItem item={items[4]} index={4} />
            <CardItem item={items[5]} index={5} />

            <hr className="w-full border-slate-300 dark:border-slate-600" />

            <CardItem item={items[6]} index={6} />
            <CardItem item={items[7]} index={7} />
            <CardItem item={items[8]} index={8} />
          </ol>
        </div>
      </div>
    </Transition>
  );
};

const CardItem: React.FC<{ item: string; index: number }> = ({
  item,
  index,
}) => {
  return (
    <li
      className={classNames(
        "w-full flex items-center tracking-tight rounded-full dark:text-slate-100",
        index < 3 && "bg-blue-100 dark:bg-blue-900",
        index >= 3 && index < 6 && "bg-orange-100 dark:bg-orange-900",
        index >= 6 && "bg-slate-100 dark:bg-slate-700"
      )}
    >
      <span
        className={classNames(
          "grow-0 rounded-full shrink-0 h-full min-h-6 w-6 text-white flex items-center justify-center gap-2",
          index < 3 && "bg-blue-500",
          index >= 3 && index < 6 && "bg-orange-500",
          index >= 6 && "bg-slate-700 dark:bg-slate-600"
        )}
      >
        {index + 1}
      </span>
      <span className="grow text-center">{item}</span>
    </li>
  );
};
