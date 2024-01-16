import { useGameState } from "../../hooks/useGameState";
import { useDocumentEvent, useKeyDown } from "../../hooks/useKeyDown";
import { trpcClient } from "../../trpc/trpcClient";

const keyCodeToKey = (keyCode: string): 0 | 1 | 2 | 3 | undefined => {
  // TODO: Get real keys programmed to the hardware
  switch (keyCode) {
    case "1":
      return 0;
    case "2":
      return 1;
    case "3":
      return 2;
    case "4":
      return 3;
  }
  return undefined;
};

export const SecretKeyChecker: React.FC = () => {
  const gameState = useGameState();

  useKeyDown((event) => {
    const secretKey = keyCodeToKey(event.key);
    if (secretKey !== undefined) {
      trpcClient.secretKey.press.mutate({ key: secretKey });
    }
  });

  useDocumentEvent("keyup", (event) => {
    const secretKey = keyCodeToKey(event.key);
    if (secretKey !== undefined) {
      trpcClient.secretKey.release.mutate({ key: secretKey });
    }
  });

  if (!gameState) return null;

  return null;
};
