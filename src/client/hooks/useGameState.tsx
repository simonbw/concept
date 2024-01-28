import React, {
  RefObject,
  useCallback,
  useContext,
  useEffect,
  useRef,
} from "react";
import {
  GameState,
  gameStateSchema,
} from "../../common/models/GameStateSchema";
import { trpcClient } from "../trpc/trpcClient";
import { useDiffStreamSubscription } from "./useDiffStreamSubscription";

type StateChangeListener = (newState: GameState, oldState?: GameState) => void;

function useGameStateStream(
  onChange?: StateChangeListener
): GameState | undefined {
  return useDiffStreamSubscription(
    trpcClient.gameState.stream.subscribe,
    gameStateSchema,
    onChange
  );
}

const GameStateContext = React.createContext<{
  gameState: GameState | undefined;
  useListener: (listener: StateChangeListener) => void;
}>({ gameState: undefined, useListener: () => {} });

export const GameStateProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const listenersRef = useRef<Set<StateChangeListener>>(new Set());

  // Call all the listeners when the game state changes
  const gameState = useGameStateStream((newState, oldState) => {
    for (const listener of listenersRef.current) {
      listener(newState, oldState);
    }
  });

  const useListener = useCallback((listener: StateChangeListener): void => {
    useEffect(() => {
      listenersRef.current.add(listener);
      return () => {
        listenersRef.current.delete(listener);
      };
    }, [listener]);
  }, []);

  return (
    <GameStateContext.Provider
      value={{
        gameState,
        useListener,
      }}
    >
      {children}
    </GameStateContext.Provider>
  );
};

export function useGameState(): GameState | undefined {
  return useContext(GameStateContext).gameState;
}

export function useGameStateRef(): RefObject<GameState | undefined> {
  const gameState = useGameState();
  const ref = useRef<GameState | undefined>(gameState);
  ref.current = gameState;
  return ref;
}

export function useGameStateListener(listener: StateChangeListener) {
  useContext(GameStateContext).useListener(listener);
}
