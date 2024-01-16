import React from "react";
import { PlayTestWrapper } from "../../components/playtest/PlayTestWrapper";
import { RoomScreen } from "../../components/room/RoomScreen";
import { HuffmanPuzzle } from "../../components/room/puzzles/Huffman/HuffmanPuzzle";
import { warOfTheWorlds } from "../../components/room/puzzles/Huffman/warOfTheWorlds";
import { renderPage } from "../../utils/renderPage";

const HuffmanTestPage: React.FC = () => {
  const secretText = "Hello World!";
  return (
    <PlayTestWrapper>
      <RoomScreen title="Puzzle 1">
        <HuffmanPuzzle sourceText={warOfTheWorlds} secretText={secretText} />
      </RoomScreen>
    </PlayTestWrapper>
  );
};

renderPage(<HuffmanTestPage />);
