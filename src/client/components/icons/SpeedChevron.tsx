import React, { SVGProps } from "react";
export const FastChevron = (props: SVGProps<SVGSVGElement>) => {
  const w = 30;
  const x1 = 10;
  const x2 = 50;
  const x3 = x1 + w;
  const x4 = x2 + w;

  const y1 = 10;
  const y2 = 50;
  const y3 = 90;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      viewBox="0 0 200 100"
      {...props}
    >
      <path
        d={`M ${x1},${y1} L ${x2},${y2} L ${x1},${y3} L ${x3},${y3} L ${x4},${y2}, ${x3},${y1} Z`}
        className="stroke-red-500 stroke-[10]"
        transform="translate(-55,0)"
      />
      <path
        d={`M ${x1},${y1} L ${x2},${y2} L ${x1},${y3} L ${x3},${y3} L ${x4},${y2}, ${x3},${y1} Z`}
        className="stroke-red-500 stroke-[10]"
      />
      <path
        d={`M ${x1},${y1} L ${x2},${y2} L ${x1},${y3} L ${x3},${y3} L ${x4},${y2}, ${x3},${y1} Z`}
        className="stroke-red-500 stroke-[10]"
        transform="translate(55,0)"
      />
      <path
        d={`M ${x1},${y1} L ${x2},${y2} L ${x1},${y3} L ${x3},${y3} L ${x4},${y2}, ${x3},${y1} Z`}
        className="stroke-red-500 stroke-[10] fill-red-500"
        transform="translate(110,0)"
      />
      <path
        d={`M ${x1},${y1} L ${x2},${y2} L ${x1},${y3} L ${x3},${y3} L ${x4},${y2}, ${x3},${y1} Z`}
        className="stroke-red-500 stroke-[10] fill-red-500"
        transform="translate(165,0)"
      />
    </svg>
  );
};

export const SlowChevron = (props: SVGProps<SVGSVGElement>) => {
  const w = 35;
  const x1 = 10;
  const x2 = 30;
  const x3 = x1 + w;
  const x4 = x2 + w;

  const y1 = 10;
  const y2 = 50;
  const y3 = 90;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      viewBox="0 0 200 100"
      {...props}
    >
      <path
        d={`M ${x1},${y1} L ${x2},${y2} L ${x1},${y3} L ${x3},${y3} L ${x4},${y2}, ${x3},${y1} Z`}
        className="fill-sky-400 stroke-sky-400 stroke-[10]"
        transform="translate(-60,0)"
      />
      <path
        d={`M ${x1},${y1} L ${x2},${y2} L ${x1},${y3} L ${x3},${y3} L ${x4},${y2}, ${x3},${y1} Z`}
        className="fill-sky-400 stroke-sky-400 stroke-[10]"
      />
      <path
        d={`M ${x1},${y1} L ${x2},${y2} L ${x1},${y3} L ${x3},${y3} L ${x4},${y2}, ${x3},${y1} Z`}
        className="stroke-sky-400 stroke-[10]"
        transform="translate(60,0)"
      />
      <path
        d={`M ${x1},${y1} L ${x2},${y2} L ${x1},${y3} L ${x3},${y3} L ${x4},${y2}, ${x3},${y1} Z`}
        className="stroke-sky-400 stroke-[10]"
        transform="translate(120,0)"
      />
      <path
        d={`M ${x1},${y1} L ${x2},${y2} L ${x1},${y3} L ${x3},${y3} L ${x4},${y2}, ${x3},${y1} Z`}
        className="stroke-sky-400 stroke-[10]"
        transform="translate(180,0)"
      />
    </svg>
  );
};
