import { Transition } from "@headlessui/react";
import React from "react";
import { classNames } from "../utils/classNames";
import { ConceptData } from "./concepts";

export const ConceptSquare: React.FC<{
  concept: ConceptData;
  orientation?: "left" | "right";
}> = ({ concept, orientation = "left" }) => {
  const [tooltipOpen, setTooltipOpen] = React.useState(false);

  const isOdd = orientation == "left";

  const parkingSpace = (
    <div
      className={classNames(
        "w-16 h-16 border-2 border-dashed",
        isOdd ? "rounded-r-lg border-l-0" : "rounded-l-lg border-r-0"
      )}
    />
  );

  return (
    <div
      className={classNames(
        "flex items-center p-1 select-none",
        isOdd ? "justify-start" : "justify-end"
      )}
    >
      {!isOdd && parkingSpace}
      <div className="relative">
        <ConceptTooltip
          description={concept.description}
          open={tooltipOpen}
          isOdd={isOdd}
        />
        <div
          onMouseEnter={() => setTooltipOpen(true)}
          onMouseLeave={() => setTooltipOpen(false)}
          className={classNames(
            "w-[4.5rem] h-[4.5rem] bg-slate-100 rounded-lg overflow-hidden border border-slate-300 relative flex items-center justify-center"
          )}
        >
          {concept.icon}
        </div>
      </div>
      {isOdd && parkingSpace}
    </div>
  );
};

const ConceptTooltip: React.FC<{
  description: string[];
  open: boolean;
  isOdd: boolean;
}> = ({ description, open, isOdd }) => {
  return (
    <Transition
      as={React.Fragment}
      show={open}
      enter="transition"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div
        className={classNames(
          "shadow-slate-800/50 shadow-lg p-4 rounded bg-slate-100 marker:text-slate-800",
          "absolute pointer-events-none top-0 mx-2 z-20",
          isOdd ? "left-full text-left" : "right-full text-right"
        )}
      >
        <ul className="flex flex-col flex-wrap gap-2">
          {description.map((line, i) => (
            <li key={i} className="text-sm whitespace-nowrap">
              {line}
            </li>
          ))}
        </ul>
      </div>
    </Transition>
  );
};
