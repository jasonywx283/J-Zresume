// src/App.jsx
import React, { useContext } from "react";
import Resume from "./Resume";        // Make sure filename matches exactly
import Resume2 from "./Resume2";      // Rename Projects to Resume2 for consistency
import { Box, IconButton } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useTheme } from "@mui/material/styles";
import { ColorModeContext } from "./ThemeContext";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";

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

      {/* Routing */}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/resume2" element={<Resume2 />} />
        {/* Add a default route if needed */}
        <Route path="*" element={<Home />} />
      </Routes>
    </Box>
  );
}

export default App;