import React from "react";
import { renderPage } from "../utils/renderPage";
import { GameStateProvider, useGameState } from "../hooks/useGameState";
import { trpcClient } from "../trpc/trpcClient";

const GamePage: React.FC = () => {
  const gameState = useGameState();
  return (
    <div className="space-y-4 p-8">
      <h1>Simon was here</h1>

      <pre className="whitespace-pre-wrap bg-slate-100 p-4 rounded">
        {JSON.stringify(gameState, null, 2)}
      </pre>

      <button onClick={() => trpcClient.gameState.reset.mutate()}>Reset</button>
    </div>
  );
};

renderPage(
  <GameStateProvider>
    <GamePage />
  </GameStateProvider>
);
