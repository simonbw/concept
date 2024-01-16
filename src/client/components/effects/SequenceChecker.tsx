import React, { ReactNode, useEffect, useRef } from "react";
import { useSequence } from "./Sequencer";

export const SequenceChecker: React.FC<{
  setDone: (done: boolean) => void;
}> = ({ setDone }) => {
  const { started, onDone } = useSequence();

  useEffect(() => {
    setDone(started);
    if (started) {
      onDone();
    }
  }, [started]);

  return null;
};
