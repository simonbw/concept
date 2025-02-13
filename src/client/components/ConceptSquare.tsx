import { Transition } from "@headlessui/react";
import React, { useState } from "react";
import { ConceptData } from "../concepts/concepts";
import { classNames } from "../utils/classNames";
import { useSettings } from "./SettingsContext";

export const ConceptSquare: React.FC<{
  concept: ConceptData;
  orientation?: "left" | "right";
}> = ({ concept, orientation = "left" }) => {
  const { tooltipsOpen } = useSettings();
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const isOdd = orientation == "left";

  const parkingSpace = (
    <div
      className={classNames(
        "w-[3.5rem] h-[3.5rem] border-2 border-dashed border-slate-300 dark:border-slate-700",
        isOdd ? "rounded-r-lg border-l-0 mr-4" : "rounded-l-lg border-r-0 ml-4"
      )}
    />
  );

  return (
    <div
      className={classNames(
        "flex items-center p-0.5 select-none",
        isOdd ? "justify-start" : "justify-end"
      )}
    >
      {!isOdd && parkingSpace}
      <div className="relative">
        <ConceptTooltip
          description={concept.description}
          open={tooltipOpen || tooltipsOpen}
          isOdd={isOdd}
        />
        <div
          onMouseEnter={() => setTooltipOpen(true)}
          onMouseLeave={() => setTooltipOpen(false)}
          className={classNames(
            "w-[4rem] h-[4rem]",
            "relative flex items-center justify-center",
            "bg-slate-100 dark:bg-slate-80 border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-100",
            "rounded-lg overflow-hidden border"
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
          " shadow-lg p-4 rounded marker:text-slate-800",
          "bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100 shadow-slate-800/50 dark:shadow-black",
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
