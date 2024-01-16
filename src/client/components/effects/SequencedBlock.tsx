import React, { HTMLProps } from "react";
import { classNames } from "../../utils/classNames";
import { Sequenced } from "./Sequenced";

export const SequencedDiv: React.FC<
  {
    duration?: number;
  } & HTMLProps<HTMLDivElement>
> = ({ children, duration = 20, style = {}, className, ...rest }) => {
  return (
    <Sequenced duration={duration}>
      {(started) => (
        <div
          className={classNames(!started && "invisible", className)}
          {...rest}
        >
          {children}
        </div>
      )}
    </Sequenced>
  );
};
