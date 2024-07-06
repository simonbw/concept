import { useEffect, useRef } from "react";

export function useAnimationFrame(callback: ((dt: number) => void) | false) {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current == callback;
  }, [callback]);

  useEffect(() => {
    let requestId: number;

    function loop(dt: number) {
      requestId = requestAnimationFrame(loop);
      if (callbackRef.current) {
        callbackRef.current(dt);
      }
    }
    requestId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(requestId);
    };
  }, []);
}
