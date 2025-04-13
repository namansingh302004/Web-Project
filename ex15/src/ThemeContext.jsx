import React, { createContext, useState, useContext } from "react";

// Create the context
const ThemeContext = createContext();

// Custom hook for consuming the theme context
export const useTheme = () => useContext(ThemeContext);

// Provider component
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  // Basic styles for light and dark themes
  const themeStyles = {
    backgroundColor: theme === "dark" ? "#222" : "#fff",
    color: theme === "dark" ? "#fff" : "#000",
    minHeight: "100vh",
    padding: "20px",
    transition: "background-color 0.3s ease",
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div style={themeStyles}>{children}</div>
    </ThemeContext.Provider>
  );
};
