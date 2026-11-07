import { useMemo, useRef } from "react";
import { Throttled, throttle } from "../utils/throttle";

/**
 * A stable throttled callback. The returned function keeps its throttle state
 * across renders and always calls through to the latest `fn`. Call `.cancel()`
 * to drop a pending trailing call (e.g. when a drag ends).
 */
export function useThrottledCallback<A extends unknown[]>(
  fn: (...args: A) => void,
  ms: number,
): Throttled<A> {
  const fnRef = useRef(fn);
  fnRef.current = fn;
  return useMemo(
    () => throttle((...args: A) => fnRef.current(...args), ms),
    [ms],
  );
}
