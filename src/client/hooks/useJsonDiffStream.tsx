import jsonpatch from "fast-json-patch";
import { useState } from "react";
import { z } from "zod";
import { diffStreamSchema } from "../../common/models/diffStreamSchema";
import { useEventSource } from "./useEventSource";

export function useJsonDiffStream<T extends object>(
  url: string | undefined,
  parser: (o: unknown) => T,
  onChange?: (newState: T, oldState?: T) => void,
): T | undefined {
  const [state, setState] = useState<T | undefined>();

  useEventSource(url, (maybeMessage) => {
    const message = diffStreamSchema(z.any()).parse(maybeMessage);
    if (message.type == "replace") {
      setState(parser(message.state));
    } else if (message.type == "diff") {
      const diff = message.diff;
      setState((oldState) => {
        const newState = parser(
          jsonpatch.applyPatch(oldState, diff, true, false).newDocument,
        );
        onChange?.(newState, oldState);
        return newState;
      });
    } else {
      throw new Error("Invalid message type in diff stream");
    }
  });

  return state;
}
