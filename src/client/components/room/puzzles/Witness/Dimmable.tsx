import React from "react";
import { RevealedText } from "../../../effects/RevealedText";

export const Dimmable: React.FC<{
  children: string;
  dim?: boolean;
}> = ({ children, dim: dim }) => (
  <span className={dim ? "opacity-40" : ""}>
    <RevealedText>{children}</RevealedText>
  </span>
);
