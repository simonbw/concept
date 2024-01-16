import React, { ReactNode, useRef, useState } from "react";
import { incorrectBeep, victoryBeep } from "../../../../common/utils/beep";
import { RevealedText } from "../../effects/RevealedText";
import { Sequenced } from "../../effects/Sequenced";
import { TypedText } from "../../effects/TypedText";

export const SimpleAnswerPuzzle: React.FC<{
  isComplete: boolean;
  validateAnswer: (answer: string) => boolean;
  onComplete: () => void;
  children?: ReactNode;
}> = ({ children, isComplete, validateAnswer, onComplete }) => {
  return (
    <>
      <div>{children}</div>
      <br />

      <SimpleAnswerInput
        validateAnswer={validateAnswer}
        onComplete={async () => {
          if (!isComplete) {
            victoryBeep();
            onComplete();
          }
        }}
      />
    </>
  );
};
//

const SimpleAnswerInput: React.FC<{
  validateAnswer: (answer: string) => boolean;
  onComplete: () => void;
}> = ({ onComplete, validateAnswer }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [answer, setAnswer] = useState("");

  const [showIncorrect, setShowIncorrect] = useState(false);
  const [beeping, setBeeping] = useState(false);

  return (
    <fieldset>
      <div className="flex w-full">
        <span className="whitespace-pre">
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
                className="flex-grow outline-none bg-transparent select-none"
                value={answer}
                onChange={(event) => {
                  setAnswer(event.target.value);
                  if (showIncorrect) {
                    setShowIncorrect(false);
                  }
                }}
                onBlur={() => inputRef.current?.focus()}
                onKeyDown={async (event) => {
                  if (event.key === "Enter" && !beeping) {
                    event.preventDefault();
                    if (validateAnswer(answer)) {
                      onComplete();
                    } else {
                      setAnswer("");
                      setShowIncorrect(true);
                      setBeeping(true);
                      await incorrectBeep();
                      setBeeping(false);
                    }
                  }
                }}
              />
            );
          }}
        </Sequenced>
        <span>
          <RevealedText>[⏎]</RevealedText>
        </span>
      </div>
      {showIncorrect && <TypedText>Incorrect</TypedText>}
    </fieldset>
  );
};
