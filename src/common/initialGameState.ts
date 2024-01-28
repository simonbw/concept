import { GameState } from "./models/GameStateSchema";

export const initialGameState: GameState = {
  startedAt: null,
  updatedAt: null,
  pieces: [],
  deckSeed: 0,
  cardsDrawn: 0,
};
