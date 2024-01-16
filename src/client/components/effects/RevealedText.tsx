import React, { useEffect, useRef, useState } from "react";
import { useSequence } from "./Sequencer";

type RevealedTextProps = {
  children?: string | string[];
  initialText?: string;
  interval?: number;
  onDone?: () => void;
  started?: boolean;
  reverse?: boolean;
  stepThrough?: string;
};

// Like typed text, but instead of adding characters one at a time, it changes their visibility
// Useful for text that doesn't change and effects layout, e.g. centered text
const UnsequencedRevealedText: React.FC<RevealedTextProps> = ({
  children = "",
  interval = 8,
  onDone,
  started = true,
  // TODO: Make reverse work
  reverse = false,
  stepThrough = "█",
}) => {
  const [revealed, setRevealed] = useState(-1);
  const revealedRef = useRef(revealed);
  revealedRef.current = revealed;

  const childrenStr = Array.isArray(children) ? children.join("") : children;

  const onDoneRef = useRef(onDone);
  onDoneRef.current = onDone;

  useEffect(() => {
    // TODO: I think some edge cases are still wrong in here
    if (started) {
      let timeout: NodeJS.Timeout;
      const updateText = () => {
        if (revealedRef.current < childrenStr.length) {
          setRevealed((revealed) => revealed + 1);
          timeout = setTimeout(updateText, interval);
        } else if (revealedRef.current === childrenStr.length) {
          onDoneRef.current?.();
        }
      };
      timeout = setTimeout(updateText, interval);
      return () => clearTimeout(timeout);
    }
  }, [interval, started, reverse, childrenStr]);

  return [...childrenStr].map((c, i) => (
    <span className={i <= revealed ? "" : "invisible"} key={i}>
      {i === revealed ? stepThrough : c}
    </span>
  ));
};

export const RevealedText: React.FC<
  Omit<RevealedTextProps, "started" | "onDone">
> = ({ children, ...rest }) => {
  const { started, onDone } = useSequence();
  return (
    <UnsequencedRevealedText started={started} onDone={onDone} {...rest}>
      {children}
    </UnsequencedRevealedText>
  );
};
