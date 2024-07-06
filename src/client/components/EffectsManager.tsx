import { Transition } from "@headlessui/react";
import React, { useState } from "react";
import {
  PieceColor,
  PieceSize,
  PieceState,
} from "../../common/models/GameStateSchema";
import { idMaker } from "../../common/utils/idMaker";
import { useGameStateListener } from "../hooks/useGameState";
import { classNames } from "../utils/classNames";
import { playSound } from "../utils/soundUtils";

const makeId = idMaker();

interface Effect {
  type: "pickup" | "setdown";
  id: string;
  color: PieceColor;
  size: PieceSize;
  position: [number, number];
  onEnded: () => void;
}

export const EffectsManager: React.FC = () => {
  const [effects, setEffects] = useState<Effect[]>([]);

  function addEffect(piece: PieceState, type: "pickup" | "setdown") {
    const effect: Effect = {
      id: makeId(),
      type,
      position: piece.position,
      color: piece.color,
      size: piece.size,
      onEnded: () => {
        setEffects((effects) => effects.filter((e) => e !== effect));
      },
    };
    setEffects((effects) => [...effects, effect]);
  }

  useGameStateListener((newState, oldState) => {
    for (const piece of newState.pieces) {
      const lastPiece = oldState?.pieces.find((p) => p.id === piece.id);
      if (piece.lifted && lastPiece?.lifted === false) {
        playSound("pick-up");
        addEffect(piece, "pickup");
      }
      if (!piece.lifted && lastPiece?.lifted) {
        playSound("set-down");
        addEffect(piece, "setdown");
      }
    }
  });

  return (
    <>
      {effects.map((effect) => (
        <EffectSprite key={effect.id} effect={effect} />
      ))}
    </>
  );
};

const EffectSprite: React.FC<{ effect: Effect }> = ({ effect }) => {
  const { color, position, size } = effect;
  return (
    <Transition
      show
      appear
      enter={classNames(
        "transition-[opacity,transform,border] origin-center",
        "ease-out duration-[1000ms]"
      )}
      enterFrom={classNames("scale-[100%] opacity-60 border-8")}
      enterTo={classNames("scale-[512%] border-0 opacity-0")}
      entered={classNames("opacity-0 origin-center border-0", "scale-[512%]")}
      afterEnter={() => effect.onEnded()}
      as={React.Fragment}
    >
      <div
        className={classNames(
          "rounded-full absolute z-10 opaci-80 border-4",
          color === "green" && "border-green-500",
          color === "red" && "border-red-500",
          color === "blue" && "border-blue-500",
          color === "yellow" && "border-yellow-500",
          color === "black" && "border-black dark:border dark:border-slate-500",
          size === "small" && "w-4 h-4 rounded-sm",
          size === "medium" && "w-6 h-6 rounded-sm rotate-45",
          size === "large" && color === "green"
            ? "w-12 h-12 rounded-full"
            : "w-10 h-10 rounded-full"
        )}
        style={{
          left: position[0],
          top: position[1],
          width: size,
          height: size,
        }}
      />
    </Transition>
  );
};
