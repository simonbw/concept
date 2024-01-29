import React, { HTMLProps } from "react";
import { degToRad, polarToVec } from "../../../common/utils/mathUtils";

export const RepeatIcon: React.FC<HTMLProps<SVGSVGElement>> = ({
  ...props
}) => {
  const [cx, cy] = [50, 50];
  const r = 30;
  function point(theta: number) {
    const [dx, dy] = polarToVec(degToRad(theta + 180), r);
    return `${cx + dx},${cy + dy}`;
  }
  return (
    <svg version="1.1" viewBox="0 0 100 100" {...props}>
      <defs>
        <marker
          id="arrow"
          viewBox="0 0 10 10"
          refX="5"
          refY="5"
          markerWidth="2.8"
          markerHeight="2.8"
          orient="auto-start-reverse"
        >
          <path
            d="M 0 0 L 10 5 L 0 10 z"
            className="fill-red-500 stroke-none"
          />
        </marker>
        <marker
          id="arrow2"
          viewBox="0 0 10 10"
          refX="5"
          refY="5"
          markerWidth="2.8"
          markerHeight="2.8"
          orient="auto-start-reverse"
        >
          <path
            d="M 0 0 L 10 5 L 0 10 z"
            className="fill-yellow-400 stroke-none"
          />
        </marker>
      </defs>

      <g transform="rotate(30, 50, 50)">
        <path
          d={`M ${point(0)} A ${r},${r} 0 0 1 ${point(180 - 35)}`}
          className="stroke-red-600 fill-none"
          strokeWidth={12}
          markerEnd="url(#arrow)"
          strokeLinecap="square"
        />
        <path
          d={`M ${point(180)} A ${r},${r} 0 0 1 ${point(360 - 35)}`}
          className="stroke-red-600 fill-none"
          strokeWidth={12}
          markerEnd="url(#arrow)"
          strokeLinecap="square"
        />
      </g>

      <g transform="rotate(30, 50, 50)" className="text-red-500">
        <path
          d={`M ${point(0)} A ${r},${r} 0 0 1 ${point(180 - 35)}`}
          className="stroke-yellow-400 fill-none"
          strokeWidth={8}
          markerEnd="url(#arrow2)"
          strokeLinecap="square"
        />
        <path
          d={`M ${point(180)} A ${r},${r} 0 0 1 ${point(360 - 35)}`}
          className="stroke-yellow-400 fill-none"
          strokeWidth={8}
          markerEnd="url(#arrow2)"
          strokeLinecap="square"
        />
      </g>
    </svg>
  );
};
