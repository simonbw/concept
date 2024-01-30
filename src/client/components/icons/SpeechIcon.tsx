import React, { SVGProps, useId } from "react";
import { classNames } from "../../utils/classNames";

export const SpeechIcon = (props: SVGProps<SVGSVGElement>) => {
  const a = useId();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      viewBox="0 0 128 128"
      {...props}
    >
      <defs>
        <radialGradient
          className={classNames(
            "[--gradientHighlightColor:theme(colors.slate.50)]",
            "[--gradientLightColor:theme(colors.slate.200)]",
            "[--gradientDarkColor:theme(colors.slate.500)]"
          )}
          id={a}
          cx="64px"
          cy="72px"
          r="50%"
          gradientTransform="scale(1 0.8)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="var(--gradientHighlightColor)" />
          <stop offset="80%" stopColor="var(--gradientLightColor)" />
          <stop offset="100%" stopColor="var(--gradientDarkColor)" />
        </radialGradient>
      </defs>
      <path
        fill={`url(#${a})`}
        d="M63.65 8.07C20.99 8.29 3.72 30.53 3.39 58.23c-.18 15.47 9.79 28.83 25.07 36.98 7.45 5.27-1.42 22.54-8.52 26.95 0 0 25.1-1.71 32.02-19.4 3.82.56 7.75.85 11.78.85 33.28 0 60.17-17.68 60.17-45.38S106.72 7.86 63.65 8.07z"
      />
      <g className="fill-slate-600">
        <circle cx={42} cy={57} r={5} />
        <circle cx={64} cy={57} r={5} />
        <circle cx={86} cy={57} r={5} />
      </g>
    </svg>
  );
};
