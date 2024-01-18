import React, { useEffect, useRef } from "react";
import Draggable from "react-draggable";
import {
  PieceColor,
  PieceSize,
  pieceColorSchema,
  pieceSizeSchema,
} from "../../common/models/GameStateSchema";
import { trpcClient } from "../trpc/trpcClient";
import { GamePieceIcon } from "./GamePieceIcon";

export const PieceStacks: React.FC = () => {
  return (
    <div className="flex gap-6 justify-center my-8">
      {pieceColorSchema.options.map((color) => (
        <div key={color} className="flex gap-2 items-center">
          {pieceSizeSchema.options.map((size) => (
            <PieceStackButton key={size} color={color} size={size} />
          ))}
        </div>
      ))}
      <button onClick={() => trpcClient.gameState.reset.mutate()}>
        Clear Pieces
      </button>
    </div>
  );
};

const PieceStackButton: React.FC<{
  color: PieceColor;
  size: PieceSize;
}> = ({ size, color }) => {
  const [dragPosition, setDragPosition] = React.useState<{
    x: number;
    y: number;
  } | null>(null);
  const originRef = useRef<HTMLSpanElement>(null);
  const [pieceId, setPieceId] = React.useState<string | null>(null);

  const [startPosition, setStartPosition] = React.useState<{
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
    <span ref={originRef}>
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
            });
          }
        }}
        onStop={(e, data) => {
          setDragPosition(null);
          if (pieceId) {
            trpcClient.pieces.move.mutate({
              id: pieceId,
              position: [startPosition!.x + data.x, startPosition!.y + data.y],
            });
            setPieceId(null);
          }
        }}
      >
        <span className="">
          <GamePieceIcon color={color} size={size} />
        </span>
      </Draggable>
    </span>
  );
};
