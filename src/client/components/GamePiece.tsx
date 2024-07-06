import { Transition } from "@headlessui/react";
import React from "react";
import Draggable from "react-draggable";
import { useGameState } from "../hooks/useGameState";
import { trpcClient } from "../trpc/trpcClient";
import { classNames } from "../utils/classNames";
import { useBoardRef } from "./BoardPositionContext";
import { GamePieceIcon } from "./GamePieceIcon";

export const GamePiece: React.FC<{ id: string }> = ({ id }) => {
  const gameState = useGameState();
  const [dragging, setDragging] = React.useState(false);
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
          trpcClient.pieces.move.mutate({
            id: piece.id,
            position: piece.position,
            lifted: true,
          });
        }}
        onStop={(e, data) => {
          setDragging(false);
          trpcClient.pieces.move.mutate({
            id: piece.id,
            position: [data.x, data.y],
            lifted: false,
          });
        }}
        onDrag={(e, data) => {
          // TODO: Debounce
          trpcClient.pieces.move.mutate({
            id: piece.id,
            position: [data.x, data.y],
            lifted: true,
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
            lifted={dragging || piece.lifted}
          />
        </span>
      </Draggable>
    </Transition>
  );
};
