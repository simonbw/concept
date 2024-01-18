import React from "react";
import { ConceptSquare } from "./ConceptSquare";
import {
  concepts1,
  concepts2,
  concepts3,
  concepts4,
  concepts5,
} from "./concepts";

export const GameBoard: React.FC = () => {
  return (
    <div className="flex flex-row items-start justify-center gap-8">
      <div className="grid grid-cols-2 w-fit justify-around relative">
        {concepts1.map((concept, i) => (
          <ConceptSquare
            key={i}
            concept={concept}
            orientation={i % 2 == 1 ? "left" : "right"}
          />
        ))}
      </div>
      <div className="grid grid-cols-2 w-fit justify-around relative">
        {concepts2.map((concept, i) => (
          <ConceptSquare
            key={i}
            concept={concept}
            orientation={i % 2 == 1 ? "left" : "right"}
          />
        ))}
      </div>
      <div className="grid grid-cols-2 w-fit justify-around relative">
        {concepts3.map((concept, i) => (
          <ConceptSquare
            key={i}
            concept={concept}
            orientation={i % 2 == 1 ? "left" : "right"}
          />
        ))}
      </div>
      <div className="grid grid-cols-2 w-fit justify-around relative">
        {concepts4.map((concept, i) => (
          <ConceptSquare
            key={i}
            concept={concept}
            orientation={i % 2 == 1 ? "left" : "right"}
          />
        ))}
      </div>
      <div className="grid grid-cols-1 w-fit justify-around relative">
        {concepts5.map((concept, i) => (
          <ConceptSquare key={i} concept={concept} orientation={"right"} />
        ))}
      </div>
    </div>
  );
};
