import React, { ReactNode, useCallback, useEffect, useState } from "react";
import { clamp } from "../../../../common/utils/mathUtils";
import { useGameState } from "../../../hooks/useGameState";
import { useKeyDown } from "../../../hooks/useKeyDown";
import { otherRoom, useRoomNumber } from "../../../hooks/useRoomNumber";
import { trpcClient } from "../../../trpc/trpcClient";

const DURATION = 60_000;
export const DilemmaScreen: React.FC = () => {
  const gameState = useGameState();
  const roomNumber = useRoomNumber();
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(Date.now());
    }, 30);
    return () => clearInterval(interval);
  }, [gameState?.startedAt]);

  useKeyDown(
    useCallback((event) => {
      if (event.code === "Return") {
        trpcClient.dilemma.pressKillButton.mutate({ roomNumber });
      }
    }, []),
  );

  if (!gameState) return null;
  if (!gameState.prisonersDilemma.startedAt) return null;

  const timeSince = now - gameState.prisonersDilemma.startedAt;
  const timeLeft = clamp(DURATION - timeSince, 0, DURATION);

  if (gameState.prisonersDilemma.pressedButton === roomNumber) {
    return <Wrapper>You pressed the button.</Wrapper>;
  }

  if (gameState.prisonersDilemma.pressedButton === otherRoom(roomNumber)) {
    return <Wrapper>They pressed the button.</Wrapper>;
  }

  if (timeLeft > 0) {
    return (
      <Wrapper>
        <time className="text-2xl">{(timeLeft / 1000).toFixed(2)}</time>
        <button
          onClick={() =>
            trpcClient.dilemma.pressKillButton.mutate({ roomNumber })
          }
        >
          Kill
        </button>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <time>{(0).toFixed(2)}</time>
      Time is up
    </Wrapper>
  );
};

const Wrapper: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="mx-auto w-fit pt-16 flex flex-col gap-4 h-full text-center">
      <h1 className="inverse-text text-2xl">DILEMMA!</h1>
      {children}
    </div>
  );
};
