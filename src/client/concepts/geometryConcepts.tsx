import React, { PropsWithChildren } from "react";
import { range } from "../../common/utils/arrayUtils";
import { lerp, polarToVec } from "../../common/utils/mathUtils";
import { ConceptData } from "./concepts";

const TwoDConceptIcon: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="concept-icon bg-gradient-to-r from-slate-100 to-slate-100 relative">
      <div className="absolute inset-0 grid grid-cols-12 grid-rows-12">
        {Array.from({ length: 12 * 12 }).map((_, i) => (
          <span className="border-[0.5px] border-gray-600/25" />
        ))}
      </div>
      {children}
    </div>
  );
};

const twoDConcepts: ConceptData[] = [
  {
    description: ["Line / Straight", "Diagonal", "Stiff"],
    icon: (
      <TwoDConceptIcon>
        <svg className="w-full h-full relative" viewBox="0 0 100 100">
          <line
            x1={10}
            y1={90}
            x2={90}
            y2={10}
            className="stroke-blue-600 fill-none"
            strokeWidth={12}
          />
          <line
            x1={10}
            y1={90}
            x2={90}
            y2={10}
            className="stroke-blue-500 fill-none"
            strokeWidth={6}
          />
        </svg>
      </TwoDConceptIcon>
    ),
  },
  {
    description: ["Arc / Curve", "Rounded", "Flexible"],
    icon: (
      <TwoDConceptIcon>
        <svg className="w-full h-full relative" viewBox="0 0 100 100">
          <path
            d="M 15 90, Q 10 10 90 15"
            fill="none"
            className="stroke-blue-600 fill-none"
            strokeWidth={12}
          />
          <path
            d="M 15 90, Q 10 10 90 15"
            fill="none"
            className="stroke-blue-500 fill-none"
            strokeWidth={6}
          />
        </svg>
      </TwoDConceptIcon>
    ),
  },
  {
    description: ["Cross", "Crossing", "Addition"],
    icon: (
      <TwoDConceptIcon>
        <svg className="w-full h-full relative" viewBox="0 0 100 100">
          <line
            x1={10}
            y1={50}
            x2={90}
            y2={50}
            className="stroke-blue-600 fill-none"
            strokeWidth={12}
            strokeLinecap="round"
          />
          <line
            x1={50}
            y1={10}
            x2={50}
            y2={90}
            className="stroke-blue-600 fill-none"
            strokeWidth={12}
            strokeLinecap="round"
          />
          <line
            x1={10}
            y1={50}
            x2={90}
            y2={50}
            className="stroke-blue-500 fill-none"
            strokeWidth={6}
            strokeLinecap="round"
          />
          <line
            x1={50}
            y1={10}
            x2={50}
            y2={90}
            className="stroke-blue-500 fill-none"
            strokeWidth={6}
            strokeLinecap="round"
          />
        </svg>
      </TwoDConceptIcon>
    ),
  },
  {
    description: ["Angles", "Sharp", "Jagged"],
    icon: (
      <TwoDConceptIcon>
        <svg className="w-full h-full relative" viewBox="0 0 100 100">
          <path
            d="M 10 85, L 30 20, L 50 65, L 70 30 L 90 60"
            className="stroke-blue-600 fill-none"
            strokeLinecap="round"
            strokeWidth={12}
          />
          <path
            d="M 10 85, L 30 20, L 50 65, L 70 30 L 90 60"
            className="stroke-blue-500 fill-none"
            strokeLinecap="round"
            strokeWidth={6}
          />
        </svg>
      </TwoDConceptIcon>
    ),
  },
  {
    description: ["Spiral", "Drunkenness", "Coil"],
    // TODO: Redo this with an SVG
    icon: (() => {
      const d =
        "M 50 50" +
        range(0, 350)
          .map((i) => {
            const [x, y] = polarToVec((i * Math.PI) / 64, i * 0.125);
            return `T ${50 + x},${50 + y}`;
          })
          .join(" ");
      return (
        <div className="concept-icon bg-gradient-to-r from-slate-100 to-slate-100 relative">
          <TwoDConceptIcon />
          <svg className="w-full h-full relative" viewBox="0 0 100 100">
            <path
              d={d}
              className="stroke-blue-600 fill-none"
              strokeLinecap="round"
              strokeWidth={12}
            />
            <path
              d={d}
              className="stroke-blue-500 fill-none"
              strokeLinecap="round"
              strokeWidth={6}
            />
          </svg>
        </div>
      );
    })(),
  },
  {
    description: ["Wavy", "Ripple", "Hair"],
    icon: (
      <TwoDConceptIcon>
        <svg className="w-full h-full relative" viewBox="0 0 100 100">
          <path
            d="M 10,25 T 28,15, T 30,55, T 55,65 T 85,80"
            className="stroke-blue-600 fill-none"
            strokeLinecap="round"
            strokeWidth={12}
          />
          <path
            d="M 10,25 T 28,15, T 30,55, T 55,65 T 85,80"
            className="stroke-blue-500 fill-none"
            strokeLinecap="round"
            strokeWidth={6}
          />
        </svg>
      </TwoDConceptIcon>
    ),
  },
  {
    description: ["Circle", "Ring"],
    icon: (
      <TwoDConceptIcon>
        <svg className="w-full h-full relative" viewBox="0 0 100 100">
          <circle
            cx={50}
            cy={50}
            r={35}
            className="fill-none stroke-blue-600"
            strokeWidth={12}
          />
          <circle
            cx={50}
            cy={50}
            r={35}
            className="fill-none stroke-blue-500"
            strokeWidth={6}
          />
        </svg>
      </TwoDConceptIcon>
    ),
  },
  {
    description: ["Round"],
    icon: (
      <TwoDConceptIcon>
        <svg className="w-full h-full relative" viewBox="0 0 100 100">
          <circle
            cx={50}
            cy={50}
            r={35}
            className="stroke-blue-600 fill-blue-500"
            strokeWidth={4}
          />
        </svg>
      </TwoDConceptIcon>
    ),
  },
  {
    description: ["Triangle"],
    icon: (
      <TwoDConceptIcon>
        <svg className="w-full h-full relative" viewBox="0 0 100 100">
          <polygon
            points="50,20 80,80 20,80"
            className="stroke-blue-600 fill-blue-500"
            strokeWidth={4}
          />
        </svg>
      </TwoDConceptIcon>
    ),
  },
  {
    description: ["Star"],
    icon: (
      <TwoDConceptIcon>
        <svg className="w-full h-full relative" viewBox="0 0 100 100">
          <polygon
            points="50,20 80,80 20,80"
            className="stroke-blue-600 fill-blue-500"
            strokeWidth={4}
          />
        </svg>
      </TwoDConceptIcon>
    ),
  },
  {
    description: ["Square", "Rectangle"],
    icon: (
      <TwoDConceptIcon>
        <svg className="w-full h-full relative" viewBox="0 0 100 100">
          <rect
            x={30}
            y={20}
            width={40}
            height={60}
            className="stroke-blue-600 fill-blue-500"
            strokeWidth={4}
          />
        </svg>
      </TwoDConceptIcon>
    ),
  },
];

const ThreeDConceptIcon: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="concept-icon bg-gradient-to-b from-sky-400/50 to-slate-100 relative">
      {/* <div className="absolute inset-0 flex flex-col items-center justify-end bg-gradient-to-b ">
        <div className="w-full h-[50%]">
          <div className="grid grid-cols-12 grid-rows-12 w-full h-full">
            {Array.from({ length: 12 * 12 }).map((_, i) => (
              <span className="border-[0.5px] border-gray-600/25" />
            ))}
          </div>
        </div>
      </div> */}
      <svg
        className="absolute top-[50%] left-0 right-0 bottom-0"
        viewBox="0 0 100 100"
      >
        {range(0, 16).map((i) => {
          const t = i / 16;
          return (
            <line
              x1={lerp(0, 100, t)}
              x2={lerp(-100, 200, t)}
              y1={0}
              y2={50}
              className="stroke-slate-300"
              strokeWidth={2}
            />
          );
        })}
        {range(0, 12).map((i) => {
          const t = (i / 12) ** 1.8;
          const y = lerp(0, 50, t);
          return (
            <line
              x1={0}
              x2={100}
              y1={y}
              y2={y}
              className="stroke-slate-300"
              strokeWidth={2 * (t + 0.2)}
            />
          );
        })}
      </svg>
      {children}
    </div>
  );
};

const threeDConcepts: ConceptData[] = [
  {
    description: ["Flat"],
    icon: (
      <ThreeDConceptIcon>
        <svg className="w-full h-full relative" viewBox="0 0 100 100">
          <polygon
            points="30,60 70,60 80,80 20,80"
            className="stroke-blue-600 fill-blue-500"
            strokeWidth={4}
          />
        </svg>
      </ThreeDConceptIcon>
    ),
  },
  {
    description: ["Cube"],
    icon: (
      <ThreeDConceptIcon>
        <svg className="w-full h-full relative" viewBox="0 0 100 100">
          <polygon
            points="20,30 50,40 50,90 20,80"
            className="stroke-blue-600 fill-blue-500"
            strokeWidth={4}
            strokeLinejoin="round"
          />
          <polygon
            points="20,30 50,40 80,30 50,20"
            className="stroke-blue-600 fill-blue-400"
            strokeWidth={4}
            strokeLinejoin="round"
          />
          <polygon
            points="50,40 80,30 80,80 50,90"
            className="stroke-blue-600 fill-blue-600"
            strokeWidth={4}
            strokeLinejoin="round"
          />
        </svg>
      </ThreeDConceptIcon>
    ),
  },
  {
    description: ["Sphere"],
    icon: (
      <ThreeDConceptIcon>
        <svg
          className="w-full h-full relative text-blue-700"
          viewBox="0 0 100 100"
        >
          <defs>
            <radialGradient id="sphereGradient" cx="25%" cy="25%" r="100%">
              <stop offset="0%" stopColor="white" />
              <stop offset="70%" stopColor="currentColor" />
            </radialGradient>
          </defs>
          <circle
            cx={50}
            cy={55}
            r={30}
            className="stroke-blue-700"
            fill="url(#sphereGradient)"
            strokeWidth={4}
          />
        </svg>
      </ThreeDConceptIcon>
    ),
  },
  {
    description: ["Pyramid"],
    icon: (
      <ThreeDConceptIcon>
        <svg className="w-full h-full relative" viewBox="0 0 100 100">
          <polygon
            points="50,20 50,90 20,80"
            className="stroke-blue-600 fill-blue-400"
            strokeWidth={4}
            strokeLinejoin="round"
          />
          <polygon
            points="50,20 80,80 50,90"
            className="stroke-blue-600 fill-blue-600"
            strokeWidth={4}
            strokeLinejoin="round"
          />
        </svg>
      </ThreeDConceptIcon>
    ),
  },
  {
    description: ["Cylinder"],
    icon: (
      <ThreeDConceptIcon>
        <svg
          className="w-full h-full relative text-blue-700"
          viewBox="0 0 100 100"
        >
          <defs>
            <linearGradient
              id="cylinderGradient"
              x1="0%"
              y1="50%"
              x2="100%"
              y2="50%"
            >
              <stop offset="0%" stopColor="white" />
              <stop offset="70%" stopColor="currentColor" />
            </linearGradient>
          </defs>
          <path
            d="M 20,20 L 80,20 L 80,80 Q 50,92 20,80 Z"
            className="stroke-blue-600"
            fill="url(#cylinderGradient)"
            strokeWidth={4}
            strokeLinejoin="round"
          />
          <ellipse
            cx={50}
            cy={20}
            rx={30}
            ry={10}
            className="stroke-blue-600 fill-blue-400"
            strokeWidth={4}
            strokeLinejoin="round"
          />
        </svg>
      </ThreeDConceptIcon>
    ),
  },
  {
    description: ["Cone"],
    icon: (
      <ThreeDConceptIcon>
        <svg
          className="w-full h-full relative text-blue-700"
          viewBox="0 0 100 100"
        >
          <defs>
            <linearGradient
              id="coneGradient"
              x1="0%"
              y1="25%"
              x2="100%"
              y2="75%"
            >
              <stop offset="0%" stopColor="white" />
              <stop offset="100%" stopColor="currentColor" />
            </linearGradient>
          </defs>
          <path
            d="M 50,20 L 80,80 Q 50,92 20,80 Z"
            className="stroke-blue-600"
            fill="url(#coneGradient)"
            strokeWidth={4}
            strokeLinejoin="round"
          />
        </svg>
      </ThreeDConceptIcon>
    ),
  },
  {
    description: ["Hollow", "Hole", "Pierced"],
    icon: (
      <ThreeDConceptIcon>
        <span className="text-5xl relative pt-2">🕳️</span>
      </ThreeDConceptIcon>
    ),
  },
];

const spatialConcepts: ConceptData[] = [
  {
    description: ["Big", "High"],
    icon: (
      <div className="concept-icon bg-gradient-to-br from-slate-100 to-green-600 relative flex justify-center items-center w-full gap-1">
        <TwoDConceptIcon />
        <span className="w-[35%] shrink-0 flex items-center justify-center">
          <span className="relative text-5xl inline-block rotate-90">⇤</span>
        </span>
        <span className="relative w-[35%] h-[75%] shrink-0 bg-yellow-400 border-2 border-amber-500 outline-1 outline-black/50 outline" />
      </div>
    ),
  },
  {
    description: ["Small", "Low"],
    icon: (
      <div className="concept-icon bg-gradient-to-br from-slate-100 to-green-600 relative flex justify-center items-center w-full">
        <TwoDConceptIcon />
        <div className="flex items-end justify-center gap-2 h-[75%]">
          <span className="w-[35%] shrink-0 flex items-center justify-center">
            <span className="relative text-5xl inline-block -rotate-90">⇤</span>
          </span>
          <span className="relative w-[45%] h-[20%] shrink-0 bg-yellow-400 border-2 border-amber-500 outline-1 outline-black/50 outline" />
        </div>
      </div>
    ),
  },
  {
    description: ["Fat", "Large", "Long"],
    icon: (
      <div className="concept-icon bg-gradient-to-br from-slate-100 to-green-600 relative flex justify-center items-center w-full">
        <TwoDConceptIcon />
        <div className="flex flex-col items-center justify-center h-[75%] gap-1">
          <span className="shrink-0 h-[50%] flex items-center justify-center">
            <span className="relative text-3xl flex items-center justify-center tracking-[-0.2em]">
              <span>⇤</span>
              <span className="scale-x-[-1]">⇤</span>
            </span>
          </span>
          <span className="relative w-[100%] h-[50%] shrink-0 bg-yellow-400 border-2 border-amber-500 outline-1 outline-black/50 outline" />
        </div>
      </div>
    ),
  },
  {
    description: ["Thin / Fine", "Narrow", "Short"],
    icon: (
      <div className="concept-icon bg-gradient-to-br from-slate-100 to-green-600 relative flex justify-center items-center w-full">
        <TwoDConceptIcon />
        <div className="flex flex-col items-center justify-center h-[75%] gap-1">
          <span className="shrink-0 h-[50%] flex items-center justify-center">
            <span className="relative text-3xl flex items-center justify-center tracking-[-0.2em]">
              <span className="scale-x-[-1]">⇤</span>
              <span>⇤</span>
            </span>
          </span>
          <span className="relative w-[20%] h-[50%] shrink-0 bg-yellow-400 border-2 border-amber-500 outline-1 outline-black/50 outline" />
        </div>
      </div>
    ),
  },
  {
    description: ["High", "Climb", "Above"],
    icon: (
      <div className="concept-icon bg-gradient-to-br from-slate-100 to-green-600 relative">
        <TwoDConceptIcon />
        <div className="relative flex flex-col h-full w-full items-center justify-end">
          <span
            className="text-6xl text-yellow-400"
            style={{ WebkitTextStroke: "1px brown" }}
          >
            ↥
          </span>
          <span className="h-[20%] w-full bg-black" />
        </div>
      </div>
    ),
  },
  {
    description: ["Low", "Descend", "Below"],
    icon: (
      <div className="concept-icon bg-gradient-to-br from-slate-100 to-green-600 relative">
        <TwoDConceptIcon />
        <div className="relative flex flex-col h-full w-full items-center justify-end rotate-180">
          <span
            className="text-6xl text-yellow-400"
            style={{ WebkitTextStroke: "1px brown" }}
          >
            ↥
          </span>
          <span className="h-[20%] w-full bg-black" />
        </div>
      </div>
    ),
  },
  {
    description: ["Left", "Beginning", "Before / Past"],
    icon: (
      <div className="concept-icon bg-gradient-to-br from-slate-100 to-green-600 relative">
        <TwoDConceptIcon />
        <div className="relative flex flex-col h-full w-full items-center justify-end -rotate-90">
          <span
            className="text-6xl text-yellow-400"
            style={{ WebkitTextStroke: "1px brown" }}
          >
            ↥
          </span>
          <span className="h-[20%] w-full bg-black" />
        </div>
      </div>
    ),
  },
  {
    description: ["Right", "End", "After / Future"],
    icon: (
      <div className="concept-icon bg-gradient-to-br from-slate-100 to-green-600 relative">
        <TwoDConceptIcon />
        <div className="relative flex flex-col h-full w-full items-center justify-end rotate-90">
          <span
            className="text-6xl text-yellow-400"
            style={{ WebkitTextStroke: "1px brown" }}
          >
            ↥
          </span>
          <span className="h-[20%] w-full bg-black" />
        </div>
      </div>
    ),
  },
  {
    description: ["Turn", "Around", "Cycle / Repetition"],
    icon: (
      <div className="concept-icon bg-gradient-to-br from-slate-100 to-green-600 relative">
        <TwoDConceptIcon />
        <span className="text-5xl relative">🔄</span>
      </div>
    ),
  },
  {
    description: ["Use / Action", "Do / Verb", "Button"],
    icon: (
      <div className="concept-icon bg-gradient-to-br from-slate-100 to-green-600 relative">
        <TwoDConceptIcon />
        <span className="text-5xl relative">🔘</span>
      </div>
    ),
  },
];

export const geometryConcepts: ConceptData[] = [
  ...twoDConcepts,
  ...threeDConcepts,
  ...spatialConcepts,
];
