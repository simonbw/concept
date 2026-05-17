import { useMutation, useQuery } from "convex/react";
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
} from "react";
import { api } from "../../../convex/_generated/api";
import type { Doc } from "../../../convex/_generated/dataModel";
import { GameState } from "../../common/models/GameStateSchema";
import { gameId } from "../gameId";

type StateChangeListener = (newState: GameState, oldState?: GameState) => void;

/** Project the stored Convex document into the client-facing GameState shape. */
function toGameState(doc: Doc<"games">): GameState {
  return {
    startedAt: doc.startedAt,
    deckSeed: doc.deckSeed,
    cardsDrawn: doc.cardsDrawn,
    pieces: doc.pieces.map((p) => ({
      id: p.id,
      size: p.size,
      color: p.color,
      position: [p.position[0], p.position[1]],
      lifted: p.lifted,
    })),
  };
}

const GameStateContext = createContext<{
  gameState: GameState | undefined;
  listeners: Set<StateChangeListener>;
}>({ gameState: undefined, listeners: new Set() });

export const GameStateProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const ensureGame = useMutation(api.games.ensureGame);
  const doc = useQuery(api.games.get, { gameId });

  // Lazily create the game on first visit.
  useEffect(() => {
    void ensureGame({ gameId }).catch((error) => {
      console.error("ensureGame failed", error);
    });
  }, [ensureGame]);

  // `useQuery` returns a stable reference until the data actually changes, so
  // this memo only recomputes on a real state change.
  const gameState = useMemo(
    () => (doc ? toGameState(doc) : undefined),
    [doc],
  );

  const listenersRef = useRef<Set<StateChangeListener>>(new Set());
  const lastRef = useRef<GameState | undefined>(undefined);

  useEffect(() => {
    if (!gameState) return;
    for (const listener of listenersRef.current) {
      listener(gameState, lastRef.current);
    }
    lastRef.current = gameState;
  }, [gameState]);

  const value = useMemo(
    () => ({ gameState, listeners: listenersRef.current }),
    [gameState],
  );

  return (
    <GameStateContext.Provider value={value}>
      {children}
    </GameStateContext.Provider>
  );
};

export function useGameState(): GameState | undefined {
  return useContext(GameStateContext).gameState;
}

/** Subscribe to game-state changes, e.g. to fire effects on piece transitions. */
export function useGameStateListener(listener: StateChangeListener): void {
  const { listeners } = useContext(GameStateContext);
  useEffect(() => {
    listeners.add(listener);
    return () => {
      listeners.delete(listener);
    };
  }, [listener, listeners]);
}
