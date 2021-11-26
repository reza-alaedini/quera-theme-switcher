import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

const ThemeContextSetState = createContext();

const ThemeProvider = ({ children }) => {
  const [light, setLight] = useState("LIGHT");

  return (
    <>
      <ThemeContext.Provider value={light}>
        <ThemeContextSetState.Provider value={setLight}>
          {children}
        </ThemeContextSetState.Provider>
      </ThemeContext.Provider>
    </>
  );
};

const useContextProvider = () => {
  return useContext(ThemeContext);
};

const useContextSetState = () => {
  return useContext(ThemeContextSetState);
};

export { useContextProvider, useContextSetState };
export default ThemeProvider;
