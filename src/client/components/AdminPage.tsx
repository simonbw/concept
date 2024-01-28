import React from "react";
import { z } from "zod";
import {
  GameState,
  gameStateSchema,
} from "../../common/models/GameStateSchema";
import { useDiffStreamSubscription } from "../hooks/useDiffStreamSubscription";
import { trpcClient } from "../trpc/trpcClient";

export const AdminPage: React.FC = () => {
  const games = useDiffStreamSubscription(
    trpcClient.admin.streamAllGames.subscribe,
    z.tuple([z.string(), gameStateSchema]).array()
  )?.toSorted(([_, a], [__, b]) => (b.updatedAt ?? 0) - (a.updatedAt ?? 0));

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-2">Games</h1>
      {games === undefined ? (
        <span>Loading...</span>
      ) : (
        <ul className="flex flex-col gap-1">
          {games.map(([gameId, game]) => (
            <GameListItem key={gameId} game={game} gameId={gameId} />
          ))}
        </ul>
      )}
    </main>
  );
};

const GameListItem: React.FC<{ game: GameState; gameId: string }> = ({
  game,
  gameId,
}) => {
  return (
    <li>
      <pre className="text-xs whitespace-pre-wrap bg-slate-100 rounded-sm p-2">
        {JSON.stringify({ gameId, ...game }, null, 2)}
      </pre>
    </li>
  );
};
