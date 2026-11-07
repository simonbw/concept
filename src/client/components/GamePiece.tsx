import { Transition } from "@headlessui/react";
import React, { useState } from "react";
import Draggable from "react-draggable";
import { useGameActions } from "../hooks/useGameActions";
import { useGameState } from "../hooks/useGameState";
import { useThrottledCallback } from "../hooks/useThrottledCallback";
import { classNames } from "../utils/classNames";
import { useBoardRef } from "./BoardPositionContext";
import { GamePieceIcon } from "./GamePieceIcon";

/** How often (ms) intermediate drag positions are synced to other clients. */
const DRAG_SYNC_MS = 50;

export const GamePiece: React.FC<{ id: string }> = ({ id }) => {
  const gameState = useGameState();
  const { movePiece } = useGameActions();
  const throttledMove = useThrottledCallback(movePiece, DRAG_SYNC_MS);
  const [dragging, setDragging] = useState(false);
  const boardRef = useBoardRef();

  if (!boardRef) return null;
  if (!gameState) return null;

  const piece = gameState.pieces.find((piece) => piece.id === id);
  if (!piece) return null;

  return (
    <Transition
      show
      appear
      as="div"
      enter="transition-opacity duration-500"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition duration-500"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <Draggable
        offsetParent={boardRef}
        position={
          dragging ? undefined : { x: piece.position[0], y: piece.position[1] }
        }
        onStart={() => {
          setDragging(true);
          movePiece({ id, position: piece.position, lifted: true });
        }}
        onDrag={(e, data) => {
          throttledMove({ id, position: [data.x, data.y], lifted: true });
        }}
        onStop={(e, data) => {
          setDragging(false);
          throttledMove.cancel();
          movePiece({ id, position: [data.x, data.y], lifted: false });
        }}
      >
        <span
          className={classNames(
            "absolute z-10",
            !dragging && "transition-transform",
          )}
        >
          <GamePieceIcon
            size={piece.size}
            color={piece.color}
            lifted={dragging || piece.lifted}
          />
        </span>
      </Draggable>
    </Transition>
  );
};
