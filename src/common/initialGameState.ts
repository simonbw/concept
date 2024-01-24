import { GameState } from "./models/GameStateSchema";

export const initialGameState: GameState = {
  startedAt: null,
  pieces: [],
  deckSeed: 0,
  cardsDrawn: 0,
};
