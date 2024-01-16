import React, { HTMLProps } from "react";
import { Sequenced } from "./Sequenced";

type SlideDirection =
  | "top-to-bottom"
  | "left-to-right"
  | "right-to-left"
  | "bottom-to-top";

export const SlideIn: React.FC<
  {
    direction?: SlideDirection;
    duration?: number;
  } & HTMLProps<HTMLDivElement>
> = ({
  children,
  duration = 500,
  direction = "top-to-bottom",
  style,
  ...rest
}) => (
  <Sequenced duration={duration}>
    {(started) => (
      <div
        style={{
          clipPath: getClipPath(started, direction),
          transitionDuration: `${duration}ms`,
          transitionTimingFunction: "linear",
          transitionProperty: "clip-path",
          ...style,
        }}
        {...rest}
      >
        {children}
      </div>
    )}
  </Sequenced>
);

function getClipPath(started: boolean, direction: SlideDirection): string {
  switch (direction) {
    case "bottom-to-top":
      return started ? "inset(0 0 0 0)" : "inset(100% 0 0 0)";
    case "left-to-right":
      return started ? "inset(0 0 0 0)" : "inset(0 100% 0 0)";
    case "top-to-bottom":
      return started ? "inset(0 0 0 0)" : "inset(0 0 100% 0)";
    case "right-to-left":
      return started ? "inset(0 0 0 0)" : "inset(0 0 0 100%)";
  }
}
