import jsonpatch from "fast-json-patch";
import React, {
  RefObject,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  GameState,
  gameStateSchema,
} from "../../common/models/GameStateSchema";
import {
  DiffStream,
  diffStreamSchema,
} from "../../common/models/diffStreamSchema";
import { trpcClient } from "../trpc/trpcClient";

type StateChangeListener = (newState: GameState, oldState?: GameState) => void;

function useGameStateStream(
  onChange?: StateChangeListener,
): GameState | undefined {
  const [state, setState] = useState<GameState | undefined>(undefined);
  const onChangeRef = useRef(onChange);
  onChangeRef.current = onChange;

  useEffect(() => {
    trpcClient.gameState.stream.subscribe(undefined, {
      onData: (data) => {
        const parsed: DiffStream<GameState> =
          diffStreamSchema(gameStateSchema).parse(data);
        if (parsed.type === "replace") {
          setState(parsed.state);
          onChangeRef.current?.(parsed.state);
        } else if (parsed.type === "diff") {
          setState((state) => {
            const newState = gameStateSchema.parse(
              jsonpatch.applyPatch(state, parsed.diff, true, false).newDocument,
            );
            onChangeRef.current?.(newState, state);
            return newState;
          });
        } else {
          throw new Error("Unrecognized message type");
        }
      },
    });
  }, []);
  return state;
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
