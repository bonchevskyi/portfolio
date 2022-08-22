import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ThemeContextProvider from "./contexts/ThemeContext";
import "./i18nextInit";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ThemeContextProvider>
    <Suspense fallback="loading">
      <App />
    </Suspense>
  </ThemeContextProvider>
);
