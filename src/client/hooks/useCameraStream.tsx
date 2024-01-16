import Peer from "peerjs";
import { useEffect, useState } from "react";
import { RoomNumber } from "../../common/models/RoomNumber";
import { useGameStateRef } from "./useGameState";

export function useCameraStream(cameraId: RoomNumber): MediaStream | undefined {
  const gameStateRef = useGameStateRef();

  const [receivingPeer] = useState(() => new Peer());
  const [peerOpen, setPeerOpen] = useState(false);
  const [stream, setStream] = useState<MediaStream | undefined>(undefined);

  const broadcasterPeerId =
    gameStateRef.current?.signaling[`room${cameraId}PeerId`];

  useEffect(() => {
    receivingPeer.on("open", () => setPeerOpen(true));
    receivingPeer.on("error", (error) => {
      console.warn("surveillance peer peer error", error);
    });
    receivingPeer.on("disconnected", () => {
      console.log("surveillance peer disconnected");
      receivingPeer.reconnect();
    });
  }, [receivingPeer]);

  useEffect(() => {
    if (receivingPeer.open && broadcasterPeerId) {
      let cleanup = () => {};

      receivingPeer.connect(broadcasterPeerId);

      receivingPeer.on("call", (call) => {
        call.answer();
        call.on("stream", (remoteStream) => {
          setStream(remoteStream);
        });

        cleanup = () => call.close();
      });

      return cleanup;
    } else {
      setStream(undefined);
    }
  }, [broadcasterPeerId, peerOpen]);

  return stream;
}
