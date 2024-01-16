import React from "react";
import { useGameState } from "../../hooks/useGameState";
import { useLogin } from "../../hooks/useLogin";
import { RevealedText } from "../effects/RevealedText";
import { SequencedDiv } from "../effects/SequencedBlock";
import { Sequencer } from "../effects/Sequencer";

export const SecretKeyDisplay: React.FC = () => {
  const gameState = useGameState();
  const { currentUserId } = useLogin();

  if (!gameState) return null;
  if (!currentUserId) return null;

  return (
    <Sequencer>
      <SequencedDiv className="fixed top-0 right-0 px-2 text-xl flex gap-1 justify-center items-center border-b border-l">
        {gameState.secretKeys.map((key, index) => (
          <span key={index} className={key ? "" : "text-red-700"}>
            <RevealedText>{key ? "✓" : "×"}</RevealedText>
          </span>
        ))}
      </SequencedDiv>
    </Sequencer>
  );
};
