import React, { useCallback, useEffect, useRef, useState } from "react";
import { RoomNumber } from "../../../../common/models/RoomNumber";
import { clamp } from "../../../../common/utils/mathUtils";
import { roomName } from "../../../../common/utils/nameUtils";
import { useGameState } from "../../../hooks/useGameState";
import { useKeyDown } from "../../../hooks/useKeyDown";
import { trpcClient } from "../../../trpc/trpcClient";
import { formatTimestamp } from "../../../utils/formatUtils";
import { HorizontalDivider } from "../../effects/HorizontalDivider";
import { SequencedDiv } from "../../effects/SequencedBlock";
import { SubSequencer } from "../../effects/SubSequencer";
import { TypedText } from "../../effects/TypedText";
import { RoomScreen } from "../RoomScreen";
import { ScrollBar } from "../ScrollBar";

const PER_PAGE = 8;

export const LogScreen: React.FC<{ room: RoomNumber }> = ({ room }) => {
  const gameState = useGameState();

  const logs = gameState!.logs[`room${room}`];
  const [end, setEnd] = useState(logs.length);
  const minEndIndex = Math.min(PER_PAGE, logs.length);
  const maxEndIndex = logs.length;
  const minStartIndex = 0;
  const maxStartIndex = clamp(logs.length - PER_PAGE, 0, Infinity);
  const start = clamp(end - PER_PAGE, minStartIndex, maxStartIndex);
  const logsOnPage = logs.slice(start, end);

  useKeyDown((event) => {
    switch (event.code) {
      case "ArrowDown": {
        event.preventDefault();
        const amount = event.shiftKey ? 5 : 1;
        setEnd((end) => clamp(end + amount, minEndIndex, maxEndIndex));
        break;
      }
      case "ArrowUp":
        event.preventDefault();
        const amount = event.shiftKey ? 5 : 1;
        setEnd((end) => clamp(end - amount, minEndIndex, maxEndIndex));
        break;
    }
  });

  useEffect(() => {
    // TODO: Change by the amount that logs.length changed, not just +1
    setEnd((end) => clamp(end + 1, minEndIndex, maxEndIndex));
  }, [logs.length]);

  if (!gameState) return null;

  return (
    <RoomScreen>
      <h1>
        <TypedText>{roomName(room)}_Room.log</TypedText>
      </h1>
      <HorizontalDivider variant="double" />

      {/* Log List */}
      <div className="flex items-stretch w-full">
        <ul className="flex-grow w-full overflow-hidden">
          {logsOnPage.map((log, i) => (
            <li key={i} className="whitespace-nowrap w-full">
              <SubSequencer duration={10}>
                <time className="mr-2">
                  <TypedText>
                    {formatTimestamp(log.time, gameState.startedAt!)} |
                  </TypedText>
                </time>
                <span className="truncate w-full">
                  <TypedText>{log.text}</TypedText>
                </span>
              </SubSequencer>
              {i !== logsOnPage.length - 1 && (
                <HorizontalDivider variant="dashed" />
              )}
            </li>
          ))}
        </ul>
        <ScrollBar bar={[start, end]} range={[minStartIndex, maxEndIndex]} />
      </div>

      <HorizontalDivider />

      <LogInput roomNumber={room} startedAt={gameState.startedAt!} />
    </RoomScreen>
  );
};

const LogInput: React.FC<{ roomNumber: RoomNumber; startedAt: number }> = ({
  roomNumber,
  startedAt,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = useState("");
  const [now, setNow] = useState(Date.now());

  useKeyDown(
    useCallback(() => {
      inputRef.current?.focus();
    }, []),
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(Date.now());
    }, 1000);
    return () => clearInterval(interval);
  }, [inputValue]);

  return (
    <fieldset className="flex gap-2">
      <label>
        <time>
          <TypedText>
            {formatTimestamp(startedAt, now)} {">"}
          </TypedText>
        </time>
      </label>
      <SequencedDiv className="flex-grow">
        <input
          autoFocus
          spellCheck={false}
          ref={inputRef}
          className="outline-none border-none bg-transparent w-full"
          onKeyDown={(event) => {
            if (event.code == "Enter") {
              event.preventDefault();
              if (inputValue) {
                trpcClient.admin.log.mutate({ roomNumber, text: inputValue });
                setInputValue("");
              }
            }
          }}
          onChange={(event) => setInputValue(event.target.value)}
          value={inputValue}
          onBlur={() => inputRef.current?.focus()}
        />
      </SequencedDiv>
      <span className={inputValue ? "" : "opacity-30"}>
        <TypedText>[↵]</TypedText>
      </span>
    </fieldset>
  );
};
