import { useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import {
  PieceColor,
  PiecePosition,
  PieceSize,
} from "../../common/models/GameStateSchema";
import { gameId } from "../gameId";

export type MovePieceArgs = {
  id: string;
  position: PiecePosition;
  lifted: boolean;
};

export type AddPieceArgs = {
  id: string;
  color: PieceColor;
  size: PieceSize;
  position: PiecePosition;
  lifted: boolean;
};

/**
 * Game mutations, bound to the current game id. `movePiece` and `addPiece`
 * carry optimistic updates so the acting client sees instant feedback while
 * the mutation round-trips — this replaces the old manual override layer.
 */
export function useGameActions() {
  const movePiece = useMutation(api.games.movePiece).withOptimisticUpdate(
    (store, { id, position, lifted }) => {
      const game = store.getQuery(api.games.get, { gameId });
      if (!game) return;
      store.setQuery(
        api.games.get,
        { gameId },
        {
          ...game,
          pieces: game.pieces.map((p) =>
            p.id === id ? { ...p, position, lifted } : p,
          ),
        },
      );
    },
  );

  const addPiece = useMutation(api.games.addPiece).withOptimisticUpdate(
    (store, { id, color, size, position, lifted }) => {
      const game = store.getQuery(api.games.get, { gameId });
      if (!game) return;
      store.setQuery(
        api.games.get,
        { gameId },
        {
          ...game,
          pieces: [...game.pieces, { id, color, size, position, lifted }],
        },
      );
    },
  );

  const resetPieces = useMutation(api.games.resetPieces);
  const drawCard = useMutation(api.games.drawCard);
  const shuffle = useMutation(api.games.shuffle);

  return {
    movePiece: (args: MovePieceArgs) => movePiece({ gameId, ...args }),
    addPiece: (args: AddPieceArgs) => addPiece({ gameId, ...args }),
    resetPieces: () => resetPieces({ gameId }),
    drawCard: () => drawCard({ gameId }),
    shuffle: () => shuffle({ gameId }),
  };
}
