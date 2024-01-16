import React from "react";
import { CameraStreamPlayer } from "../CameraStreamPlayer";

export function AdminCameraSection() {
  return (
    <section className="grid grid-cols-2 gap-4">
      <div>
        <h3 className="text-lg font-bold">Room 1</h3>
        <CameraStreamPlayer cameraId={1} />
      </div>
      <div>
        <h3 className="text-lg font-bold">Room 2</h3>
        <CameraStreamPlayer cameraId={2} />
      </div>
    </section>
  );
}
