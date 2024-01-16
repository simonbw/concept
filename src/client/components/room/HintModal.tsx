import React from "react";
import { Hint } from "../../../common/models/GameStateSchema";
import { last } from "../../../common/utils/arrayUtils";
import { useGameStateListener } from "../../hooks/useGameState";
import { useRoomNumber } from "../../hooks/useRoomNumber";
import { useKeyDown } from "../../hooks/useKeyDown";
import { beep } from "../../../common/utils/beep";

export const HintModal: React.FC = () => {
  const [hint, setHint] = React.useState<Hint | null>(null);
  const roomNumber = useRoomNumber();

  useGameStateListener((newState, oldState) => {
    const lastHints = oldState?.hints[`room${roomNumber}`];
    const newHints = newState.hints[`room${roomNumber}`];
    if (lastHints?.length !== newHints?.length && newHints.length > 0) {
      setHint(last(newHints)!);
    }
  });

  useKeyDown((event) => {
    if (hint) {
      if (event.code === "Escape" || event.code === "Enter") {
        setHint(null);
        beep({ duration: 60 });
      }
      event.preventDefault();
      event.stopImmediatePropagation();
    }
  });

  if (!hint) {
    return null;
  }

  return (
    <div className="fixed w-full h-full bg-zinc-900/50 z-10 top-32">
      <div className="border max-w-xs mx-auto my-auto bg-zinc-900">
        <header className="text-inverse px-4 py-1">Hint</header>

        <p className="px-4 py-2">{hint.text}</p>

        <button className="m-0 w-full" onClick={() => setHint(null)}>
          Ok [⏎]
        </button>
      </div>
    </div>
  );
};
