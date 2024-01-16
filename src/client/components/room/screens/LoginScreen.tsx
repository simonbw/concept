import React, { useState } from "react";
import { useGameState } from "../../../hooks/useGameState";
import { useLogin } from "../../../hooks/useLogin";
import { useRoomNumber } from "../../../hooks/useRoomNumber";
import { trpcClient } from "../../../trpc/trpcClient";
import { wait } from "../../../utils/wait";
import { TypedText } from "../../effects/TypedText";
import { useRoomScreen } from "../ScreenRouter";

type LoginPhase = "username" | "password" | "loggingIn";
const INCORRECT_WAIT_TIME = 3000;

export const LoginScreen = () => {
  const { setScreen } = useRoomScreen();
  const gameState = useGameState();
  const roomNumber = useRoomNumber();
  const { logIn } = useLogin();
  const [phase, setPhase] = useState<LoginPhase>("username");
  const [error, setError] = useState<string | null>(null);

  const [usernameValue, setUsernameValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const passwordInputRef = React.useRef<HTMLInputElement>(null);
  const usernameInputRef = React.useRef<HTMLInputElement>(null);

  function focusWhatNeedsIt() {
    if (phase === "username" && usernameInputRef.current) {
      usernameInputRef.current.focus();
    } else if (phase === "password" && passwordInputRef.current) {
      passwordInputRef.current.focus();
    }
  }

  focusWhatNeedsIt();

  if (!gameState) return null;

  return (
    <div className="room-screen">
      <fieldset>
        <label className="block">
          <TypedText>username</TypedText>
        </label>
        <span>{"> "}</span>
        {phase === "username" ? (
          <input
            autoFocus
            spellCheck={false}
            ref={usernameInputRef}
            className="outline-none bg-transparent select-none"
            value={usernameValue}
            onChange={(event) => setUsernameValue(event.target.value)}
            onBlur={focusWhatNeedsIt}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                event.preventDefault();
                setPhase("password");
              }
            }}
          />
        ) : (
          <span>{usernameValue}</span>
        )}
      </fieldset>
      {(phase === "password" || phase === "loggingIn") && (
        <fieldset>
          <label className="block">
            <TypedText>password</TypedText>
          </label>
          <TypedText>{"> "}</TypedText>
          {phase === "password" ? (
            <input
              autoFocus
              spellCheck={false}
              ref={passwordInputRef}
              className="outline-none bg-transparent"
              autoComplete="new-password"
              type="password"
              value={passwordValue}
              onChange={(event) => setPasswordValue(event.target.value)}
              onBlur={focusWhatNeedsIt}
              onKeyDown={async (event) => {
                if (event.key === "Enter") {
                  event.preventDefault();
                  setPhase("loggingIn");
                  const loginResult = await logIn(usernameValue, passwordValue);

                  if (loginResult.success) {
                    setScreen("main-menu");
                  } else {
                    if (loginResult.error === "user_not_found") {
                      trpcClient.admin.log.mutate({
                        roomNumber,
                        text: `They seem to think "${usernameValue}" is the right username.`,
                      });
                    } else if (loginResult.error === "incorrect_password") {
                      trpcClient.admin.log.mutate({
                        roomNumber,
                        text: `They got the right username, but they tried "${passwordValue}" for the password.`,
                      });
                    }

                    setError(loginResult.error);
                    await wait(INCORRECT_WAIT_TIME);
                    setPhase("username");
                    setUsernameValue("");
                    setPasswordValue("");
                    setError(null);
                  }
                }
              }}
            />
          ) : (
            <span>{[...passwordValue].map(() => "•").join("")}</span>
          )}
        </fieldset>
      )}
      {error && (
        <div>
          <TypedText>{error}</TypedText>
        </div>
      )}
    </div>
  );
};
