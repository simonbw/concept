import { format } from "date-fns";
import React, { ReactNode, useEffect, useReducer } from "react";
import { useGameState } from "../../hooks/useGameState";
import { trpcClient } from "../../trpc/trpcClient";
import { formatTimestamp } from "../../utils/formatUtils";

export const AdminStartSection: React.FC = () => {
  const rerender = useReducer((x) => x + 1, 0)[1];
  const gameState = useGameState();
  const startedAt = gameState?.startedAt;

  useEffect(() => {
    if (startedAt) {
      const interval = setInterval(() => {
        rerender();
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [startedAt]);

  if (startedAt !== undefined && startedAt !== null) {
    return (
      <Wrapper>
        <time
          className="text-lg"
          title={`Started at ${format(startedAt, "p")}`}
        >
          {formatTimestamp(startedAt, Date.now())}
        </time>

        <button
          className="admin-button"
          onClick={() => trpcClient.admin.startGame.mutate()}
        >
          Restart Clock
        </button>
      </Wrapper>
    );
  } else {
    return (
      <Wrapper>
        <button
          className="admin-button"
          onClick={() => trpcClient.admin.startGame.mutate()}
        >
          Start
        </button>
      </Wrapper>
    );
  }
};

const Wrapper: React.FC<{ children: ReactNode }> = ({ children }) => (
  <div className="border flex justify-center items-center gap-4 p-4">
    {children}
  </div>
);
