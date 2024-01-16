import React, { useMemo, useState } from "react";
import { clamp } from "../../../../common/utils/mathUtils";
import { useKeyDown } from "../../../hooks/useKeyDown";
import { HorizontalDivider } from "../../effects/HorizontalDivider";
import { SubSequencer } from "../../effects/SubSequencer";
import { TypedText } from "../../effects/TypedText";
import { RoomScreen } from "../RoomScreen";
import { ScrollBar } from "../ScrollBar";

const totalText = `
Laborum sunt occaecat tempor ipsum ex eu sunt mollit officia Lorem. Minim commodo in voluptate fugiat ipsum. Culpa ex dolor minim irure occaecat incididunt consequat ullamco minim minim pariatur proident exercitation.
Duis sunt sint cupidatat consequat ullamco laborum magna qui cillum proident qui sit fugiat. Pariatur aute elit eiusmod aute incididunt officia esse quis fugiat proident dolor dolor. Non eiusmod sunt officia elit sint est incididunt magna. Duis laboris adipisicing voluptate tempor anim sit laboris dolor minim laborum ad fugiat. Aliquip veniam id aliqua voluptate minim dolore ad consequat exercitation. Reprehenderit aliqua officia adipisicing aute Lorem veniam velit nostrud sint officia.
Exercitation sit do irure eu sunt enim non duis. Amet reprehenderit laborum anim et aliqua nostrud occaecat veniam excepteur aliqua enim qui exercitation. Ut veniam reprehenderit duis magna pariatur aliqua adipisicing nisi voluptate fugiat amet. Et esse cillum do excepteur non fugiat id non quis duis sunt in officia cillum.
`.trim();

const LINES = 12;
export const NotesScreen: React.FC<{ roomNumber: number }> = ({
  roomNumber,
}) => {
  const [offset, setOffset] = useState(0);
  const lines = useMemo(() => textToLines(totalText, 55), [totalText]);
  const linesToRender = lines.slice(offset, offset + LINES);
  // TODO: immutable way to do this
  while (linesToRender.length < LINES) linesToRender.push(" ");

  const maxOffset = lines.length - 1;
  useKeyDown((event) => {
    const amount = event.shiftKey ? 5 : 1;
    switch (event.code) {
      case "ArrowUp":
        setOffset((offset) => clamp(offset - amount, 0, maxOffset));
        break;
      case "ArrowDown":
        setOffset((offset) => clamp(offset + amount, 0, maxOffset));
        break;
    }
  });

  return (
    <RoomScreen>
      <h1>Notes</h1>
      <HorizontalDivider />
      <div className="flex">
        <div className="w-full whitespace-nowrap">
          {linesToRender.map((line, i) => (
            <div key={i} className="whitespace-pre-wrap">
              <SubSequencer duration={35}>
                <TypedText perInterval={7}>{line}</TypedText>
              </SubSequencer>
            </div>
          ))}
        </div>
        <ScrollBar
          bar={[offset, offset + LINES]}
          range={[0, maxOffset + LINES]}
        />
      </div>
      <HorizontalDivider />
    </RoomScreen>
  );
};

function textToLines(text: string, maxWidth: number = 40): string[] {
  const lines = [];

  const paragraphs = text.split("\n");
  for (const paragraph of paragraphs) {
    let currentLine = "";

    for (const word of paragraph.split(/\s+/)) {
      if (currentLine.length + word.length + 1 > maxWidth) {
        lines.push(currentLine.trim());
        currentLine = "";
      }

      currentLine += word + " ";
    }

    if (currentLine.trim() !== "") {
      lines.push(currentLine.trim());
    }
  }

  return lines;
}
