import React, { useEffect, useState } from "react";
import { RoomNumber } from "../../../common/models/RoomNumber";
import { mod } from "../../../common/utils/mathUtils";
import { roomName } from "../../../common/utils/nameUtils";
import { useKeyDown } from "../../hooks/useKeyDown";
import { useLogin } from "../../hooks/useLogin";
import { CameraStreamPlayer } from "../CameraStreamPlayer";
import { VerticalDivider } from "../effects/HorizontalDivider";
import { SlideIn } from "../effects/SlideIn";
import { TypedText } from "../effects/TypedText";

export const SecurityPane: React.FC = () => {
  const { currentUserId } = useLogin();
  const [open, setOpen] = useState(false);

  const numCameras = 2;
  const [cameraNumber, setCameraNumber] = React.useState(0);

  useKeyDown((event: KeyboardEvent) => {
    if (event.code === "ArrowLeft" && event.metaKey) {
      setCameraNumber((cameraNumber) => mod(cameraNumber - 1, numCameras));
      event.preventDefault();
    } else if (event.code === "ArrowRight" && event.metaKey) {
      setCameraNumber((cameraNumber) => mod(cameraNumber + 1, numCameras));
      event.preventDefault();
    }
  });

  useKeyDown((event) => {
    if (event.code === "KeyS" && event.metaKey) {
      event.preventDefault();
      setOpen((open) => !open);
    }
  });

  useEffect(() => {
    if (!currentUserId) {
      setOpen(false);
    }
  }, [Boolean(currentUserId)]);

  if (!currentUserId) return null;
  if (!open) return null;

  return (
    <>
      <VerticalDivider />
      <aside className="min-h-screen w-full max-w-lg pt-16">
        <h1>
          <TypedText>Security</TypedText>

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
          <div className="flex justify-between">
            <span>
              <TypedText>[⌘+←]</TypedText>
            </span>
            <span>
              <TypedText reverse>[⌘+→]</TypedText>
            </span>
          </div>
        </h1>
      </aside>
    </>
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
