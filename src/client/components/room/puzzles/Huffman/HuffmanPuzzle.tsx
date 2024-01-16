import React, { useMemo, useState } from "react";
import { SequencedDiv } from "../../../effects/SequencedBlock";
import { SlideIn } from "../../../effects/SlideIn";
import { TypedText } from "../../../effects/TypedText";
import { LeftArrow, RightArrow } from "./HuffmanArrows";
import { HuffmanInput } from "./HuffmanInput";
import { buildHuffmanEncoder, huffmanPreprocess } from "./HuffmanNode";
import { HuffmanTree } from "./HuffmanTree";
import { Sequenced } from "../../../effects/Sequenced";
import { classNames } from "../../../../utils/classNames";

export const HuffmanPuzzle: React.FC<{
  easy?: boolean;
  onComplete?: () => void;
  sourceText: string;
  secretText: string;
  alreadySolved?: boolean;
}> = ({ easy = false, onComplete, sourceText, secretText, alreadySolved }) => {
  const [solved, setSolved] = useState(alreadySolved);

  const encoder = useMemo(
    () => buildHuffmanEncoder(huffmanPreprocess(sourceText)),
    [sourceText],
  );
  const encodedText = useMemo(
    () => encoder.encode(huffmanPreprocess(secretText)),
    [secretText, encoder],
  );

  return (
    <div className="flex flex-col gap-8">
      <p className="break-all hyphens-manual">
        <TypedText>
          We have generated an encoding tree from a popular text and encoded a
          message with it. Please decode the message and type it in the space
          provided.
        </TypedText>
      </p>
      <SlideIn direction="top-to-bottom" duration={750}>
        <HuffmanTree
          node={encoder.tree}
          alphabet={easy ? undefined : encoder.alphabet}
        />
      </SlideIn>
      <Sequenced>
        {(started) => (
          <div
            className={classNames(
              "border p-4 w-full max-w-sm mx-auto flex flex-wrap gap-1 gap-y-2 justify-between",
              "transition-colors",
              started ? "" : "border-transparent",
            )}
          >
            {[...encodedText].map((bit, i) => (
              <SequencedDiv key={i} className="inline-block w-6 h-6">
                {bit === "0" ? (
                  <LeftArrow className="inline" />
                ) : bit === "1" ? (
                  <RightArrow className="inline" />
                ) : (
                  <span>�</span>
                )}
              </SequencedDiv>
            ))}
          </div>
        )}
      </Sequenced>

      {solved ? (
        <div>
          <p>
            <TypedText>YOU SOLVED IT</TypedText>
          </p>
          <p>
            <TypedText>Answer Was: "{secretText}"</TypedText>
          </p>
        </div>
      ) : (
        <HuffmanInput
          onComplete={() => {
            setSolved(true);
            onComplete?.();
          }}
          secretText={secretText}
        />
      )}
    </div>
  );
};
