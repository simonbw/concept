import React from "react";
import { classNames } from "../../utils/classNames";
import { useSettings } from "../SettingsContext";

export const AllTooltipsButton: React.FC = () => {
  const { tooltipsOpen, updateSettings } = useSettings();
  return (
    <button
      className="settings-button"
      onClick={() =>
        updateSettings((settings) => ({
          ...settings,
          tooltipsOpen: !settings.tooltipsOpen,
        }))
      }
    >
      <span
        className={classNames(
          "transition-transform duration-300",
          tooltipsOpen && "rotate-180"
        )}
      >
        {"T"}
      </span>
    </button>
  );
};
