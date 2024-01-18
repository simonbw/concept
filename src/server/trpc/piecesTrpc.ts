import { z } from "zod";
import {
  pieceColorSchema,
  piecePositionSchema,
  pieceSizeSchema,
} from "../../common/models/GameStateSchema";
import { idMaker } from "../../common/utils/idMaker";
import { updateGameState } from "../gameState";
import { trpc } from "./trpc";

const makeId = idMaker();

export const piecesTrpcRouter = trpc.router({
  // Mutations
  add: trpc.procedure
    .input(
      z.object({
        color: pieceColorSchema,
        size: pieceSizeSchema,
        position: piecePositionSchema,
      })
    )
    .mutation(async ({ input }) => {
      const newPiece = { ...input, id: makeId() };
      await updateGameState((gameState) => {
        return {
          ...gameState,
          pieces: [...gameState.pieces, newPiece],
        };
      });
      return newPiece;
    }),

  remove: trpc.procedure.input(z.string()).mutation(async ({ input }) => {
    await updateGameState((gameState) => {
      return {
        ...gameState,
        pieces: gameState.pieces.filter((p) => p.id !== input),
      };
    });
  }),

  clear: trpc.procedure.mutation(async () => {
    await updateGameState((gameState) => {
      return {
        ...gameState,
        pieces: [],
      };
    });
  }),

  move: trpc.procedure
    .input(
      z.object({
        id: z.string(),
        position: piecePositionSchema,
      })
    )
    .mutation(async ({ input }) => {
      await updateGameState((gameState) => {
        const piece = gameState.pieces.find((p) => p.id === input.id);
        if (!piece) {
          throw new Error(`Piece ${input.id} not found`);
        }
        return {
          ...gameState,
          pieces: gameState.pieces.map((p) =>
            p.id === input.id ? { ...p, position: input.position } : p
          ),
        };
      });
    }),
});
