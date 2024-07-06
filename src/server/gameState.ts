import { wait } from "../common/utils/wait";
import { initialGameState } from "../common/initialGameState";
import { GameState } from "../common/models/GameStateSchema";
import { Channel } from "./utils/Channel";
import { DiffChannel } from "./utils/DiffChannel";

export const DEFAULT_GAME_ID = "";
const gameStates = new Map<string, Readonly<GameState>>();
const diffChannels = new Map<string, DiffChannel<GameState>>();

export const gameStoreChannel = new Channel<
  | {
      type: "gameAdded" | "gameUpdated";
      gameId: string;
      gameState: GameState;
    }
  | { type: "gameRemoved"; gameId: "string" }
>();

export function getAllGameIds() {
  return [...gameStates.keys()];
}

export function getAllGames() {
  return [...gameStates.entries()];
}

export function getGameState(gameId: string): Readonly<GameState> {
  if (!gameStates.has(gameId)) {
    const gameState = { ...initialGameState, startedAt: Date.now() };
    gameStates.set(gameId, gameState);
    gameStoreChannel.publish({ type: "gameAdded", gameId, gameState });
  }
  return gameStates.get(gameId)!;
}

export function getGameStateDiffChannel(
  gameId: string
): DiffChannel<GameState> {
  if (!diffChannels.has(gameId)) {
    diffChannels.set(gameId, new DiffChannel());
  }
  return diffChannels.get(gameId)!;
}

// Updates the game state
export async function updateGameState(
  gameId: string,
  updater: (oldState: GameState) => GameState
): Promise<GameState> {
  const previousGameState = getGameState(gameId);
  const diffChannel = getGameStateDiffChannel(gameId);

  const updatedGameState = {
    ...updater(previousGameState),
    updatedAt: Date.now(),
  };
  gameStates.set(gameId, updatedGameState);

  diffChannel.stateChanged(updatedGameState);
  gameStoreChannel.publish({
    type: "gameUpdated",
    gameId,
    gameState: updatedGameState,
  });
  return updatedGameState;
}

// Resets the game state to the initial state
export async function resetGameState(gameId: string) {
  await updateGameState(gameId, () => ({
    ...initialGameState,
    startedAt: Date.now(),
    updatedAt: Date.now(),
  }));
}

// TODO: Cleanup unused games
