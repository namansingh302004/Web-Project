import React from "react";
import { useTheme } from "./ThemeContext";

const ToggleThemeButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      style={{
        backgroundColor: theme === "dark" ? "#555" : "#ddd",
        color: theme === "dark" ? "#fff" : "#000",
        padding: "10px 20px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
      }}
    >
      Switch to {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
};

export default ToggleThemeButton;
