import React from "react";
import { classNames } from "../../utils/classNames";
import { SlideIn } from "../effects/SlideIn";

export const ScrollBar: React.FC<{
  bar: [number, number];
  range: [number, number];
}> = ({ bar: [barStart, barEnd], range: [rangeStart, rangeEnd] }) => {
  return (
    <SlideIn
      direction="top-to-bottom"
      duration={150}
      className={classNames(
        "w-6 flex-shrink-0 -my-1",
        "flex flex-col border-x justify-stretch items-stretch relative",
      )}
    >
      <div
        className="transition-all ease-linear duration-[25ms]"
        style={{ flexGrow: barStart - rangeStart }}
      />
      <div
        className="bg-green-500 transition-all ease-linear duration-[25ms]"
        style={{ flexGrow: barEnd - barStart }}
      />
      <div
        className="transition-all ease-linear duration-[25ms]"
        style={{ flexGrow: rangeEnd - barEnd }}
      />

      <span className="absolute top-1 w-full text-center">↑</span>
      <span className="absolute bottom-1 w-full text-center">↓</span>
    </SlideIn>
  );
};
