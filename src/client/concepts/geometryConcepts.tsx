import React, { PropsWithChildren } from "react";
import { range } from "../../common/utils/arrayUtils";
import { lerp, polarToVec } from "../../common/utils/mathUtils";
import { ConceptData } from "./concepts";
import { classNames } from "../utils/classNames";

const TwoDConceptIcon: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="concept-icon bg-gradient-to-r from-slate-100 to-slate-100 relative">
      <div className="absolute inset-0 grid grid-cols-12 grid-rows-12">
        {Array.from({ length: 12 * 12 }).map((_, i) => (
          <span key={i} className="border-[0.5px] border-gray-600/25" />
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
          <defs>
            <linearGradient
              className={classNames(
                "[--gradientLightColor:theme(colors.blue.500)]",
                "[--gradientDarkColor:theme(colors.blue.600)]"
              )}
              id="lineGradient"
              x1="20%"
              y1="0%"
              x2="80%"
              y2="100%"
            >
              <stop offset="10%" stopColor="var(--gradientLightColor)" />
              <stop offset="90%" stopColor="var(--gradientDarkColor)" />
            </linearGradient>
          </defs>
          <line
            x1={15}
            y1={85}
            x2={85}
            y2={15}
            className="stroke-blue-600 fill-none"
            strokeWidth={12}
            strokeLinecap="square"
          />
          <line
            x1={15}
            y1={85}
            x2={85}
            y2={15}
            fill="none"
            stroke="url(#lineGradient)"
            strokeWidth={6}
            strokeLinecap="square"
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
          <defs>
            <linearGradient
              className={classNames(
                "[--gradientLightColor:theme(colors.blue.500)]",
                "[--gradientDarkColor:theme(colors.blue.600)]"
              )}
              id="arcGradient"
              x1="20%"
              y1="0%"
              x2="80%"
              y2="100%"
            >
              <stop offset="10%" stopColor="var(--gradientLightColor)" />
              <stop offset="90%" stopColor="var(--gradientDarkColor)" />
            </linearGradient>
          </defs>
          <path
            d="M 15 90, Q 10 10 90 15"
            fill="none"
            className="stroke-blue-600 fill-none"
            strokeWidth={12}
            strokeLinecap="square"
          />
          <path
            d="M 15 90, Q 10 10 90 15"
            fill="none"
            stroke="url(#arcGradient)"
            strokeWidth={6}
            strokeLinecap="square"
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
          <defs>
            <linearGradient
              className={classNames(
                "[--gradientLightColor:theme(colors.blue.500)]",
                "[--gradientDarkColor:theme(colors.blue.600)]"
              )}
              id="crossGradient"
              gradientUnits="userSpaceOnUse"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="10%" stopColor="var(--gradientLightColor)" />
              <stop offset="90%" stopColor="var(--gradientDarkColor)" />
            </linearGradient>
          </defs>
          <line
            x1={15}
            y1={50}
            x2={85}
            y2={50}
            className="stroke-blue-600 fill-none"
            strokeWidth={12}
            strokeLinecap="square"
          />
          <line
            x1={50}
            y1={15}
            x2={50}
            y2={85}
            className="stroke-blue-600 fill-none"
            strokeWidth={12}
            strokeLinecap="square"
          />

          <rect
            x={47}
            y={12}
            width={6}
            height={76}
            fill="url(#crossGradient)"
            stroke="none"
          />
          <rect
            x={12}
            y={47}
            width={76}
            height={6}
            fill="url(#crossGradient)"
            stroke="none"
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
          <defs>
            <linearGradient
              className={classNames(
                "[--gradientLightColor:theme(colors.blue.500)]",
                "[--gradientDarkColor:theme(colors.blue.600)]"
              )}
              id="anglesGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
              spreadMethod="reflect"
            >
              <stop offset="10%" stopColor="var(--gradientLightColor)" />
              <stop offset="90%" stopColor="var(--gradientDarkColor)" />
            </linearGradient>
          </defs>
          <path
            d="M 10 85, L 30 20, L 50 65, L 70 30 L 90 60"
            className="stroke-blue-600 fill-none"
            strokeLinecap="square"
            strokeWidth={12}
          />
          <path
            d="M 10 85, L 30 20, L 50 65, L 70 30 L 90 60"
            fill="none"
            stroke="url(#anglesGradient)"
            strokeLinecap="square"
            strokeWidth={6}
          />
        </svg>
      </TwoDConceptIcon>
    ),
  },
  {
    description: ["Spiral", "Drunkenness", "Coil"],
    icon: (() => {
      const layers = 2.9;
      const resolution = 100;
      const maxRadius = 43;
      const [cx, cy] = [53, 53];
      const d =
        `M ${cx},${cy} ` +
        range(0, resolution)
          .map((i) => {
            const t = i / resolution;
            const theta = t * layers * Math.PI * 2;
            const r = t * maxRadius;
            const [x, y] = polarToVec(theta, r);
            return `T ${cx + x},${cy + y}`;
          })
          .join(" ");
      return (
        <div className="concept-icon bg-gradient-to-r from-slate-100 to-slate-100 relative">
          <TwoDConceptIcon />
          <svg className="w-full h-full relative" viewBox="0 0 100 100">
            <defs>
              <linearGradient
                className={classNames(
                  "[--gradientLightColor:theme(colors.blue.500)]",
                  "[--gradientDarkColor:theme(colors.blue.600)]"
                )}
                id="spiralGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
                spreadMethod="reflect"
              >
                <stop offset="10%" stopColor="var(--gradientLightColor)" />
                <stop offset="90%" stopColor="var(--gradientDarkColor)" />
              </linearGradient>
            </defs>
            <path
              d={d}
              className="stroke-blue-600 fill-none"
              strokeLinecap="round"
              strokeWidth={12}
            />
            <path
              d={d}
              fill="none"
              stroke="url(#spiralGradient)"
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
          <defs>
            <linearGradient
              className={classNames(
                "[--gradientLightColor:theme(colors.blue.500)]",
                "[--gradientDarkColor:theme(colors.blue.600)]"
              )}
              id="wavyGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
              spreadMethod="reflect"
            >
              <stop offset="10%" stopColor="var(--gradientLightColor)" />
              <stop offset="90%" stopColor="var(--gradientDarkColor)" />
            </linearGradient>
          </defs>
          <path
            d="M 10,25 T 28,15, T 30,55, T 55,65 T 85,80"
            className="stroke-blue-600 fill-none"
            strokeLinecap="round"
            strokeWidth={12}
          />
          <path
            d="M 10,25 T 28,15, T 30,55, T 55,65 T 85,80"
            fill="none"
            stroke="url(#wavyGradient)"
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
          <defs>
            <linearGradient
              className={classNames(
                "[--gradientLightColor:theme(colors.blue.500)]",
                "[--gradientDarkColor:theme(colors.blue.600)]"
              )}
              id="ringGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
              spreadMethod="reflect"
            >
              <stop offset="10%" stopColor="var(--gradientLightColor)" />
              <stop offset="90%" stopColor="var(--gradientDarkColor)" />
            </linearGradient>
          </defs>
          <circle
            cx={50}
            cy={50}
            r={35}
            className="stroke-blue-600 fill-none"
            strokeWidth={12}
          />
          <circle
            cx={50}
            cy={50}
            r={35}
            fill="none"
            stroke="url(#ringGradient)"
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
          <defs>
            <linearGradient
              className={classNames(
                "[--gradientLightColor:theme(colors.blue.500)]",
                "[--gradientDarkColor:theme(colors.blue.600)]"
              )}
              id="twoDGradient"
              x1="20%"
              y1="0%"
              x2="80%"
              y2="100%"
            >
              <stop offset="10%" stopColor="var(--gradientLightColor)" />
              <stop offset="90%" stopColor="var(--gradientDarkColor)" />
            </linearGradient>
          </defs>
          <circle
            cx={50}
            cy={50}
            r={35}
            className="stroke-blue-600"
            strokeWidth={2}
            fill="url(#twoDGradient)"
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
          <defs>
            <linearGradient
              className={classNames(
                "[--gradientLightColor:theme(colors.blue.500)]",
                "[--gradientDarkColor:theme(colors.blue.600)]"
              )}
              id="twoDGradient"
              x1="20%"
              y1="0%"
              x2="80%"
              y2="100%"
            >
              <stop offset="10%" stopColor="var(--gradientLightColor)" />
              <stop offset="90%" stopColor="var(--gradientDarkColor)" />
            </linearGradient>
          </defs>
          <polygon
            points="50,20 80,80 20,80"
            className="stroke-blue-600"
            fill="url(#twoDGradient)"
            strokeWidth={2}
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
          <defs>
            <linearGradient
              className={classNames(
                "[--gradientLightColor:theme(colors.blue.500)]",
                "[--gradientDarkColor:theme(colors.blue.600)]"
              )}
              id="twoDGradient"
              x1="20%"
              y1="0%"
              x2="80%"
              y2="100%"
            >
              <stop offset="10%" stopColor="var(--gradientLightColor)" />
              <stop offset="90%" stopColor="var(--gradientDarkColor)" />
            </linearGradient>
          </defs>
          <polygon
            points={range(0, 9)
              .map((i) => {
                const r = i % 2 === 0 ? 42 : 18;
                const theta = (i / 10) * Math.PI * 2 - Math.PI / 2;
                const [x, y] = polarToVec(theta, r);
                return `${50 + x},${52 + y}`;
              })
              .join(" ")}
            className="stroke-blue-600"
            fill="url(#twoDGradient)"
            strokeWidth={2}
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
          <defs>
            <linearGradient
              className={classNames(
                "[--gradientLightColor:theme(colors.blue.500)]",
                "[--gradientDarkColor:theme(colors.blue.600)]"
              )}
              id="twoDGradient"
              x1="20%"
              y1="0%"
              x2="80%"
              y2="100%"
            >
              <stop offset="10%" stopColor="var(--gradientLightColor)" />
              <stop offset="90%" stopColor="var(--gradientDarkColor)" />
            </linearGradient>
          </defs>
          <rect
            x={30}
            y={20}
            width={40}
            height={60}
            className="stroke-blue-600"
            fill="url(#twoDGradient)"
            strokeWidth={2}
          />
        </svg>
      </TwoDConceptIcon>
    ),
  },
];

const ThreeDConceptIcon: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="concept-icon bg-gradient-to-b from-sky-400/50 to-slate-100 relative">
      <svg
        className="absolute top-[50%] left-0 right-0 bottom-0"
        viewBox="0 0 100 100"
      >
        {range(0, 16).map((i) => {
          const t = i / 16;
          return (
            <line
              key={`x${i}`}
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
              key={`y${i}`}
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
        <svg
          className="w-full h-full relative drop-shadow-concept"
          viewBox="0 0 100 100"
        >
          <defs>
            <linearGradient
              className={classNames(
                "[--gradientLightColor:theme(colors.blue.300)]",
                "[--gradientDarkColor:theme(colors.blue.600)]"
              )}
              id="flatGradient"
              x1="20%"
              y1="0%"
              x2="80%"
              y2="100%"
            >
              <stop offset="20%" stopColor="var(--gradientLightColor)" />
              <stop offset="100%" stopColor="var(--gradientDarkColor)" />
            </linearGradient>
          </defs>
          <polygon
            points="30,60 70,60 88,85 12,85"
            className="stroke-blue-600"
            fill="url(#flatGradient)"
            strokeWidth={2}
          />
        </svg>
      </ThreeDConceptIcon>
    ),
  },
  {
    description: ["Cube"],
    icon: (
      <ThreeDConceptIcon>
        <svg
          className="w-full h-full relative drop-shadow-concept"
          viewBox="0 0 100 100"
        >
          <polygon
            points="20,30 50,40 50,90 20,80"
            className="stroke-blue-600 fill-blue-500"
            strokeWidth={2}
            strokeLinejoin="round"
          />
          <polygon
            points="20,30 50,40 80,30 50,20"
            className="stroke-blue-600 fill-blue-400"
            strokeWidth={2}
            strokeLinejoin="round"
          />
          <polygon
            points="50,40 80,30 80,80 50,90"
            className="stroke-blue-600 fill-blue-600"
            strokeWidth={2}
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
          className="w-full h-full relative drop-shadow-concept"
          viewBox="0 0 100 100"
        >
          <defs>
            <radialGradient
              className={classNames(
                "[--gradientHighlightColor:theme(colors.blue.100)]",
                "[--gradientLightColor:theme(colors.blue.300)]",
                "[--gradientDarkColor:theme(colors.blue.700)]"
              )}
              id="sphereGradient"
              cx="50%"
              cy="50%"
              fx="25%"
              fy="20%"
              r="100%"
            >
              <stop offset="0%" stopColor="var(--gradientHighlightColor)" />
              <stop offset="10%" stopColor="var(--gradientLightColor)" />
              <stop offset="60%" stopColor="var(--gradientDarkColor)" />
            </radialGradient>
          </defs>
          <circle
            cx={50}
            cy={55}
            r={30}
            className="stroke-blue-700"
            fill="url(#sphereGradient)"
            strokeWidth={2}
          />
        </svg>
      </ThreeDConceptIcon>
    ),
  },
  {
    description: ["Pyramid"],
    icon: (
      <ThreeDConceptIcon>
        <svg
          className="w-full h-full relative drop-shadow-concept"
          viewBox="0 0 100 100"
        >
          <polygon
            points="50,20 50,90 20,80"
            className="stroke-blue-700 fill-blue-400"
            strokeWidth={2}
            strokeLinejoin="round"
          />
          <polygon
            points="50,20 80,80 50,90"
            className="stroke-blue-700 fill-blue-600"
            strokeWidth={2}
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
          className="w-full h-full relative text-blue-700 drop-shadow-concept"
          viewBox="0 0 100 100"
        >
          <defs>
            <linearGradient
              className={classNames(
                "[--gradientHighlightColor:theme(colors.blue.200)]",
                "[--gradientLightColor:theme(colors.blue.300)]",
                "[--gradientDarkColor:theme(colors.blue.700)]"
              )}
              id="cylinderGradient"
              x1="0%"
              y1="50%"
              x2="100%"
              y2="50%"
            >
              <stop offset="0%" stopColor="var(--gradientLightColor)" />
              <stop offset="10%" stopColor="var(--gradientHighlightColor)" />
              <stop offset="20%" stopColor="var(--gradientLightColor)" />
              <stop offset="70%" stopColor="var(--gradientDarkColor)" />
            </linearGradient>
          </defs>
          <path
            d="M 20,20 L 80,20 L 80,80 Q 50,96 20,80 Z"
            className="stroke-blue-600"
            fill="url(#cylinderGradient)"
            strokeWidth={2}
            strokeLinejoin="round"
          />
          <ellipse
            cx={50}
            cy={20}
            rx={30}
            ry={8}
            className="stroke-blue-600 fill-blue-400"
            strokeWidth={2}
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
          className="w-full h-full relative text-blue-700 drop-shadow-concept"
          viewBox="0 0 100 100"
        >
          <defs>
            <linearGradient
              id="coneGradient"
              className={classNames(
                "[--gradientHighlightColor:theme(colors.blue.200)]",
                "[--gradientLightColor:theme(colors.blue.300)]",
                "[--gradientDarkColor:theme(colors.blue.700)]"
              )}
              x1="0%"
              y1="0%"
              x2="98%"
              y2="30%"
            >
              <stop offset="0%" stopColor="var(--gradientDarkColor)" />
              <stop offset="42%" stopColor="var(--gradientLightColor)" />
              <stop offset="50%" stopColor="var(--gradientHighlightColor)" />
              <stop offset="58%" stopColor="var(--gradientLightColor)" />
              <stop offset="100%" stopColor="var(--gradientDarkColor)" />
            </linearGradient>
          </defs>
          <path
            d="M 50,20 L 80,80 Q 50,92 20,80 Z"
            className="stroke-blue-600"
            fill="url(#coneGradient)"
            strokeWidth={2}
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

const SpatialConceptIcon: React.FC<
  PropsWithChildren<{ className?: string }>
> = ({ children, className }) => {
  return (
    <div
      className={classNames(
        "concept-icon bg-gradient-to-b from-slate-100 to-green-600 relative text-black",
        className
      )}
    >
      <div className="absolute inset-0 grid grid-cols-12 grid-rows-12">
        {Array.from({ length: 12 * 12 }).map((_, i) => (
          <span key={i} className="border-[0.5px] border-gray-600/25" />
        ))}
      </div>
      {children}
    </div>
  );
};

const spatialConcepts: ConceptData[] = [
  {
    description: ["Big", "High"],
    icon: (
      <SpatialConceptIcon className="flex justify-center items-center w-full gap-1">
        <span className="w-[35%] shrink-0 flex items-center justify-center">
          <span className="relative text-5xl inline-block rotate-90">⇤</span>
        </span>
        <span className="relative w-[35%] h-[75%] shrink-0 bg-yellow-400 border-2 border-amber-500 outline-1 outline-black/50 outline" />
      </SpatialConceptIcon>
    ),
  },
  {
    description: ["Small", "Low"],
    icon: (
      <SpatialConceptIcon className="flex justify-center items-center w-full">
        <div className="flex items-end justify-center gap-2 h-[75%]">
          <span className="w-[35%] shrink-0 flex items-center justify-center">
            <span className="relative text-5xl inline-block -rotate-90">⇤</span>
          </span>
          <span className="relative w-[45%] h-[20%] shrink-0 bg-yellow-400 border-2 border-amber-500 outline-1 outline-black/50 outline" />
        </div>
      </SpatialConceptIcon>
    ),
  },
  {
    description: ["Fat", "Large", "Long"],
    icon: (
      <SpatialConceptIcon className="flex justify-center items-center w-full">
        <div className="flex flex-col items-center justify-center h-[75%] gap-1">
          <span className="shrink-0 h-[50%] flex items-center justify-center">
            <span className="relative text-3xl flex items-center justify-center tracking-[-0.2em]">
              <span>⇤</span>
              <span className="scale-x-[-1]">⇤</span>
            </span>
          </span>
          <span className="relative w-[100%] h-[50%] shrink-0 bg-yellow-400 border-2 border-amber-500 outline-1 outline-black/50 outline" />
        </div>
      </SpatialConceptIcon>
    ),
  },
  {
    description: ["Thin / Fine", "Narrow", "Short"],
    icon: (
      <SpatialConceptIcon className="flex justify-center items-center w-full">
        <div className="flex flex-col items-center justify-center h-[75%] gap-1">
          <span className="shrink-0 h-[50%] flex items-center justify-center">
            <span className="relative text-3xl flex items-center justify-center tracking-[-0.2em]">
              <span className="scale-x-[-1]">⇤</span>
              <span>⇤</span>
            </span>
          </span>
          <span className="relative w-[20%] h-[50%] shrink-0 bg-yellow-400 border-2 border-amber-500 outline-1 outline-black/50 outline" />
        </div>
      </SpatialConceptIcon>
    ),
  },
  {
    description: ["High", "Climb", "Above"],
    icon: (
      <SpatialConceptIcon>
        <div className="relative flex flex-col h-full w-full items-center justify-end">
          <span
            className="text-6xl text-yellow-400"
            style={{ WebkitTextStroke: "1px brown" }}
          >
            ↥
          </span>
          <span className="h-[20%] w-full shrink-0 bg-black" />
        </div>
      </SpatialConceptIcon>
    ),
  },
  {
    description: ["Low", "Descend", "Below"],
    icon: (
      <SpatialConceptIcon className="">
        <div className="relative flex flex-col h-full w-full items-center justify-end rotate-180">
          <span
            className="text-6xl text-yellow-400"
            style={{ WebkitTextStroke: "1px brown" }}
          >
            ↥
          </span>
          <span className="h-[20%] w-full shrink-0 bg-black" />
        </div>
      </SpatialConceptIcon>
    ),
  },
  {
    description: ["Left", "Beginning", "Before / Past"],
    icon: (
      <SpatialConceptIcon className="">
        <div className="relative flex flex-col h-full w-full items-center justify-end -rotate-90">
          <span
            className="text-6xl text-yellow-400"
            style={{ WebkitTextStroke: "1px brown" }}
          >
            ↥
          </span>
          <span className="h-[20%] w-full shrink-0 bg-black" />
        </div>
      </SpatialConceptIcon>
    ),
  },
  {
    description: ["Right", "End", "After / Future"],
    icon: (
      <SpatialConceptIcon className="">
        <div className="relative flex flex-col h-full w-full items-center justify-end rotate-90">
          <span
            className="text-6xl text-yellow-400"
            style={{ WebkitTextStroke: "1px brown" }}
          >
            ↥
          </span>
          <span className="h-[20%] w-full shrink-0 bg-black" />
        </div>
      </SpatialConceptIcon>
    ),
  },
  {
    description: ["Turn", "Around", "Cycle / Repetition"],
    icon: (
      <SpatialConceptIcon>
        <span className="text-5xl relative">🔄</span>
      </SpatialConceptIcon>
    ),
  },
  {
    description: ["Use / Action", "Do / Verb", "Button"],
    icon: (
      <SpatialConceptIcon>
        <span className="text-5xl relative">🔘</span>
      </SpatialConceptIcon>
    ),
  },
];

export const geometryConcepts: ConceptData[] = [
  ...twoDConcepts,
  ...threeDConcepts,
  ...spatialConcepts,
];
