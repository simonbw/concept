import React, { ReactNode } from "react";
import { Sequenced } from "./Sequenced";
import { Sequencer } from "./Sequencer";

export const SubSequencer: React.FC<{
  duration?: number;
  children: ReactNode;
  canStart?: boolean;
}> = ({ children, duration, canStart }) => {
  return (
    <Sequenced duration={duration}>
      {(started) => (
        <Sequencer started={started && canStart !== false}>
          {children}
        </Sequencer>
      )}
    </Sequenced>
  );
};
