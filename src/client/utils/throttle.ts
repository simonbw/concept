/**
 * Returns a throttled version of `fn` that runs at most once per `ms`.
 * Trailing calls within a window are coalesced and run when the window ends,
 * so the final call of a burst is never dropped.
 */
export function throttle<A extends unknown[]>(
  fn: (...args: A) => void,
  ms: number,
): (...args: A) => void {
  let last = 0;
  let timer: ReturnType<typeof setTimeout> | undefined;
  let pending: A | undefined;

  return (...args: A) => {
    const now = Date.now();
    const elapsed = now - last;
    if (elapsed >= ms) {
      last = now;
      fn(...args);
    } else {
      pending = args;
      timer ??= setTimeout(() => {
        last = Date.now();
        timer = undefined;
        const p = pending;
        pending = undefined;
        if (p) fn(...p);
      }, ms - elapsed);
    }
  };
}
