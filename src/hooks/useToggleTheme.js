import { useState, useEffect } from "react";

export const useToggleTheme = () => {
  const [isDarkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("darkTheme")) setDarkTheme(true);
  }, []);

  const toggleTheme = () => {
    setDarkTheme(!isDarkTheme);
    localStorage.setItem("darkTheme", !isDarkTheme ? true : "");
  };
  return { toggleTheme, isDarkTheme };
};
