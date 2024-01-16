import React from "react";
import { routes } from "../../../common/routes";
import { Menu, MenuItem } from "../../components/Menu";
import { HorizontalDivider } from "../../components/effects/HorizontalDivider";
import { TypedText } from "../../components/effects/TypedText";
import { PlayTestWrapper } from "../../components/playtest/PlayTestWrapper";
import { renderPage } from "../../utils/renderPage";

const PlaytestIndexPage: React.FC = () => {
  return (
    <PlayTestWrapper>
      <main className="room-screen">
        <h1>
          <TypedText>Escape Room Playtest </TypedText>
          <TypedText>[↑↓]</TypedText>
        </h1>

        <HorizontalDivider />

        <Menu>
          <MenuItem
            onSelect={() => {
              window.location.href = routes.playtest.puzzle1;
            }}
          >
            Puzzle 1
          </MenuItem>
          <MenuItem
            onSelect={() => {
              window.open(routes.playtest.clue1a);
            }}
          >
            — Clue 1
          </MenuItem>
          <MenuItem
            onSelect={() => {
              window.open(routes.playtest.clue1b);
            }}
          >
            — Clue 2
          </MenuItem>
          <MenuItem
            onSelect={() => {
              window.location.href = routes.playtest.puzzle1ez;
            }}
          >
            Puzzle 1.EZ (If Puzzle 1 is too hard)
          </MenuItem>
          <MenuItem
            onSelect={() => {
              window.location.href = routes.playtest.puzzle2a;
            }}
          >
            Puzzle 2 (A)
          </MenuItem>
          <MenuItem
            onSelect={() => {
              window.location.href = routes.playtest.puzzle2b;
            }}
          >
            Puzzle 2 (B)
          </MenuItem>
        </Menu>
      </main>
    </PlayTestWrapper>
  );
};

renderPage(<PlaytestIndexPage />);
