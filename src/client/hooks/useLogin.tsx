import React, {
  ReactNode,
  createContext,
  useCallback,
  useContext,
} from "react";
import { UserId } from "../../common/models/GameStateSchema";
import { beep, incorrectBeep } from "../../common/utils/beep";
import { trpcClient } from "../trpc/trpcClient";
import { useGameStateRef } from "./useGameState";
import { useRoomNumber } from "./useRoomNumber";

interface Credentials {
  username: string;
  password: string;
  id: UserId;
  locked?: boolean;
}

type LoginErrorType =
  | "user_not_found"
  | "incorrect_password"
  | "connection_failed";

type LoginResult =
  | { success: true }
  | { success: false; error: LoginErrorType };

type LoginContextValue = {
  currentUserId?: UserId;
  currentUsername?: string;
  logIn: (username: string, password: string) => Promise<LoginResult>;
  logOut: () => void;
};

const context = createContext<LoginContextValue>({
  logIn: () => Promise.resolve({ success: false, error: "connection_failed" }),
  logOut: () => {},
});

export function useLogin() {
  return useContext(context);
}

export const LoginProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const gameStateRef = useGameStateRef();
  const roomNumber = useRoomNumber();

  const currentUserId =
    gameStateRef.current?.currentUser[`room${roomNumber}`] ?? undefined;
  const currentUsername =
    currentUserId === "admin"
      ? gameStateRef.current?.config.loginAdmin.username
      : currentUserId === "room_user"
      ? gameStateRef.current?.config[`login_${roomNumber}`].username
      : undefined;

  const logOut = useCallback(async () => {
    return trpcClient.auth.logOut.mutate({ roomNumber });
  }, [roomNumber]);

  async function logIn(
    username: string,
    password: string,
  ): Promise<LoginResult> {
    const gameState = gameStateRef.current;

    if (!gameState) {
      return { success: false, error: "connection_failed" };
    }

    const roomUser = gameState.config[`login_${roomNumber}`];
    const admin = gameState.config[`loginAdmin`];
    const possibleLogins: Record<string, Credentials> = {
      [roomUser.username]: {
        ...roomUser,
        id: "room_user",
        locked: gameState.progress.theIncident,
      },
      [admin.username]: {
        ...admin,
        id: "admin",
      },
    };

    const possibleLogin = possibleLogins[username];
    if (possibleLogin === undefined) {
      // error sound
      await incorrectBeep();
      return { success: false, error: "user_not_found" };
    }

    if (possibleLogin.password !== password) {
      // error sound
      await incorrectBeep();
      return { success: false, error: "incorrect_password" };
    }

    try {
      await trpcClient.auth.logIn.mutate({
        roomNumber,
        userId: possibleLogin.id,
      });
      return { success: true };
    } catch (error) {
      // error sound
      await incorrectBeep();
      return { success: false, error: "connection_failed" };
    }
  }

  return (
    <context.Provider value={{ currentUserId, currentUsername, logIn, logOut }}>
      {children}
    </context.Provider>
  );
};
