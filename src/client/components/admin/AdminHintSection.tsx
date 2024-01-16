import { format } from "date-fns";
import React from "react";
import { RoomNumber } from "../../../common/models/RoomNumber";
import { useGameState } from "../../hooks/useGameState";
import { trpcClient } from "../../trpc/trpcClient";

export function AdminHintSection() {
  return (
    <section className="w-full grid grid-cols-2 gap-4">
      <h3 className="text-lg font-bold">Room 1</h3>
      <h3 className="text-lg font-bold">Room 2</h3>

      <HintList roomNumber={1} />
      <HintList roomNumber={2} />

      <HintForm roomNumber={1} />
      <HintForm roomNumber={2} />
    </section>
  );
}

const HintList: React.FC<{ roomNumber: RoomNumber }> = ({ roomNumber }) => {
  const gameState = useGameState();
  if (!gameState) return null;

  return (
    <ol className="max-h-48 overflow-y-auto space-y-1 text-sm">
      {gameState.hints[`room${roomNumber}`].map((hint, i) => (
        <div key={i} className="flex gap-2">
          <time>{format(hint.time, "hh:mm:ss")}</time>
          <span className="flex-grow">{hint.text}</span>
        </div>
      ))}
    </ol>
  );
};

const HintForm: React.FC<{ roomNumber: RoomNumber }> = ({ roomNumber }) => {
  const [hintValue, setHintValue] = React.useState("");
  return (
    <form
      className="w-full flex flex-col gap-2"
      onSubmit={async (event) => {
        event.preventDefault();
        setHintValue("");
        // adminApiClient.giveHint({ room: roomNumber, hint: hintValue });
        await trpcClient.admin.giveHint.mutate({
          roomNumber,
          hint: hintValue,
        });
      }}
    >
      <textarea
        className="admin-input w-full flex-grow"
        placeholder="Look under the table..."
        value={hintValue}
        onChange={(e) => setHintValue(e.target.value)}
      />
      <button
        className="admin-button"
        type="submit"
        disabled={hintValue === ""}
      >
        Send Hint
      </button>
    </form>
  );
};
