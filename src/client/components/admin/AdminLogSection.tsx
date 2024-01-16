import { format } from "date-fns";
import React from "react";
import { Log } from "../../../common/models/GameStateSchema";
import { RoomNumber } from "../../../common/models/RoomNumber";
import { useGameState } from "../../hooks/useGameState";
import { trpcClient } from "../../trpc/trpcClient";

export const AdminLogSection: React.FC = () => {
  const gameState = useGameState();

  if (!gameState) return null;

  return (
    <section className="grid grid-cols-2 gap-4">
      <h3 className="text-lg font-bold">Room 1</h3>
      <h3 className="text-lg font-bold">Room 2</h3>

      <LogList roomNumber={1} logs={gameState.logs.room1} />
      <LogList roomNumber={2} logs={gameState.logs.room2} />

      <LogForm roomNumber={1} />
      <LogForm roomNumber={2} />
    </section>
  );
};

const LogList: React.FC<{
  logs: Log[];
  roomNumber: RoomNumber;
}> = ({ logs, roomNumber }) => {
  return (
    <ol className="max-h-48 overflow-y-auto space-y-1 text-sm">
      {logs.map((log, i) => (
        <div key={i} className="flex gap-2">
          <time>{format(log.time, "hh:mm:ss")}</time>
          <span className="flex-grow">{log.text}</span>
          <button
            className="admin-button danger py-0.5"
            onClick={async () => {
              await trpcClient.admin.deleteLog.mutate({ roomNumber, index: i });
            }}
          >
            X
          </button>
        </div>
      ))}
    </ol>
  );
};

const LogForm: React.FC<{ roomNumber: RoomNumber }> = ({ roomNumber }) => {
  const [text, setText] = React.useState("");

  return (
    <form
      className="w-full flex flex-col gap-2"
      onSubmit={(event) => {
        event.preventDefault();
        trpcClient.admin.log.mutate({ roomNumber, text });
        setText("");
      }}
    >
      <input
        className="admin-input w-full flex-grow"
        placeholder=""
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="admin-button" type="submit" disabled={text === ""}>
        Add Log
      </button>
    </form>
  );
};
