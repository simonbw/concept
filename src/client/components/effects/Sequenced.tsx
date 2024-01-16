import React, { ReactNode, useEffect, useRef } from "react";
import { useSequence } from "./Sequencer";

export const Sequenced: React.FC<{
  children: (started: boolean) => ReactNode;
  duration?: number;
}> = ({ children, duration = 20 }) => {
  const { started, onDone } = useSequence();

  const onDoneRef = useRef(onDone);
  onDoneRef.current = onDone;

  useEffect(() => {
    if (started) {
      const timeout = setTimeout(() => {
        onDoneRef.current?.();
      }, duration);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [started]);

  return <>{children(started)}</>;
};
