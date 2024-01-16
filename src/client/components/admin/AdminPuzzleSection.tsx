import { capitalCase } from "change-case";
import React from "react";
import { objectEntries } from "../../../common/utils/arrayUtils";
import { useGameState } from "../../hooks/useGameState";
import { trpcClient } from "../../trpc/trpcClient";
import { classNames } from "../../utils/classNames";
import { SecretKeyDisplay } from "../room/SecretKeyDisplay";

export function AdminPuzzleSection() {
  const gameState = useGameState();

  if (!gameState) return null;

  return (
    <section className="flex flex-col gap-1">
      <div className="flex gap-2">
        {gameState.secretKeys.map((isDown, i) => (
          <div key={i}>{isDown ? "T" : "F"}</div>
        ))}
        <SecretKeyDisplay />
      </div>
      {objectEntries(gameState.progress).map(([puzzleName, isComplete]) => (
        <div
          key={puzzleName}
          className={classNames(
            "flex gap-4 py-1 px-2 items-center",
            isComplete ? "bg-green-500/10" : "",
          )}
        >
          <span
            className={classNames(
              "w-5 h-5 rounded-full flex items-center justify-center text-sm select-none cursor-pointer hover:scale-110 active:scale-95 transition-transform",
              isComplete
                ? "bg-green-600 text-white"
                : "border-2 border-zinc-400 text-zinc-400",
            )}
            title={isComplete ? "Complete" : "Incomplete"}
            onClick={async () => {
              try {
                await trpcClient.gameState.patch.mutate({
                  progress: { [puzzleName]: !isComplete },
                });
              } catch (error) {
                console.warn("patch failed", error);
              }
            }}
          >
            {isComplete ? "✓" : "-"}
          </span>
          <h3 className="text-md">{capitalCase(puzzleName)}</h3>
        </div>
      ))}
    </section>
  );
}
