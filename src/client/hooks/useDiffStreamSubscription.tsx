import { Unsubscribable } from "@trpc/server/observable";
import jsonpatch from "fast-json-patch";
import { useEffect, useRef, useState } from "react";
import { z } from "zod";
import { diffStreamSchema } from "../../common/models/diffStreamSchema";
import { trpcClient } from "../trpc/trpcClient";

type StateChangeListener<T> = (newState: T, oldState?: T) => void;

export function useDiffStreamSubscription<T>(
  subscribe: (
    _: undefined,
    options: { onData: (data: unknown) => void }
  ) => Unsubscribable,
  schema: z.ZodType<T>,
  onChange?: StateChangeListener<T>
) {
  const [state, setState] = useState<T | undefined>(undefined);
  const onChangeRef = useRef(onChange);
  onChangeRef.current = onChange;

  useEffect(() => {
    const subscription = subscribe(undefined, {
      onData: (data) => {
        const parsed = diffStreamSchema<T>(schema).parse(data);
        if (parsed.type === "replace") {
          setState(parsed.state);
          onChangeRef.current?.(parsed.state);
        } else if (parsed.type === "diff") {
          setState((state) => {
            const newState = schema.parse(
              jsonpatch.applyPatch(state, parsed.diff, true, false).newDocument
            );
            onChangeRef.current?.(newState, state);
            return newState;
          });
        } else {
          throw new Error("Unrecognized message type");
        }
      },
    });
    return () => subscription.unsubscribe();
  }, []);

  return state;
}
