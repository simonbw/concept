import { RoomNumber } from "../models/RoomNumber";

export function roomName(roomNumber: RoomNumber): string {
  switch (roomNumber) {
    case 1:
      return "Alpha";
    case 2:
      return "Omega";
  }
}
