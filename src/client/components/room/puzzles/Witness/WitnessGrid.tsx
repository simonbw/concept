import React, { HTMLProps, ReactNode } from "react";

export const WitnessGrid: React.FC<
  HTMLProps<SVGSVGElement> & {
    children?: ReactNode | undefined;
    labelCells?: boolean;
    gridSize: [number, number];
  }
> = ({ children, labelCells = false, gridSize: [width, height], ...rest }) => {
  return (
    <svg viewBox="0 0 10 10" {...rest}>
      <g className="stroke-green-500 drop-shadow-svg-glow">
        {[...Array(width + 1)].map((_, i) => (
          <line
            key={i}
            x1={i}
            x2={i}
            y1={0}
            y2={height}
            strokeWidth={i === 0 || i === width ? 0.05 : 0.01}
          />
        ))}
        {[...Array(height + 1)].map((_, i) => (
          <line
            key={i}
            x1={0}
            x2={width}
            y1={i}
            y2={i}
            strokeWidth={i === 0 || i === height ? 0.05 : 0.01}
          />
        ))}
      </g>
      {children}
    </svg>
  );
};
