import { GameState } from "../common/models/GameStateSchema";
import { initialGameState } from "../common/initialGameState/initialGameState";
import { Channel } from "./utils/Channel";
import { DiffChannel } from "./utils/DiffChannel";
import { isAutoStart } from "./utils/envUtils";

export const gameStateChannel = new Channel<GameState>();
export const gameStateDiffChannel = new DiffChannel<GameState>();

// One big global state object
// TODO: Maybe store this in the db?
let gameState: GameState = {
  ...initialGameState,
  startedAt: isAutoStart() ? Date.now() : initialGameState.startedAt,
};

// Returns the current game state
export function getGameState(): Readonly<GameState> {
  return gameState;
}

// Updates the game state
export async function updateGameState(
  updater: (oldState: GameState) => GameState,
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
    startedAt: isAutoStart() ? Date.now() : initialGameState.startedAt,
  }));
}
