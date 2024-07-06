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
  PieceState,
} from "../../common/models/GameStateSchema";
import { objectValues } from "../../common/utils/arrayUtils";
import { idMaker } from "../../common/utils/idMaker";
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

export type GameStateOverride =
  | (Partial<PieceState> & Pick<PieceState, "id">)
  | undefined;

function applyOverrides(
  state: GameState | undefined,
  overrides: GameStateOverride[]
): GameState | undefined {
  if (!state) return undefined;

  for (const override of overrides) {
    if (!override) continue;

    const piece = state.pieces.find((p) => p.id === override.id);
    if (!piece) {
      console.error(`Piece with id ${override.id} not found`);
      continue;
    }

    console.log("Applying override", override);

    state = {
      ...state,
      pieces: state.pieces.map((piece) => {
        if (piece.id === override.id) {
          return { ...piece, ...override };
        } else {
          return piece;
        }
      }),
    };
  }

  return state;
}

const GameStateContext = React.createContext<{
  rawGameState: GameState | undefined;
  gameState: GameState | undefined;
  useRawListener: (listener: StateChangeListener) => void;
  useListener: (listener: StateChangeListener) => void;
  useOverride: (override: GameStateOverride) => void;
}>({
  rawGameState: undefined,
  gameState: undefined,
  useRawListener: () => {},
  useListener: () => {},
  useOverride: () => {},
});

const makeId = idMaker();

export const GameStateProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const lastGameStateRef = useRef<GameState | undefined>(undefined);
  const rawListenersRef = useRef<Set<StateChangeListener>>(new Set());
  const listenersRef = useRef<Set<StateChangeListener>>(new Set());
  const [overrides, setOverrides] = useState<{
    [id: string]: GameStateOverride;
  }>({});

  // Call all the listeners when the game state changes
  const rawGameState = useGameStateStream((newState, oldState) => {
    for (const listener of rawListenersRef.current) {
      listener(newState, oldState);
    }
  });

  const gameState = applyOverrides(
    rawGameState,
    objectValues(overrides).flat()
  );

  useEffect(() => {
    if (gameState) {
      for (const listener of listenersRef.current) {
        listener(gameState, lastGameStateRef.current);
      }
      lastGameStateRef.current = gameState;
    }
  }, [gameState]);

  const useRawListener = useCallback((listener: StateChangeListener): void => {
    useEffect(() => {
      rawListenersRef.current.add(listener);
      return () => {
        rawListenersRef.current.delete(listener);
      };
    }, [listener]);
  }, []);

  const useListener = useCallback((listener: StateChangeListener): void => {
    useEffect(() => {
      listenersRef.current.add(listener);
      return () => {
        listenersRef.current.delete(listener);
      };
    }, [listener]);
  }, []);

  const useOverride = (override: GameStateOverride) => {
    const [id] = useState(makeId())[0];
    useEffect(() => {
      setOverrides((o) => ({ ...o, [id]: override }));
      return () => {
        setOverrides((o) => {
          let newOverrides = { ...o };
          delete newOverrides[id];
          return newOverrides;
        });
      };
    }, [override]);
  };

  return (
    <GameStateContext.Provider
      value={{
        rawGameState,
        gameState,
        useRawListener,
        useListener,
        useOverride,
      }}
    >
      {children}
    </GameStateContext.Provider>
  );
};

export function useGameState(): GameState | undefined {
  return useContext(GameStateContext).gameState;
}

export function useRawGameState(): GameState | undefined {
  return useContext(GameStateContext).rawGameState;
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

export function useRawGameStateListener(listener: StateChangeListener) {
  useContext(GameStateContext).useRawListener(listener);
}

export function useGameStateOverride(override: GameStateOverride) {
  useContext(GameStateContext).useOverride(override);
}
