import React, { createContext, ReactNode, useContext } from "react";

interface Settings {
  titleCollapsed: boolean;
  tooltipsOpen: boolean;
  muted: boolean;
}

interface SettingsContextValue extends Settings {
  updateSettings: (updater: (oldSettings: Settings) => Settings) => void;
}

const SettingsContext = createContext<SettingsContextValue>({
  tooltipsOpen: false,
  titleCollapsed: false,
  muted: false,
  updateSettings: () => null,
});

export const SettingsProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [settings, updateSettings] = React.useState<Settings>({
    tooltipsOpen: false,
    titleCollapsed: false,
    muted: false,
  });

  return (
    <SettingsContext.Provider
      value={{ ...settings, updateSettings: updateSettings }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export function useSettings() {
  return useContext(SettingsContext);
}
