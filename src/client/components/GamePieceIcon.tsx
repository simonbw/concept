import React from "react";
import { classNames } from "../utils/classNames";
import { PieceColor, PieceSize } from "../../common/models/GameStateSchema";

export const GamePieceIcon: React.FC<{
  className?: string;
  size: PieceSize;
  color: PieceColor;
  dragging?: boolean;
}> = ({ size, color, dragging, className }) => {
  return (
    <span
      className={classNames(
        className,
        "cursor-pointer block",
        "transition overflow-hidden shadow-slate-700/70",
        !dragging && "shadow-sm hover:scale-110",
        dragging && "shadow-xl scale-125",
        size === "small" && "w-4 h-4 rounded-sm",
        size === "medium" && "w-6 h-6 rounded-sm rotate-45",
        size === "large" && "w-10 h-10 rounded-full",
        color === "green" && "bg-green-500",
        color === "red" && "bg-red-500",
        color === "blue" && "bg-blue-500",
        color === "yellow" && "bg-yellow-500",
        color === "black" && "bg-black"
      )}
    />
  );
};
