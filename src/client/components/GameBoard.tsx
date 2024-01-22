import React from "react";
import { ConceptSquare } from "./ConceptSquare";
import {
  concepts1,
  concepts2,
  concepts3,
  concepts4,
  concepts5,
} from "./concepts";

const columnClassName = "grid justify-between grid-cols-2 w-fit";

export const GameBoard: React.FC = () => {
  return (
    <div className="grid grid-rows-[repeat(14,minmax(0,1fr))] grid-flow-col justify-center">
      {concepts1.map((concept, i) => (
        <ConceptSquare
          key={`1-${i}`}
          concept={concept}
          orientation={i % 2 == 1 ? "left" : "right"}
        />
      ))}
      {concepts2.map((concept, i) => (
        <ConceptSquare
          key={`2-${i}`}
          concept={concept}
          orientation={i % 2 == 1 ? "left" : "right"}
        />
      ))}
      {concepts3.map((concept, i) => (
        <ConceptSquare
          key={`3-${i}`}
          concept={concept}
          orientation={i % 2 == 1 ? "left" : "right"}
        />
      ))}
      <div className="row-span-3 col-span-2 relative">
        <CardStack />
      </div>
      {concepts4.map((concept, i) => (
        <ConceptSquare
          key={`4-${i}`}
          concept={concept}
          orientation={i % 2 == 1 ? "left" : "right"}
        />
      ))}
      {concepts5.map((concept, i) => (
        <ConceptSquare key={`5-${i}`} concept={concept} orientation={"right"} />
      ))}

      <div></div>
      <div></div>
      <div className="flex items-end justify-center grow row-span-3">
        <a
          href="https://github.com/simonbw/concept"
          className="w-16 opacity-50 hover:opacity-90 active:opacity-100"
        >
          <GithubLogo />
        </a>
      </div>
    </div>
  );
};

const GithubLogo: React.FC = () => (
  <svg viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
      transform="scale(64)"
      fill="currentColor"
    />
  </svg>
);

const CardStack: React.FC = () => {
  return (
    <div className="relative rounded-xl break-all hyphens-auto aspect-[2/3] h-full">
      <div className="absolute inset-2 rounded-xl flex items-center justify-center shadow select-none">
        <div className="absolute inset-3 border-4 border-double rounded-xl flex items-center justify-center">
          <img className="w-40" src="/static/images/favicon.png" />
        </div>
      </div>
    </div>
  );
};
