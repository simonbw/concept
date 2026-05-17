import { useMemo, useRef } from "react";
import { throttle } from "../utils/throttle";

/**
 * A stable throttled callback. The returned function keeps its throttle state
 * across renders and always calls through to the latest `fn`.
 */
export function useThrottledCallback<A extends unknown[]>(
  fn: (...args: A) => void,
  ms: number,
): (...args: A) => void {
  const fnRef = useRef(fn);
  fnRef.current = fn;
  return useMemo(
    () => throttle((...args: A) => fnRef.current(...args), ms),
    [ms],
  );
}
