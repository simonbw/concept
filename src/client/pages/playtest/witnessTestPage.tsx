import React from "react";
import { initialGameState } from "../../../common/initialGameState/initialGameState";
import { routes } from "../../../common/routes";
import { TypedText } from "../../components/effects/TypedText";
import { PlayTestWrapper } from "../../components/playtest/PlayTestWrapper";
import { RoomScreen } from "../../components/room/RoomScreen";
import { WitnessPuzzle } from "../../components/room/puzzles/Witness/WitnessPuzzle";
import { renderPage } from "../../utils/renderPage";

const WitnessTestPage: React.FC = () => {
  const roomNumber = window.location.href.includes(routes.playtest.puzzle2a)
    ? 1
    : 2;
  const { start, end, walls, visibleWalls1, visibleWalls2, size } =
    initialGameState.config.witness;

  return (
    <PlayTestWrapper>
      <RoomScreen title={`Puzzle 2 ${roomNumber === 1 ? "(A)" : "(B)"}`}>
        <WitnessPuzzle
          gridSize={size}
          onComplete={() => {
            console.log("complete");
          }}
          start={start}
          end={end}
          visibleWalls={roomNumber === 1 ? visibleWalls1 : visibleWalls2}
          allWalls={walls}
        />
      </RoomScreen>
    </PlayTestWrapper>
  );
};

renderPage(<WitnessTestPage />);
