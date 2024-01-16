import React, { useContext } from "react";
import { RoomNumber } from "../../common/models/RoomNumber";

const RoomNumberContext = React.createContext<RoomNumber | undefined>(
  undefined,
);

export const RoomNumberProvider: React.FC<
  React.PropsWithChildren<{ roomNumber: RoomNumber }>
> = ({ children, roomNumber }) => {
  return (
    <RoomNumberContext.Provider value={roomNumber}>
      {children}
    </RoomNumberContext.Provider>
  );
};

export const useRoomNumber = (): RoomNumber => {
  const roomNumber = useContext(RoomNumberContext);
  if (roomNumber === undefined) {
    throw new Error("useRoomNumber must be used within a RoomNumberProvider");
  }
  return roomNumber;
};

export function otherRoom(roomNumber: RoomNumber): RoomNumber {
  return roomNumber === 1 ? 2 : 1;
}
