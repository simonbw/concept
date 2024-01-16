import React, { ReactNode } from "react";
import { routes } from "../../../common/routes";
import { useKeyDown } from "../../hooks/useKeyDown";
import { Sequencer } from "../effects/Sequencer";
import { RoomLayout } from "../room/RoomLayout";

export const PlayTestWrapper: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  useKeyDown((event) => {
    if (event.code === "Escape") {
      window.location.href = routes.playtest.index;
    }
  });

  return (
    <RoomLayout>
      <Sequencer>{children}</Sequencer>
    </RoomLayout>
  );
};
