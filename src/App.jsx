// src/App.jsx
import React, { useContext } from "react";
import Resume from "./Resume";       // 注意文件名大小写
import Projects from "./Resume2";    // 注意文件名大小写
import { Box, IconButton } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useTheme } from "@mui/material/styles";
import { ColorModeContext } from "./ThemeContext";

function ModeToggle() {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  return (
    <IconButton
      onClick={colorMode.toggleColorMode}
      sx={{
        position: "fixed",
        top: 16,
        right: 16,
        zIndex: 1000,
        backgroundColor: theme.palette.background.paper,
      }}
    >
      {theme.palette.mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
    </IconButton>
  );
}

function App() {
  return (
    <Box
      sx={{
        backgroundColor: (theme) => theme.palette.background.default,
        color: (theme) => theme.palette.text.primary,
        minHeight: "100vh",
      }}
    >
      {/* Day/Night Mode Toggle Button */}
      <ModeToggle />

      {/* 主内容 */}
      <Resume />
      <Projects />
    </Box>
  );
}

export default App;