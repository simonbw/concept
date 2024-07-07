import { z } from "zod";
import {
  pieceColorSchema,
  piecePositionSchema,
  pieceSizeSchema,
} from "../../common/models/GameStateSchema";
import { idMaker } from "../../common/utils/idMaker";
import { updateGameState } from "../gameState";
import { trpc } from "./trpc";
import { initialGameState } from "../../common/initialGameState";

const makeId = idMaker();

export const piecesTrpcRouter = trpc.router({
  // Mutations
  add: trpc.procedure
    .input(
      z.object({
        color: pieceColorSchema,
        size: pieceSizeSchema,
        position: piecePositionSchema,
        lifted: z.boolean(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const newPiece = { ...input, id: makeId() };
      await updateGameState(ctx.gameId, (gameState) => {
        return {
          ...gameState,
          pieces: [...gameState.pieces, newPiece],
        };
      });
      return newPiece;
    }),

  remove: trpc.procedure.input(z.string()).mutation(async ({ input, ctx }) => {
    await updateGameState(ctx.gameId, (gameState) => {
      return {
        ...gameState,
        pieces: gameState.pieces.filter((p) => p.id !== input),
      };
    });
  }),

  reset: trpc.procedure.mutation(async ({ ctx }) => {
    await updateGameState(ctx.gameId, (gameState) => {
      return {
        ...gameState,
        pieces: [...initialGameState.pieces],
      };
    });
  }),

  move: trpc.procedure
    .input(
      z.object({
        id: z.string(),
        position: piecePositionSchema,
        lifted: z.boolean(),
      })
    )
    .mutation(async ({ input: { id, position, lifted }, ctx }) => {
      await updateGameState(ctx.gameId, (gameState) => {
        const piece = gameState.pieces.find((p) => p.id === id);
        if (!piece) {
          throw new Error(`Piece ${id} not found`);
        }
        return {
          ...gameState,
          pieces: gameState.pieces.map((p) =>
            p.id === id ? { ...p, position, lifted } : p
          ),
        };
      });
    }),
});
