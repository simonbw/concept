import React, { SVGProps } from "react";
import { classNames } from "../../utils/classNames";

export const SteelIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <defs>
      <linearGradient
        className={classNames(
          "[--gradientLightColor:theme(colors.gray.200)]",
          "[--gradientMediumColor:theme(colors.gray.300)]",
          "[--gradientDarkColor:theme(colors.gray.400)]"
        )}
        // gradientUnits="userSpaceOnUse"
        id="steelGradientTop"
        x1="0%"
        y1="0%"
        x2="0%"
        y2="100%"
      >
        <stop offset="0%" stopColor="var(--gradientLightColor)" />
        <stop offset="40%" stopColor="var(--gradientDarkColor)" />
        <stop offset="70%" stopColor="var(--gradientMediumColor)" />
        <stop offset="100%" stopColor="var(--gradientDarkColor)" />
      </linearGradient>
      <linearGradient
        className={classNames(
          "[--gradientLightColor:theme(colors.gray.300)]",
          "[--gradientDarkColor:theme(colors.gray.400)]",
          "[--gradientDarklightColor:theme(colors.gray.500)]"
        )}
        id="steelGradientMiddle"
        x1="0%"
        y1="0%"
        x2="100%"
        y2="0%"
      >
        <stop offset="0%" stopColor="var(--gradientLightColor)" />
        <stop offset="40%" stopColor="var(--gradientDarkColor)" />
        <stop offset="60%" stopColor="var(--gradientDarkColor)" />
        <stop offset="100%" stopColor="var(--gradientLightColor)" />
      </linearGradient>
      <linearGradient
        className={classNames(
          "[--gradientLightColor:theme(colors.gray.300)]",
          "[--gradientDarkColor:theme(colors.gray.400)]",
          "[--gradientDarklightColor:theme(colors.gray.500)]"
        )}
        id="steelGradientBottom"
        x1="0%"
        y1="0%"
        x2="0%"
        y2="100%"
      >
        <stop offset="0%" stopColor="var(--gradientLightColor)" />
        <stop offset="40%" stopColor="var(--gradientDarkColor)" />
        <stop offset="60%" stopColor="var(--gradientDarkColor)" />
        <stop offset="100%" stopColor="var(--gradientLightColor)" />
      </linearGradient>

      <linearGradient
        className={classNames(
          "[--gradientLightColor:theme(colors.gray.400)]",
          "[--gradientMediumColor:theme(colors.gray.500)]",
          "[--gradientDarkColor:theme(colors.gray.600)]"
        )}
        id="steelGradientStroke"
        x1="0%"
        y1="0%"
        x2="0%"
        y2="100%"
      >
        <stop offset="0%" stopColor="var(--gradientLightColor)" />
        <stop offset="40%" stopColor="var(--gradientDarkColor)" />
        <stop offset="70%" stopColor="var(--gradientMediumColor)" />
        <stop offset="100%" stopColor="var(--gradientDarkColor)" />
      </linearGradient>
    </defs>
    <path
      d={[
        "M39.557 19 323.44 273h149.003L188.56 19H39.558z",
        "M25 30.13v25.847L311 311.87v-25.846L25 30.13zm64 107.263v34.584L375 427.87v-84.843l-64-13.002L89 137.393z",
        "M77.555 185.89l-42.9 10.723 287.79 257.498 42.9-10.723L77.556 185.89z",
        "M25 212.13v23.847L311 491.87v-23.847L25 212.13z",
        "M329 291v21.973l64 16v126.054l-64 16V493h158v-21.973l-64-16V328.973l64-16V291H329zm112 135.865v14.108l21.88 5.47L441 426.865z",
      ].join(" ")}
      fill="none"
      stroke="url(#steelGradientStroke)"
      strokeWidth={32}
      strokeLinejoin="round"
      strokeLinecap="round"
    />
    <path
      d="M39.557 19 323.44 273h149.003L188.56 19H39.558z"
      fill="url(#steelGradientTop)"
      stroke="none"
    />
    <path
      d="M25 30.13v25.847L311 311.87v-25.846L25 30.13zm64 107.263v34.584L375 427.87v-84.843l-64-13.002L89 137.393z"
      fill="url(#steelGradientMiddle)"
      stroke="none"
    />
    <path
      d="M77.555 185.89l-42.9 10.723 287.79 257.498 42.9-10.723L77.556 185.89z"
      fill="url(#steelGradientMiddle)"
      stroke="none"
    />
    <path
      d="M25 212.13v23.847L311 491.87v-23.847L25 212.13z"
      fill="url(#steelGradientMiddle)"
      stroke="none"
    />
    <path
      d="M329 291v21.973l64 16v126.054l-64 16V493h158v-21.973l-64-16V328.973l64-16V291H329zm112 135.865v14.108l21.88 5.47L441 426.865z"
      fill="url(#steelGradientBottom)"
      stroke="none"
    />
  </svg>
);
