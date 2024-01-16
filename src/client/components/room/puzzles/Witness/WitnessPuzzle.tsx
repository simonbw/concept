import React, { useCallback, useMemo } from "react";
import { last } from "../../../../../common/utils/arrayUtils";
import { useKeyDown } from "../../../../hooks/useKeyDown";
import { RevealedText } from "../../../effects/RevealedText";
import { SlideIn } from "../../../effects/SlideIn";
import { TypedText } from "../../../effects/TypedText";
import { WitnessGrid } from "./WitnessGrid";
import { useWitnessPuzzle } from "./useWitnessPuzzle";
import {
  WitnessCell,
  WitnessMove,
  WitnessPath,
  isValidMove,
} from "./witnessHelpers";
import { Dimmable } from "./Dimmable";

export const WitnessPuzzle: React.FC<{
  onComplete: () => void;
  start: WitnessCell;
  end: WitnessCell;
  visibleWalls: WitnessCell[];
  allWalls: WitnessCell[];
  mute?: boolean;
  gridSize: [number, number];
}> = ({ onComplete, start, end, visibleWalls, allWalls, gridSize }) => {
  const { addMove, undoMove, reset, resetting, path, solveStatus, moves } =
    useWitnessPuzzle(start, end, gridSize, allWalls, onComplete);
  const currentPosition = last(path);

  const shortcuts: { [keyCode: string]: () => void | Promise<void> } = useMemo(
    () => ({
      KeyW: () => addMove("UP"),
      KeyA: () => addMove("LEFT"),
      KeyS: () => addMove("DOWN"),
      KeyD: () => addMove("RIGHT"),
      ArrowUp: () => addMove("UP"),
      ArrowLeft: () => addMove("LEFT"),
      ArrowDown: () => addMove("DOWN"),
      ArrowRight: () => addMove("RIGHT"),
      KeyU: undoMove,
      KeyR: reset,
    }),
    [addMove, undoMove, reset],
  );

  useKeyDown(
    useCallback(
      async (event: KeyboardEvent) => {
        const maybeShortcut = shortcuts[event.code];
        if (maybeShortcut) {
          event.preventDefault();
          await maybeShortcut();
        }
      },
      [addMove, undoMove, reset],
    ),
  );

  return (
    <div className="py-2">
      <SlideIn>
        <WitnessGrid className="w-full" gridSize={gridSize}>
          {visibleWalls.map(([x, y], index) => (
            <rect
              key={index}
              fill="red"
              opacity={0.3}
              stroke="none"
              x={x}
              y={y}
              width={1}
              height={1}
            />
          ))}
          {/* Start */}
          <circle
            cx={start[0] + 0.5}
            cy={start[1] + 0.5}
            r={0.25}
            strokeWidth={0.05}
            className="stroke-blue-700 fill-none"
          />
          {/* Goal */}
          <circle
            cx={end[0] + 0.5}
            cy={end[1] + 0.5}
            r={0.25}
            className="stroke-none fill-green-500"
          />

          {/* Path */}
          <polyline
            points={path.map(([x, y]) => `${x + 0.5},${y + 0.5}`).join(" ")}
            className="stroke-blue-700 fill-none"
            strokeWidth={0.1}
          />

          {/* Current Position */}
          <circle
            r={0.2}
            className="stroke-none fill-blue-700"
            style={{
              transform: `translate(${currentPosition[0] + 0.5}px, ${
                currentPosition[1] + 0.5
              }px)`,
              // transition: "all 0.1s linear",
            }}
          />
        </WitnessGrid>
      </SlideIn>
      <KeyboardLegend path={path} moves={moves} size={gridSize} />

      {solveStatus === "correct" && (
        <div>
          <TypedText>Solved!</TypedText>
        </div>
      )}
      {solveStatus === "incorrect" && (
        <div>
          <TypedText>Incorrect!</TypedText>
        </div>
      )}
    </div>
  );
};

const KeyboardLegend: React.FC<{
  path: WitnessPath;
  moves: WitnessMove[];
  size: [number, number];
}> = ({ path, moves, size }) => {
  return (
    <div className="flex flex-row gap-8 justify-between">
      <span>
        <RevealedText>[</RevealedText>
        <Dimmable dim={!isValidMove("UP", path, size)}>↑</Dimmable>
        <Dimmable dim={!isValidMove("LEFT", path, size)}>←</Dimmable>
        <Dimmable dim={!isValidMove("DOWN", path, size)}>↓</Dimmable>
        <Dimmable dim={!isValidMove("RIGHT", path, size)}>→</Dimmable>
        <RevealedText>]</RevealedText>
      </span>
      <span>
        <RevealedText>[</RevealedText>
        <Dimmable dim={!isValidMove("UP", path, size)}>W</Dimmable>
        <Dimmable dim={!isValidMove("LEFT", path, size)}>A</Dimmable>
        <Dimmable dim={!isValidMove("DOWN", path, size)}>S</Dimmable>
        <Dimmable dim={!isValidMove("RIGHT", path, size)}>D</Dimmable>
        <RevealedText>]</RevealedText>
      </span>
      <Dimmable dim={moves.length === 0}>[U]</Dimmable>
      <Dimmable dim={moves.length === 0}>[R]</Dimmable>
    </div>
  );
};
