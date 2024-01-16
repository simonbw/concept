import React, { HTMLProps, useCallback } from "react";
import { beep } from "../../../common/utils/beep";
import { useKeyDown } from "../../hooks/useKeyDown";
import { classNames } from "../../utils/classNames";
import { TypedText } from "../effects/TypedText";
import { useRoomScreen } from "./ScreenRouter";
import { HorizontalDivider } from "../effects/HorizontalDivider";

export const RoomScreen: React.FC<HTMLProps<HTMLDivElement>> = ({
  title = "",
  children,
  className,
  ...rest
}) => {
  const { setScreen } = useRoomScreen();
  useKeyDown(
    useCallback((event: KeyboardEvent) => {
      if (event.code === "Escape") {
        setScreen("main-menu");
        beep({ pitch: 0, duration: 70 });
      }
    }, []),
  );

  return (
    <div className={classNames("room-screen", className)} {...rest}>
      <div className="grid grid-cols-3">
        <span>
          <TypedText>{`< Back [ESC]`}</TypedText>
        </span>
        <span className="text-center">
          <TypedText initialText={toSpaces(title)} reverse>
            {title}
          </TypedText>
        </span>
      </div>
      <HorizontalDivider />
      {children}
    </div>
  );
};

function toSpaces(s: string): string {
  return [...s].map(() => "\xa0").join("");
}
