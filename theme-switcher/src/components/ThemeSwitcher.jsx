import React from "react";
import { THEME_TYPE } from "../constants";
import {
  useContextProvider,
  useContextSetState,
} from "../providers/ThemeProvider";

const ThemeSwitcher = () => {
  // No need to change *return* part
  // You have to set themeMode based on context

  const themeMode = useContextProvider();
  const setLight = useContextSetState();

  const handleThemeChange = (e) => {
    e.currentTarget.checked ? setLight("DARK") : setLight("LIGHT");
  };

  return (
    <div className="switch-container">
      <label className="switch">
        <input
          data-testid="theme-changer"
          type="checkbox"
          checked={themeMode === THEME_TYPE.DARK}
          onChange={handleThemeChange}
        />
        <span className="slider round"></span>
      </label>
      <span className="text-color bold">Dark mode</span>
    </div>
  );
};

export default ThemeSwitcher;
