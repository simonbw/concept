import React, { useEffect, useState } from "react";
import { useGameState } from "../../hooks/useGameState";
import { formatTimestamp } from "../../utils/formatUtils";
import { Sequencer } from "../effects/Sequencer";
import { TypedText } from "../effects/TypedText";

export const RoomClock: React.FC = () => {
  const gameState = useGameState();
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(Date.now());
    }, 1000);
    return () => clearInterval(interval);
  }, [gameState?.startedAt]);

  if (!gameState?.startedAt) {
    return null;
  }

  return (
    <div className="fixed bottom-0 right-0 px-2 text-inverse">
      <Sequencer started>
        <TypedText stepThrough={""} interval={50}>
          {formatTimestamp(gameState.startedAt, now)}
        </TypedText>
      </Sequencer>
    </div>
  );
};
