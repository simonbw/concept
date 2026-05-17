import { ConvexProvider } from "convex/react";
import React from "react";
import { GamePage } from "../components/GamePage";
import { SettingsProvider } from "../components/SettingsContext";
import { convex } from "../convexClient";
import { GameStateProvider } from "../hooks/useGameState";
import { renderPage } from "../utils/renderPage";

renderPage(
  <ConvexProvider client={convex}>
    <GameStateProvider>
      <SettingsProvider>
        <GamePage />
      </SettingsProvider>
    </GameStateProvider>
  </ConvexProvider>,
);
