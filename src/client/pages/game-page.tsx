import React from "react";
import { renderPage } from "../utils/renderPage";
import { GameStateProvider } from "../hooks/useGameState";
import { GamePage } from "../components/GamePage";
import { SettingsProvider } from "../components/SettingsContext";

renderPage(
  <GameStateProvider>
    <SettingsProvider>
      <GamePage />
    </SettingsProvider>
  </GameStateProvider>
);
