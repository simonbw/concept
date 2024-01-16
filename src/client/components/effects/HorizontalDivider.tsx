import React from "react";
import { classNames } from "../../utils/classNames";
import { SlideIn } from "./SlideIn";

export const HorizontalDivider: React.FC<{
  variant?: "normal" | "dashed" | "double";
}> = ({ variant = "normal" }) => {
  return (
    <SlideIn direction="left-to-right" duration={150}>
      <hr
        className={classNames(
          variant === "double" && "border-double border-t-4",
          variant === "dashed" && "border-dashed",
        )}
      />
    </SlideIn>
  );
};

export const VerticalDivider: React.FC<{
  variant?: "normal" | "dashed" | "double";
}> = ({ variant = "normal" }) => {
  return (
    <SlideIn direction="top-to-bottom" duration={200}>
      <hr
        className={classNames(
          "h-full w-4 border-y-0 border-l m-0 p-0",
          variant === "double" && "border-double border-l-4",
          variant === "dashed" && "border-dashed",
        )}
      />
    </SlideIn>
  );
};
