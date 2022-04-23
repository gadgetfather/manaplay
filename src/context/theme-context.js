import { createContext, useContext, useEffect } from "react";
import useLocalStorage from "use-local-storage";
const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const defaultDark = window.matchMedia(
    "(prefers-color-scheme: light)"
  ).matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );
  useEffect(() => {
    if (theme === "dark") {
      document.body.style.backgroundColor = "#222831";
    }
  }, []);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => useContext(ThemeContext);

export { useTheme, ThemeProvider };
