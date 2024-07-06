import { Transition } from "@headlessui/react";
import React, { useEffect, useState } from "react";
import Draggable from "react-draggable";
import {
  GameStateOverride,
  useGameState,
  useGameStateOverride,
  useRawGameStateListener,
} from "../hooks/useGameState";
import { trpcClient } from "../trpc/trpcClient";
import { classNames } from "../utils/classNames";
import { useBoardRef } from "./BoardPositionContext";
import { GamePieceIcon } from "./GamePieceIcon";

export const GamePiece: React.FC<{ id: string }> = ({ id }) => {
  const gameState = useGameState();
  const rawGameState = useGameState();
  const [dragging, setLifted] = useState(false);
  const [override, setOverride] = useState<GameStateOverride | undefined>(
    undefined
  );
  useGameStateOverride(override);
  const boardRef = useBoardRef();

  useRawGameStateListener((newState, oldState) => {
    if (!gameState) return;
    const piece = newState.pieces.find((piece) => piece.id === id);
    if (!piece) return;
    const oldPiece = oldState?.pieces.find((piece) => piece.id === id);
    if (!oldPiece) return;
    // Cancel the override once the piece has been set down
    if (!piece.lifted && oldPiece.lifted) {
      setOverride(undefined);
    }
  });

  if (!boardRef) return null;
  if (!gameState) return null;
  if (!rawGameState) return null;

  const piece = gameState.pieces.find((piece) => piece.id === id);
  const rawPiece = rawGameState.pieces.find((piece) => piece.id === id);
  if (!piece) return null;
  if (!rawPiece) return null;

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
          setLifted(true);
          setOverride({ id: piece.id, lifted: true, position: piece.position });
          trpcClient.pieces.move.mutate({
            id: piece.id,
            position: piece.position,
            lifted: true,
          });
        }}
        onStop={(e, data) => {
          setLifted(false);
          setOverride({
            id: piece.id,
            lifted: false,
            position: [data.x, data.y],
          });
          trpcClient.pieces.move.mutate({
            id: piece.id,
            position: [data.x, data.y],
            lifted: false,
          });
        }}
        onDrag={(e, data) => {
          // TODO: Debounce
          setOverride({
            id: piece.id,
            lifted: true,
            position: [data.x, data.y],
          });
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
