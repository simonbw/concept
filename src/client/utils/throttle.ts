export type Throttled<A extends unknown[]> = ((...args: A) => void) & {
  /** Drop any pending trailing call. */
  cancel: () => void;
};

/**
 * Returns a throttled version of `fn` that runs at most once per `ms`.
 * Trailing calls within a window are coalesced and run when the window ends,
 * so the final call of a burst is never dropped (unless `cancel()` is called).
 */
export function throttle<A extends unknown[]>(
  fn: (...args: A) => void,
  ms: number,
): Throttled<A> {
  let last = 0;
  let timer: ReturnType<typeof setTimeout> | undefined;
  let pending: A | undefined;

  const throttled = (...args: A) => {
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

  throttled.cancel = () => {
    clearTimeout(timer);
    timer = undefined;
    pending = undefined;
  };

  return throttled;
}
