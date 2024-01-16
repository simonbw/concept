import React from "react";
import { GameStateProvider } from "../../hooks/useGameState";
import { LoginProvider } from "../../hooks/useLogin";
import { RoomNumberProvider } from "../../hooks/useRoomNumber";
import { Sequencer } from "../effects/Sequencer";
import { HintModal } from "./HintModal";
import { PeerProvider } from "./PeerProvider";
import { RoomClock } from "./RoomClock";
import { RoomLayout } from "./RoomLayout";
import { ScreenRouter } from "./ScreenRouter";
import { SecretKeyChecker } from "./SecretKeyChecker";
import { SecurityPane } from "./SecurityPane";
import { SecretKeyDisplay } from "./SecretKeyDisplay";

export const RoomPage: React.FC<{ room: 1 | 2 }> = ({ room }) => {
  return (
    <GameStateProvider>
      <RoomNumberProvider roomNumber={room}>
        <PeerProvider>
          <Sequencer>
            <LoginProvider>
              <HintModal />
              <RoomLayout>
                <ScreenRouter />
                <SecurityPane />
                {/* <Lockdown /> */}
                <SecretKeyChecker />
                <SecretKeyDisplay />
                <RoomClock />
              </RoomLayout>
            </LoginProvider>
          </Sequencer>
        </PeerProvider>
      </RoomNumberProvider>
    </GameStateProvider>
  );
};
