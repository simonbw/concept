import React, { SVGProps, useId } from "react";

export const MovieIcon = (props: SVGProps<SVGSVGElement>) => {
  const a = useId();
  const b = useId();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      viewBox="0 0 128 128"
      {...props}
    >
      <defs>
        <linearGradient
          id={a}
          x1={54}
          x2={54}
          y1={34.14}
          y2={30.122}
          gradientTransform="matrix(1 0 0 -1 0 127.89)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#ff1744" />
          <stop offset={1} stopColor="#d50000" />
        </linearGradient>
        <linearGradient
          id={b}
          x1={54}
          x2={54}
          y1={26.14}
          y2={22.12}
          gradientTransform="matrix(1 0 0 -1 0 127.89)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#76ff03" />
          <stop offset={1} stopColor="#64dd17" />
        </linearGradient>
      </defs>
      <path
        fill="#595858"
        d="M32 80 20 64h-8c-4.42 0-8 3.58-8 8v44c0 4.42 3.58 8 8 8h8l12-16h20V80H32z"
      />
      <path fill="#3a3a3a" d="M16 64h3v60h-3z" />
      <path
        fill="#595858"
        d="M121.11 73.45 116 76h-16v12h16l5.11 2.55c1.33.66 2.89-.3 2.89-1.79V75.24c0-1.49-1.56-2.46-2.89-1.79z"
      />
      <path fill="#3f3f3f" d="M64 48h28v28H64z" />
      <path fill="#787676" d="M31.5 80h3v28h-3z" opacity={0.5} />
      <path fill="#3a3a3a" d="M40.75 80h3v28h-3z" />
      <circle cx={48} cy={36} r={32} fill="#504f4f" />
      <circle cx={101} cy={46} r={22} fill="#504f4f" />
      <path
        fill="#504f4f"
        d="M104 120H52c-4.42 0-8-3.58-8-8V76c0-4.42 3.58-8 8-8h52c4.42 0 8 3.58 8 8v36c0 4.42-3.58 8-8 8z"
      />
      <g fill="#3a3a3a">
        <path d="M54 94c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0-2c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zM54 102c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0-2c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z" />
      </g>
      <path
        fill="#504f4f"
        d="M64 107c-1.65 0-3-1.35-3-3v-8c0-1.65 1.35-3 3-3h32c1.65 0 3 1.35 3 3v8c0 1.65-1.35 3-3 3H64z"
      />
      <path
        fill="#3a3a3a"
        d="M96 94.5c.83 0 1.5.67 1.5 1.5v8c0 .83-.67 1.5-1.5 1.5H64c-.83 0-1.5-.67-1.5-1.5v-8c0-.83.67-1.5 1.5-1.5h32m0-3H64c-2.48 0-4.5 2.02-4.5 4.5v8c0 2.48 2.02 4.5 4.5 4.5h32c2.48 0 4.5-2.02 4.5-4.5v-8c0-2.48-2.02-4.5-4.5-4.5z"
      />
      <circle cx={48} cy={36} r={22.5} fill="#504f4f" />
      <path
        fill="#3a3a3a"
        d="M48 15c11.58 0 21 9.42 21 21s-9.42 21-21 21-21-9.42-21-21 9.42-21 21-21m0-3c-13.25 0-24 10.75-24 24s10.75 24 24 24 24-10.75 24-24-10.75-24-24-24z"
      />
      <circle cx={101} cy={46} r={12.5} fill="#504f4f" />
      <path
        fill="#3a3a3a"
        d="M101 35c6.07 0 11 4.93 11 11s-4.93 11-11 11-11-4.93-11-11 4.93-11 11-11m0-3c-7.73 0-14 6.27-14 14s6.27 14 14 14 14-6.27 14-14-6.27-14-14-14z"
      />
      <circle cx={48} cy={36} r={8} fill="#636262" />
      <circle cx={101} cy={46} r={8} fill="#636262" />
      <circle cx={54} cy={96} r={2} fill={`url(#${a})`} />
      <circle cx={54} cy={104} r={2} fill={`url(#${b})`} />
    </svg>
  );
};
