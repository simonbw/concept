import React from "react";
import { Display } from "react-7-segment-display";
import { RoomNumber } from "../../common/models/RoomNumber";

export const ClockPage: React.FC<{ room: RoomNumber }> = ({ room }) => {
  return (
    <div className="clock">
      {/* @ts-ignore */}
      <Display value={"12"} />
      <span className="clock-colon">:</span>
      {/* @ts-ignore */}
      <Display value={"34"} />
    </div>
  );
};
