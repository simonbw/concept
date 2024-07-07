import React from "react";
import { classNames } from "../../utils/classNames";
import { useSettings } from "../SettingsContext";
import { mute, unmute } from "../../utils/soundUtils";

export const MuteButton: React.FC = () => {
  const { muted, updateSettings } = useSettings();
  return (
    <button
      className="settings-button"
      onClick={() =>
        updateSettings((settings) => {
          // Actually mute or unmute the audio
          if (settings.muted) {
            unmute();
          } else {
            mute();
          }
          // Update the settings
          // (TODO: There shouldn't be multiple sources of truth for the muted state)
          return {
            ...settings,
            muted: !settings.muted,
          };
        })
      }
    >
      <span className={classNames("transition-transform duration-300")}>
        {muted ? "🔇" : "🔊"}
      </span>
    </button>
  );
};
