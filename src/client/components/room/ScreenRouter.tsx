import React, { createContext, useState } from "react";
import { useGameState } from "../../hooks/useGameState";
import { useLogin } from "../../hooks/useLogin";
import { useRoomNumber } from "../../hooks/useRoomNumber";
import { trpcClient } from "../../trpc/trpcClient";
import { RoomScreenId, screenRoutes } from "./ScreenRoutes";
import { wait } from "../../utils/wait";

const RoomScreenContext = createContext<{
  screen: RoomScreenId | undefined;
  setScreen: (screen: RoomScreenId) => void;
}>({
  screen: undefined,
  setScreen: () => {},
});

export const useRoomScreen = () => React.useContext(RoomScreenContext);

export const ScreenRouter = () => {
  const roomNumber = useRoomNumber();
  const { currentUserId: currentUser } = useLogin();
  const gameState = useGameState();

  const [transitioning, setTransitioning] = useState(false);

  async function setScreen(screen: RoomScreenId) {
    setTransitioning(true);
    try {
      await wait(100);
      await trpcClient.gameState.patch.mutate({
        currentScreen: { [`room${roomNumber}`]: screen },
      });
    } finally {
      setTransitioning(false);
    }
  }

  const screen = transitioning
    ? "transition"
    : gameState?.currentScreen[`room${roomNumber}`] ?? "booting";

  return (
    <RoomScreenContext.Provider value={{ screen, setScreen }}>
      {screenRoutes[screen]()}
    </RoomScreenContext.Provider>
  );
};
