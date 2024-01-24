import { Transition } from "@headlessui/react";
import React from "react";
import { CardData } from "../cards/cards";
import { classNames } from "../utils/classNames";

export const DrawnCard: React.FC<{ card: CardData }> = ({ card }) => {
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
            <CardItem item={card[0]} index={0} />
            <CardItem item={card[1]} index={1} />
            <CardItem item={card[2]} index={2} />

            <hr className="w-full border-slate-300 dark:border-slate-600" />

            <CardItem item={card[3]} index={3} />
            <CardItem item={card[4]} index={4} />
            <CardItem item={card[5]} index={5} />

            <hr className="w-full border-slate-300 dark:border-slate-600" />

            <CardItem item={card[6]} index={6} />
            <CardItem item={card[7]} index={7} />
            <CardItem item={card[8]} index={8} />
          </ol>
        </div>
      </div>
    </Transition>
  );
};

export const CardItem: React.FC<{ item: string; index: number }> = ({
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
