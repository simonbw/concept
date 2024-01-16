import iassign from "immutable-assign";
import { z } from "zod";
import {
  getTTTState,
  symbolToRoomNumber,
} from "../../client/utils/ticTacToeUtils";
import { ticTacToeSquareSchema } from "../../common/models/ticTacToeStateSchema";
import { WebError } from "../WebError";
import { updateGameState } from "../gameState";
import { addLog } from "../utils/gameStateUtils";
import { trpc } from "./trpc";

export const ticTacToeTrpcRouter = trpc.router({
  newGame: trpc.procedure.mutation(async () => {
    return updateGameState((gameState) => {
      const winner = getTTTState(gameState.ticTacToe.moves);
      const history = [...gameState.ticTacToe.history];
      if (winner != "IN_PROGRESS") {
        history.push(winner);
        if (winner == "TIE") {
          addLog(1, `They played a whole game of tic tac toe. It was a tie.`);
          addLog(2, `They played a whole game of tic tac toe. It was a tie.`);
        } else if (symbolToRoomNumber(winner) === 1) {
          addLog(1, `They won a game of tic tac toe.`);
          addLog(2, `They lost  a game of tic tac toe.`);
        } else {
          addLog(1, `They lost a game of tic tac toe.`);
          addLog(2, `They won  a game of tic tac toe.`);
        }
      }
      return {
        ...gameState,
        ticTacToe: {
          moves: [],
          history,
        },
      };
    });
  }),
  move: trpc.procedure
    .input(
      z.object({
        move: ticTacToeSquareSchema,
      }),
    )
    .mutation(async ({ input: { move } }) => {
      return updateGameState((gameState) => {
        if (gameState.ticTacToe.moves.includes(move)) {
          throw new WebError("Square already taken", 400);
        }

        return iassign(
          gameState,
          (g) => g.ticTacToe.moves,
          (moves) => [...moves, move],
        );
      });
    }),
});
