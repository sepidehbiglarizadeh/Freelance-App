import { createContext, useContext, useEffect, useState } from "react";
import useLocalStorageState from "../hooks/useLocalStorageState";

const DarkModeContext = createContext();

export function DarkModeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useLocalStorageState(
    "isDarkMode",
    window.matchMedia("(prefers-color-scheme: dark)").matches // => false/ true
  );

  const toggleDarkMode = () => setIsDarkMode((prev) => !prev);

  useEffect(() => {
    if (isDarkMode) {
      // document.documentElement, elemente roote html maro return mikone
      document.documentElement.classList.add("dark-mode");
      document.documentElement.classList.remove("light-mode");
    } else {
      document.documentElement.classList.add("light-mode");
      document.documentElement.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

export function useDarkMode() {
  const context = useContext(DarkModeContext);
  if (context === undefined)
    throw new Error("DarkModeContext was used outside of DarkModeProvider");

  return context;
}

// zamani ke shoma tooye systemeton ya browseretono ooye halate dark tanzim mikonid ye media query be in soorat be morogareton ezafe mishe : (prefers-color-scheme: dark) az in media query mitonim tashkhis bedim ke karbar systemesh rooye halate dark hast ya na

// hala ba chi mitonim be in dastresi peyda konim? ba in : window.matchMedia() , hala in matchMedia ye function hast ke be onvan arguman ye mediaQuery ke typesh string hast roo ghabol mikone, ye object ro return mikone ke az ma az tarighe oun object mitonim tashkhis bedim aya karbar in media query ro entekhab karde ya na
