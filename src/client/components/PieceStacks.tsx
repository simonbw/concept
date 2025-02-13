import React, { useEffect, useRef, useState } from "react";
import Draggable from "react-draggable";
import {
  PieceColor,
  PieceSize,
  pieceColorSchema,
  pieceSizeSchema,
} from "../../common/models/GameStateSchema";
import { useGameState } from "../hooks/useGameState";
import { trpcClient } from "../trpc/trpcClient";
import { classNames } from "../utils/classNames";
import { GamePieceIcon } from "./GamePieceIcon";

export const PieceStacks: React.FC = () => {
  const gameState = useGameState();

  return (
    <div
      className={classNames(
        "flex gap-6 justify-center mb-4",
        "transition-opacity duration-300",
        gameState ? "opacity-100" : "opacity-0"
      )}
    >
      {pieceColorSchema.options.map((color) => (
        <div key={color} className="flex gap-2 items-center">
          {pieceSizeSchema.options
            .filter((size) => size !== "medium")
            .map((size) => (
              <PieceStackButton key={size} color={color} size={size} />
            ))}
        </div>
      ))}

      <button
        className={classNames(
          "dark:text-slate-300/80 dark:hover:text-slate-300 px-4 py-1 rounded-lg hover:bg-slate-400/20 active:bg-slate-400/30"
        )}
        onClick={() => trpcClient.pieces.reset.mutate()}
      >
        Reset Pieces
      </button>
    </div>
  );
};

const PieceStackButton: React.FC<{
  color: PieceColor;
  size: PieceSize;
}> = ({ size, color }) => {
  const gameState = useGameState();
  const existing =
    gameState?.pieces.filter((p) => p.color === color && p.size === size)
      .length ?? 0;

  const disabled =
    (size === "large" && existing >= 1) ||
    (size === "medium" && existing >= 1) ||
    (size === "small" && existing >= 8);

  const [dragPosition, setDragPosition] = useState<{
    x: number;
    y: number;
  } | null>(null);
  const originRef = useRef<HTMLSpanElement>(null);
  const [pieceId, setPieceId] = useState<string | null>(null);

  const [startPosition, setStartPosition] = useState<{
    x: number;
    y: number;
  } | null>(null);

  useEffect(() => {
    const updateStartPosition = () => {
      if (originRef.current) {
        setStartPosition({
          x: originRef.current!.offsetLeft,
          y: originRef.current!.offsetTop,
        });
      }
    };

    if (originRef.current) {
      updateStartPosition();
    }

    addEventListener("resize", updateStartPosition);
    return () => {
      removeEventListener("resize", updateStartPosition);
    };
  }, [originRef.current]);

  return (
    <span ref={originRef} className={classNames(disabled && "invisible")}>
      <Draggable
        position={dragPosition ?? { x: 0, y: 0 }}
        key={size}
        onStart={(e, data) => {
          setDragPosition({ x: data.x, y: data.y });
          console.log("creating piece", color, size, [data.x, data.y]);

          trpcClient.pieces.add
            .mutate({
              color,
              size,
              position: [startPosition!.x + data.x, startPosition!.y + data.y],
              lifted: false,
            })
            .then((piece) => {
              setPieceId(piece.id);
            });
        }}
        onDrag={(e, data) => {
          setDragPosition({ x: data.x, y: data.y });
          if (pieceId) {
            // TODO: Debounce
            trpcClient.pieces.move.mutate({
              id: pieceId,
              position: [startPosition!.x + data.x, startPosition!.y + data.y],
              lifted: true,
            });
          }
        }}
        onStop={(e, data) => {
          setDragPosition(null);
          if (pieceId) {
            trpcClient.pieces.move.mutate({
              id: pieceId,
              position: [startPosition!.x + data.x, startPosition!.y + data.y],
              lifted: false,
            });
            setPieceId(null);
          }
        }}
      >
        <span>
          <GamePieceIcon color={color} size={size} />
        </span>
      </Draggable>
    </span>
  );
};
