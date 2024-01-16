import React, { useEffect, useRef, useState } from "react";
import { stepTowardsString } from "../../utils/stepTowardsString";
import { useSequence } from "./Sequencer";

type TypedTextProps = {
  children?: (string | number) | (string | number)[];
  initialText?: string;
  interval?: number;
  perInterval?: number;
  onDone?: () => void;
  started?: boolean;
  reverse?: boolean;
  stepThrough?: string;
};

export const UnsequencedTypedText: React.FC<TypedTextProps> = ({
  children = "",
  interval = 4,
  perInterval = 1,
  initialText = " ",
  onDone,
  started = true,
  reverse = false,
  stepThrough = "█",
}) => {
  const [text, setText] = useState(initialText);
  const textRef = useRef(text);
  textRef.current = text;
  const done = useRef(false);

  const childrenStr = Array.isArray(children)
    ? children.join("")
    : String(children);
  const childrenRef = useRef(childrenStr);
  childrenRef.current = childrenStr;

  const onDoneRef = useRef(onDone);
  onDoneRef.current = onDone;

  useEffect(() => {
    if (started) {
      let timeout: NodeJS.Timeout;
      const updateText = () => {
        if (textRef.current !== childrenRef.current) {
          done.current = false;
          setText((text) => {
            for (let i = 0; i < perInterval; i++) {
              text = stepTowardsString(
                text,
                childrenRef.current,
                reverse,
                stepThrough,
              );
            }
            return text;
          });
        } else if (!done.current) {
          done.current = true;
          onDoneRef.current?.();
        }
        timeout = setTimeout(updateText, interval);
      };

      timeout = setTimeout(updateText, interval);

      return () => clearTimeout(timeout);
    }
  }, [interval, started, reverse]);

  // Make sure we don't render an empty string that causes things to collapse
  if (text.trim() === "") {
    return <>&nbsp;</>;
  }

  return <>{text}</>;
};

export const TypedText: React.FC<
  Omit<TypedTextProps, "started" | "onDone"> & { hold?: boolean }
> = ({ children, hold, ...rest }) => {
  const { started, onDone, _id } = useSequence();
  return (
    <UnsequencedTypedText started={started && !hold} onDone={onDone} {...rest}>
      {children}
    </UnsequencedTypedText>
  );
};
