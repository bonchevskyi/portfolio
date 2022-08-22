import React, { createContext, useState } from "react";

import { themeData } from "../data/themeData";

export const ThemeContext = createContext();

function ThemeContextProvider(props) {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("themeRB");
    const initialValue = JSON.parse(saved);
    if (initialValue === "dark") {
      return themeData.theme[0];
    } else if (initialValue === "light") {
      return themeData.theme[1];
    } else {
      return themeData.theme[0];
    }
  });

  const [drawerOpen, setDrawerOpen] = useState(false);

  const setHandleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const value = { theme, setTheme, drawerOpen, setHandleDrawer };
  return (
    <ThemeContext.Provider value={value}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export default ThemeContextProvider;
