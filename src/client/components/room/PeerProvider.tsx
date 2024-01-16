import Peer from "peerjs";
import React, { createContext, useEffect, useState } from "react";
import { useMediaStream } from "../../hooks/useMediaStream";
import { useRoomNumber } from "../../hooks/useRoomNumber";
import { trpcClient } from "../../trpc/trpcClient";

const context = createContext<{
  peer?: Peer;
  localStream?: MediaStream;
}>({});

// Creates a stream and responds to connections with a call
export const PeerProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const roomNumber = useRoomNumber();
  const [peer, setPeer] = useState<Peer>();
  const localStream = useMediaStream();

  useEffect(() => {
    if (localStream) {
      // TODO: Deal with local stream changing from one defined value to another defined value
      const peer = new Peer();
      setPeer(peer);

      peer.on("open", (peerId) => {
        trpcClient.peering.setPeerId.mutate({ roomNumber, peerId });

        peer.on("connection", (connection) => {
          peer.call(connection.peer, localStream);
        });
      });

      peer.on("error", (error) => {
        console.warn("peer error", error);
      });

      return () => peer.destroy();
    }
  }, [localStream]);

  return (
    <context.Provider value={{ peer, localStream }}>
      {children}
    </context.Provider>
  );
};
