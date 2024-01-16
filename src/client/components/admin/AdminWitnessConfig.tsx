import deepEqual from "fast-deep-equal";
import React, { useState } from "react";
import { GameState } from "../../../common/models/GameStateSchema";
import { WitnessConfig } from "../../../common/models/witnessConfigSchema";
import { trpcClient } from "../../trpc/trpcClient";
import { classNames } from "../../utils/classNames";

export const AdminWitnessConfig: React.FC<{
  value: WitnessConfig;
  onChange: (value: WitnessConfig) => void;
}> = ({ value: savedValue, onChange }) => {
  const [setting, setSetting] = useState<"start" | "end" | undefined>(
    undefined,
  );
  const [currentValue, setConfigState] = useState<WitnessConfig>(savedValue);
  const {
    walls,
    start,
    end,
    size: [width, height],
  } = currentValue;

  const saved = deepEqual(savedValue, currentValue);

  return (
    <div className="flex flex-col gap-2 w-fit">
      <div className="border w-fit">
        {[...Array(height)].map((_, y) => (
          <div key={y} className="flex w-fit">
            {[...Array(width)].map((_, x) => {
              const isWall = walls.some(([x2, y2]) => x === x2 && y === y2);
              return (
                <div
                  key={x}
                  className={classNames(
                    "w-8 h-8 border flex justify-center items-center text-lg",
                    isWall
                      ? "bg-red-500 hover:bg-red-500/50"
                      : "hover:bg-green-500/50",
                  )}
                  onClick={() => {
                    if (setting === "start") {
                      setConfigState((old) => ({ ...old, start: [x, y] }));
                      setSetting(undefined);
                    } else if (setting === "end") {
                      setConfigState((old) => ({ ...old, end: [x, y] }));
                      setSetting(undefined);
                    } else if (isWall) {
                      setConfigState((old) => ({
                        ...old,
                        walls: old.walls.filter(([x2, y2]) => {
                          return !(x === x2 && y === y2);
                        }),
                      }));
                    } else {
                      setConfigState((old) => ({
                        ...old,
                        walls: [...old.walls, [x, y]],
                      }));
                    }
                  }}
                >
                  {x === start[0] && y === start[1] && "S"}
                  {x === end[0] && y === end[1] && "E"}
                </div>
              );
            })}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-2">
        <button
          className="admin-button"
          onClick={() => {
            setSetting(setting === "start" ? undefined : "start");
          }}
        >
          {setting === "start" ? "Cancel" : "Set Start"}
        </button>
        <button
          className="admin-button"
          onClick={() => {
            setSetting(setting === "end" ? undefined : "end");
          }}
        >
          {setting === "end" ? "Cancel" : "Set End"}
        </button>
      </div>
      {!saved && (
        <div className="flex gap-2 justify-between">
          <button
            disabled={saved}
            className="admin-button danger"
            onClick={() => {
              setConfigState(savedValue);
            }}
          >
            Cancel
          </button>
          <button
            disabled={saved}
            className="admin-button primary"
            onClick={async () => {
              console.log(currentValue);
              await trpcClient.gameState.patch.mutate({
                config: { witness: currentValue },
              });
            }}
          >
            Save
          </button>
        </div>
      )}
    </div>
  );
};
