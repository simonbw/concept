import React from "react";
import Draggable from "react-draggable";
import { useGameState } from "../hooks/useGameState";
import { trpcClient } from "../trpc/trpcClient";
import { useBoardRef } from "./BoardPositionContext";
import { GamePieceIcon } from "./GamePieceIcon";
import { classNames } from "../utils/classNames";

export const GamePiece: React.FC<{ id: string }> = ({ id }) => {
  const gameState = useGameState();
  const [dragging, setDragging] = React.useState(false);
  const boardRef = useBoardRef();
  if (!boardRef) return null;
  if (!gameState) return null;

  const piece = gameState.pieces.find((piece) => piece.id === id);
  if (!piece) return null;

  return (
    <Draggable
      offsetParent={boardRef}
      position={
        dragging ? undefined : { x: piece.position[0], y: piece.position[1] }
      }
      onStart={() => setDragging(true)}
      onStop={(e, data) => {
        setDragging(false);
        trpcClient.pieces.move.mutate({
          id: piece.id,
          position: [data.x, data.y],
        });
      }}
      onDrag={(e, data) => {
        // TODO: Debounce
        trpcClient.pieces.move.mutate({
          id: piece.id,
          position: [data.x, data.y],
        });
      }}
    >
      <span
        className={classNames(
          "absolute z-10",
          !dragging && "transition-transform"
        )}
      >
        <GamePieceIcon
          size={piece.size}
          color={piece.color}
          dragging={dragging}
        />
      </span>
    </Draggable>
  );
};
