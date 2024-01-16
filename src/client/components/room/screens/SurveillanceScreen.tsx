import React from "react";
import { RoomNumber } from "../../../../common/models/RoomNumber";
import { mod } from "../../../../common/utils/mathUtils";
import { roomName } from "../../../../common/utils/nameUtils";
import { useKeyDown } from "../../../hooks/useKeyDown";
import { CameraStreamPlayer } from "../../CameraStreamPlayer";
import { RevealedText } from "../../effects/RevealedText";
import { SlideIn } from "../../effects/SlideIn";
import { TypedText } from "../../effects/TypedText";
import { RoomScreen } from "../RoomScreen";

export const SurveillanceScreen: React.FC = () => {
  const numCameras = 2;
  const [cameraNumber, setCameraNumber] = React.useState(0);

  useKeyDown((event: KeyboardEvent) => {
    switch (event.code) {
      case "ArrowLeft":
        setCameraNumber((cameraNumber) => mod(cameraNumber - 1, numCameras));
        break;
      case "ArrowRight":
        setCameraNumber((cameraNumber) => mod(cameraNumber + 1, numCameras));
        break;
    }
  });

  return (
    <RoomScreen>
      <div className="flex justify-stretch gap-2 w-full items-center">
        <span>
          <RevealedText>[←]</RevealedText>
        </span>
        <SlideIn
          direction="top-to-bottom"
          className="border relative aspect-[4/3] w-full flex-grow overflow-hidden flex"
        >
          <span className="absolute bottom-2 right-2">
            <TypedText>{cameraName(cameraNumber)}</TypedText>
          </span>
          <CameraStreamPlayer
            cameraId={cameraNumber as RoomNumber}
            className="w-full object-contain"
          />
        </SlideIn>
        <span>
          <RevealedText>[→]</RevealedText>
        </span>
      </div>
    </RoomScreen>
  );
};

function cameraName(cameraNumber: number): string {
  switch (cameraNumber) {
    case 0:
      return roomName(1);
    case 1:
      return roomName(2);
    case 2:
      return "Bravo";
    default:
      return `Camera ${cameraNumber}`;
  }
}
