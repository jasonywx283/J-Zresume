import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ThemeContextProvider from "./ThemeContext";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ThemeContextProvider>
    <App />
    </ThemeContextProvider>
  </BrowserRouter>
);