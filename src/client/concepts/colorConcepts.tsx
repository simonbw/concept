import React from "react";
import { classNames } from "../utils/classNames";
import { ConceptData } from "./concepts";

const ColorBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 bg-gradient-to-br from-brown-600 to-brown-700">
      {Array.from({ length: 3 * 3 }).map((_, i) => (
        <span
          className={classNames(
            i % 2 === 0 ? "bg-amber-400/40" : "bg-brown-300 / 30"
          )}
        />
      ))}
    </div>
  );
};

const ColorConceptIcon: React.FC<{ className: string }> = ({ className }) => {
  return (
    <div className="concept-icon bg-gradient-to-br from-slate-100 to-green-600 relative">
      <ColorBackground />
      <span
        className={classNames(
          "relative text-5xl w-[70%] h-[70%] border-2 rounded-lg bg-gradient-to-br drop-shadow-md",
          className
        )}
      />
    </div>
  );
};

export const colorConcepts: ConceptData[] = [
  {
    description: ["Red"],
    icon: (
      <ColorConceptIcon className="from-red-500 to-red-600 border-red-700" />
    ),
  },
  {
    description: ["Orange"],
    icon: (
      <ColorConceptIcon className="from-orange-500 to-orange-600 border-orange-700" />
    ),
  },
  {
    description: ["Yellow"],
    icon: (
      <ColorConceptIcon className="from-yellow-300 to-yellow-400 border-yellow-500" />
    ),
  },
  {
    description: ["Green"],
    icon: (
      <ColorConceptIcon className="from-green-500 to-green-600 border-green-700" />
    ),
  },
  {
    description: ["Blue"],
    icon: (
      <ColorConceptIcon className="from-blue-500 to-blue-600 border-blue-700" />
    ),
  },
  {
    description: ["Purple"],
    icon: (
      <ColorConceptIcon className="from-purple-600 to-purple-700 border-purple-900" />
    ),
  },
  {
    description: ["Pink"],
    icon: (
      <ColorConceptIcon className="from-pink-400 to-pink-500 border-pink-600" />
    ),
  },
  {
    description: ["Brown"],
    icon: (
      <ColorConceptIcon className="from-brown-600 to-brown-700 border-brown-800" />
    ),
  },
  {
    description: ["Black"],
    icon: (
      <ColorConceptIcon className="from-slate-900 to-black border-slate-700" />
    ),
  },
  {
    description: ["Gray"],
    icon: (
      <ColorConceptIcon className="from-gray-500 to-gray-600 border-gray-600" />
    ),
  },
  {
    description: ["White"],
    icon: (
      <ColorConceptIcon className="from-white to-slate-100 border-slate-100" />
    ),
  },
  {
    description: ["Transparent", "Invisible", "Glass"],
    icon: (
      <ColorConceptIcon className="from-white/90 to-white/10 border-white/90" />
    ),
  },
];
