import React, { useRef, useState } from "react";
import { Sequenced } from "../../../effects/Sequenced";
import { TypedText } from "../../../effects/TypedText";
import { huffmanPreprocess } from "./HuffmanNode";

export const HuffmanInput: React.FC<{
  onComplete: () => void;
  secretText: string;
}> = ({ onComplete, secretText }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [answer, setAnswer] = useState("");
  return (
    <fieldset>
      <span>
        <TypedText>{"> "}</TypedText>
      </span>
      <Sequenced>
        {(started) => {
          if (!started) return null;
          inputRef.current?.focus();
          return (
            <input
              autoFocus={started}
              spellCheck={false}
              ref={inputRef}
              className="outline-none bg-transparent select-none"
              value={answer}
              onChange={(event) => setAnswer(event.target.value)}
              onBlur={() => inputRef.current?.focus()}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  event.preventDefault();
                  if (
                    huffmanPreprocess(answer) === huffmanPreprocess(secretText)
                  ) {
                    onComplete();
                  } else {
                    setAnswer("");
                  }
                }
              }}
            />
          );
        }}
      </Sequenced>
    </fieldset>
  );
};
