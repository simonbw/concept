import React, { HTMLProps, ReactNode } from "react";
import { classNames } from "../../utils/classNames";

export const RoomLayout: React.FC<
  { children: ReactNode } & HTMLProps<HTMLDivElement>
> = ({ children, className, ...rest }) => {
  return (
    <div
      className={classNames("flex flex-row justify-center", className)}
      {...rest}
    >
      {children}
    </div>
  );
};
