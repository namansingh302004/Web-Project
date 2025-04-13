import React from "react";
import { useTheme } from "./ThemeContext";

const ThemedBox = () => {
  const { theme } = useTheme();

  return (
    <div
      style={{
        marginTop: "30px",
        padding: "20px",
        borderRadius: "10px",
        backgroundColor: theme === "dark" ? "#333" : "#f0f0f0",
        color: theme === "dark" ? "#fff" : "#000",
      }}
    >
      <p>This box updates its style based on the current theme!</p>
    </div>
  );
};

export default ThemedBox;
