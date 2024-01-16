import React from "react";
import { PuzzleName } from "../../../../common/models/puzzleProgressSchema";
import { beep } from "../../../../common/utils/beep";
import { roomName } from "../../../../common/utils/nameUtils";
import { useGameState } from "../../../hooks/useGameState";
import { useHints } from "../../../hooks/useHints";
import { useLogin } from "../../../hooks/useLogin";
import { useRoomNumber } from "../../../hooks/useRoomNumber";
import { Menu, MenuItem } from "../../Menu";
import { HorizontalDivider } from "../../effects/HorizontalDivider";
import { TypedText } from "../../effects/TypedText";
import { useRoomScreen } from "../ScreenRouter";
import { RoomScreenId } from "../ScreenRoutes";

type MenuItem = {
  label: string;
  effect: () => void;
};

export const MainMenuScreen: React.FC = () => {
  const { currentUsername, currentUserId } = useLogin();
  const gameState = useGameState();

  if (!gameState) return null;

  return (
    <div className="room-screen">
      <h1 className="flex justify-between">
        <span>
          <TypedText>Available Programs [↑↓]</TypedText>
        </span>
        <span>
          <TypedText reverse>{currentUsername ?? ""}</TypedText>
        </span>
      </h1>
      <HorizontalDivider />
      {currentUserId === "admin" ? <AdminMenu /> : <UserMenu />}
    </div>
  );
};

const AdminMenu: React.FC = () => {
  const { logOut } = useLogin();
  const { setScreen } = useRoomScreen();
  function goTo(screen: RoomScreenId) {
    beep({ pitch: 4, duration: 70 });
    setScreen(screen);
  }

  return (
    <Menu>
      <MenuItem onSelect={() => goTo("log1")}>{roomName(1)}_Room.log</MenuItem>
      <MenuItem onSelect={() => goTo("log2")}>{roomName(2)}_Room.log</MenuItem>
      <MenuItem onSelect={logOut}>Log Out</MenuItem>
    </Menu>
  );
};

const UserMenu: React.FC<{}> = () => {
  const { logOut } = useLogin();
  const { setScreen } = useRoomScreen();
  const roomNumber = useRoomNumber();
  const hints = useHints();
  const gameState = useGameState();

  if (!gameState) return null;

  const puzzleProgress = gameState.puzzleProgress[`room${roomNumber}`];

  function goTo(screen: RoomScreenId) {
    beep({ pitch: 4, duration: 70 });
    setScreen(screen);
  }

  function completeIndicator(puzzleName: PuzzleName): string {
    if (puzzleProgress[puzzleName]) {
      return "(Complete)";
    } else {
      return "";
    }
  }

  return (
    <Menu>
      <li>
        <TypedText>Puzzles</TypedText>
      </li>

      <MenuItem onSelect={() => goTo("math-puzzle-1")}>
        Math 1 {completeIndicator("math1")}
      </MenuItem>
      {puzzleProgress.math1 && (
        <MenuItem onSelect={() => goTo("math-puzzle-2")}>
          Math 2 {completeIndicator("math2")}
        </MenuItem>
      )}
      {puzzleProgress.math2 && (
        <MenuItem onSelect={() => goTo("math-puzzle-3")}>
          Math 3 {completeIndicator("math3")}
        </MenuItem>
      )}

      <MenuItem onSelect={() => goTo("maze-puzzle-1")}>
        Maze 1 {completeIndicator("maze1")}
      </MenuItem>
      {puzzleProgress.maze1 && (
        <MenuItem onSelect={() => goTo("maze-puzzle-2")}>
          Maze 2 {completeIndicator("maze2")}
        </MenuItem>
      )}
      {puzzleProgress.maze2 && (
        <MenuItem onSelect={() => goTo("maze-puzzle-3")}>
          Maze 3 {completeIndicator("maze3")}
        </MenuItem>
      )}

      <MenuItem onSelect={() => goTo("music-puzzle-1")}>
        Music 1 {completeIndicator("music1")}
      </MenuItem>

      <br />
      <li>
        <TypedText>Leisure</TypedText>
      </li>

      <MenuItem onSelect={() => goTo("tic-tac-toe")}>
        Tic-Tac-Toe{" "}
        {gameState.ticTacToe.moves.length % 2 === roomNumber - 1
          ? "(Your Turn)"
          : ""}
      </MenuItem>

      <MenuItem onSelect={() => goTo("music")}>Music</MenuItem>
      <MenuItem onSelect={() => goTo("art")}>Art</MenuItem>
      <MenuItem onSelect={() => goTo("tv")}>TV</MenuItem>

      {hints.length > 0 && (
        <MenuItem onSelect={() => goTo("hints")}>Hints</MenuItem>
      )}

      <br />

      <MenuItem onSelect={logOut}>Log Out</MenuItem>
    </Menu>
  );
};
