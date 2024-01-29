import React from "react";
import { classNames } from "../utils/classNames";
import { PieceColor, PieceSize } from "../../common/models/GameStateSchema";
import { Transition } from "@headlessui/react";

export const GamePieceIcon: React.FC<{
  className?: string;
  size: PieceSize;
  color: PieceColor;
  dragging?: boolean;
}> = ({ size, color, dragging, className }) => {
  return (
    <Transition
      show
      appear
      as="span"
      // enter="transition duration-300"
      // enterFrom="scale-0 opacity-0"
      // enterTo="scale-100 opacity-100"
      // leave="transition duration-300"
      // leaveFrom="scale-100 opacity-100"
      // leaveTo="scale-0 opacity-0"
    >
      <span
        className={classNames(
          className,
          "cursor-pointer block",
          "transition overflow-hidden shadow-slate-700/70 dark:shadow-black/80",
          "font-bold flex justify-center items-center text-3xl",
          !dragging && "shadow-sm hover:scale-110",
          dragging && "shadow-xl scale-125",
          size === "small" && "w-4 h-4 rounded-sm",
          size === "medium" && "w-6 h-6 rounded-sm rotate-45",
          size === "large" && color === "green"
            ? "w-12 h-12 rounded-full"
            : "w-10 h-10 rounded-full",
          color === "green" && "bg-green-500 text-green-800",
          color === "red" && "bg-red-500 text-red-800",
          color === "blue" && "bg-blue-500 text-blue-800",
          color === "yellow" && "bg-yellow-500 text-yellow-800",
          color === "black" &&
            "bg-black text-slate-500 dark:border dark:border-slate-500"
        )}
      >
        {size === "large" && color === "green" && "?"}
        {size === "large" && color !== "green" && "!"}
      </span>
    </Transition>
  );
};
