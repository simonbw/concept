import React, { HTMLProps } from "react";

export const RightArrow: React.FC<HTMLProps<SVGSVGElement>> = ({ ...rest }) => {
  return (
    <svg {...rest} viewBox="0 0 10 8" width={20} height={16}>
      <path
        stroke="currentcolor"
        fill="none"
        strokeWidth={1}
        d="M2 1 L6 1 L6 6"
      />
      <path stroke="none" fill="currentcolor" d="M4 4 L8 4 L6 7 Z" />
    </svg>
  );
};
export const LeftArrow: React.FC<HTMLProps<SVGSVGElement>> = ({ ...rest }) => {
  return (
    <svg
      {...rest}
      viewBox="0 0 10 8"
      width={20}
      height={16}
      transform="scale(-1 1)"
    >
      <path
        stroke="currentcolor"
        fill="none"
        strokeWidth={1}
        d="M2 1 L6 1 L6 6"
      />
      <path stroke="none" fill="currentcolor" d="M4 4 L8 4 L6 7 Z" />
    </svg>
  );
};
