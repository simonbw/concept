import React from "react";
import { useHints } from "../../../hooks/useHints";
import { RoomScreen } from "../RoomScreen";

export const HintScreen: React.FC = () => {
  const hints = useHints();

  return (
    <RoomScreen>
      {hints.map((hint, index) => (
        <div key={index} className="my-4">
          <h2>{hint.time}</h2>
          <p>{hint.text}</p>
        </div>
      ))}
    </RoomScreen>
  );
};
