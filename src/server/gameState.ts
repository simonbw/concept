import { initialGameState } from "../common/initialGameState";
import { GameState } from "../common/models/GameStateSchema";
import { Channel } from "./utils/Channel";
import { DiffChannel } from "./utils/DiffChannel";

export const gameStateChannel = new Channel<GameState>();
export const gameStateDiffChannel = new DiffChannel<GameState>();

// One big global state object
let gameState: GameState = {
  ...initialGameState,
};

// Returns the current game state
export function getGameState(): Readonly<GameState> {
  return gameState;
}

// Updates the game state
export async function updateGameState(
  updater: (oldState: GameState) => GameState
): Promise<GameState> {
  gameState = updater(getGameState());

  gameStateChannel.publish(gameState);
  gameStateDiffChannel.stateChanged(gameState);
  return gameState;
}

// Resets the game state to the initial state
export async function resetGameState() {
  await updateGameState(() => ({
    ...initialGameState,
    startedAt: Date.now(),
  }));
}
