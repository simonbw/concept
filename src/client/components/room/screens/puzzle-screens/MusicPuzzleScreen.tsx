import React, { useReducer, useState } from "react";
import { clamp } from "../../../../../common/utils/mathUtils";
import { beep } from "../../../../../common/utils/beep";
import { Tuple } from "../../../../../common/utils/typeUtils";
import { useKeyDown } from "../../../../hooks/useKeyDown";
import { useRoomNumber } from "../../../../hooks/useRoomNumber";
import { trpcClient } from "../../../../trpc/trpcClient";
import { classNames } from "../../../../utils/classNames";
import { RevealedText } from "../../../effects/RevealedText";
import { SequenceChecker } from "../../../effects/SequenceChecker";
import { SlideIn } from "../../../effects/SlideIn";
import { SubSequencer } from "../../../effects/SubSequencer";
import { TypedText } from "../../../effects/TypedText";
import { RoomScreen } from "../../RoomScreen";
import { Dimmable } from "../../puzzles/Witness/Dimmable";
import { useGameState } from "../../../../hooks/useGameState";

const pitches = [0, 2, 4, 5, 7, 9, 11, 12] as const;

const NOTE_HEIGHT = 18;

export const MusicPuzzleScreen: React.FC = () => {
  const roomNumber = useRoomNumber();
  const gameState = useGameState();

  const answer = [2, 1, 0, 1, 2, 2, 2, 2];
  const [selectedNoteIndex, setSelectedIndex] = useState(0);
  const [notes, setNote] = useNotes();

  const [readyToRender, setReadyToRender] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const uiEnabled = readyToRender && !isPlaying;

  useKeyDown(async (event) => {
    if (!uiEnabled) return;

    switch (event.code) {
      case "ArrowLeft":
        setSelectedIndex((index) => Math.max(0, index - 1));
        break;
      case "ArrowRight":
        setSelectedIndex((index) => Math.min(7, index + 1));
        break;
      case "ArrowUp":
        setNote({
          noteIndex: selectedNoteIndex,
          pitchIndex: (notes[selectedNoteIndex] + 1) % 12,
        });
        break;
      case "ArrowDown":
        setNote({
          noteIndex: selectedNoteIndex,
          pitchIndex: (notes[selectedNoteIndex] - 1) % 12,
        });
        break;
      case "Enter":
      case "Space":
        if (!isPlaying) {
          setIsPlaying(true);
          for (const note of notes) {
            await beep({ pitch: pitches[note], duration: 200 });
          }
          setIsPlaying(false);

          if (notes.every((note, index) => note === answer[index])) {
            trpcClient.admin.completePuzzle.mutate({
              puzzleName: "music1",
              roomNumber,
            });
          }
        }
        break;
    }
  });

  return (
    <RoomScreen
      title={`Music Puzzle${
        gameState?.puzzleProgress[`room${roomNumber}`].music1
          ? " (Complete)"
          : ""
      }`}
    >
      <p>
        <TypedText>
          Please transcribe the notes of Mary had a little lamb
        </TypedText>
      </p>

      <div
        className="relative flex gap-4 w-full justify-between items-center mt-16 "
        style={{ height: NOTE_HEIGHT * 5 }}
      >
        {/* The staff */}
        {[0, 1, 2, 3, 4].map((n) => (
          <SubSequencer key={n} duration={100}>
            <SlideIn
              direction="left-to-right"
              duration={200}
              className="absolute left-0 right-0"
              style={{ top: `${n * NOTE_HEIGHT}px` }}
            >
              <hr className="w-full" />
            </SlideIn>
          </SubSequencer>
        ))}

        <SlideIn
          duration={100}
          className="inline-block border-x w-2"
          style={{ height: NOTE_HEIGHT * 4 }}
        />
        {/* The notes */}
        <SubSequencer duration={150}>
          {notes.map((note, index) => (
            <Note
              key={index}
              uiEnabled={uiEnabled}
              selected={index === selectedNoteIndex}
              note={note}
            />
          ))}
        </SubSequencer>

        <SlideIn
          duration={100}
          className="inline-block border-x w-2"
          style={{ height: NOTE_HEIGHT * 4 }}
        />
      </div>

      <div className="text-center">
        <Dimmable dim={!uiEnabled}>⏵ [⏎]</Dimmable>
      </div>

      <SequenceChecker setDone={setReadyToRender} />
    </RoomScreen>
  );
};

const Note: React.FC<{
  selected: boolean;
  note: number;
  uiEnabled: boolean;
}> = ({ selected, note, uiEnabled }) => {
  return (
    <div
      className="flex items-center justify-center relative"
      style={{
        bottom: `${((note - 3) * NOTE_HEIGHT) / 2}px`,
        height: `${NOTE_HEIGHT}px`,
      }}
    >
      <span
        className={classNames(
          "absolute bottom-[20]",
          selected ? "" : "invisible",
        )}
      >
        <Dimmable dim={!uiEnabled || note >= pitches.length - 1}>↑</Dimmable>
      </span>
      <span
        className={classNames("absolute top-[20]", selected ? "" : "invisible")}
      >
        <Dimmable dim={!uiEnabled || note <= 0}>↓</Dimmable>
      </span>
      <span className="text-lg">
        <RevealedText>◆</RevealedText>
      </span>
    </div>
  );
};

function useNotes() {
  return useReducer(
    (
      notes: Tuple<number, 8>,
      { noteIndex, pitchIndex }: { noteIndex: number; pitchIndex: number },
    ) => {
      pitchIndex = clamp(pitchIndex, 0, pitches.length - 1);
      noteIndex = clamp(noteIndex, 0, notes.length - 1);

      beep({ pitch: pitches[pitchIndex], duration: 100 });
      const newState: Tuple<number, 8> = [...notes];
      newState[noteIndex] = pitchIndex;
      return newState;
    },
    [0, 0, 0, 0, 0, 0, 0, 0],
  );
}
