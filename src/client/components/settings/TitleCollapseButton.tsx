import React from "react";
import { classNames } from "../../utils/classNames";
import { useSettings } from "../SettingsContext";

export const TitleCollapseButton: React.FC = () => {
  const { titleCollapsed, updateSettings } = useSettings();
  return (
    <button
      className="settings-button"
      onClick={() =>
        updateSettings((settings) => ({
          ...settings,
          titleCollapsed: !settings.titleCollapsed,
        }))
      }
    >
      <span
        className={classNames(
          "transition-transform duration-300",
          titleCollapsed ? "rotate-90" : "-rotate-90"
        )}
      >
        {"⏵"}
      </span>
    </button>
  );
};
