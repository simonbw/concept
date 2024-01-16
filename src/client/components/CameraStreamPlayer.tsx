import React, { HTMLProps, useEffect } from "react";
import { RoomNumber } from "../../common/models/RoomNumber";
import { useCameraStream } from "../hooks/useCameraStream";
import { classNames } from "../utils/classNames";

// Plays the stream from the camera in the given room
export const CameraStreamPlayer: React.FC<
  { cameraId: RoomNumber } & HTMLProps<HTMLVideoElement>
> = ({ cameraId, className, ...rest }) => {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const stream = useCameraStream(cameraId);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.srcObject = stream ?? null;
    }
  }, [videoRef.current, stream]);

  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      className={classNames(className, "")}
      {...rest}
    />
  );
};
