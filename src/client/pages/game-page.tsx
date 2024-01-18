import React from "react";
import { renderPage } from "../utils/renderPage";
import { GameStateProvider } from "../hooks/useGameState";
import { GamePage } from "../components/GamePage";

renderPage(
  <GameStateProvider>
    <GamePage />
  </GameStateProvider>
);
