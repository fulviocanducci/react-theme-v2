import React, { createContext, useEffect, useState, useCallback } from "react";
import { light, dark } from "./../styles";

export const IndexContext = createContext();

const IndexProvider = ({ children }) => {
  const key = "@theme";
  const [theme, setTheme] = useState(() => {
    const themeStorage = window.localStorage.getItem(key);
    return themeStorage ? JSON.parse(themeStorage) : light;
  });
  const toogleTheme = useCallback(() => {
    setTheme(theme.title === "light" ? dark : light);
  }, [theme]);
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(theme));
  }, [theme]);
  return (
    <IndexContext.Provider theme={theme} value={{ theme, toogleTheme }}>
      {children}
    </IndexContext.Provider>
  );
};

export default IndexProvider;
