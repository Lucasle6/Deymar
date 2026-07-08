import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";

/*
  HashRouter (not BrowserRouter) on purpose: GitHub Pages has no SPA
  fallback, so a refresh on /sitio would 404. Hash routes
  (/Deymar/#/sitio) are served by the same index.html every time.
*/
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>,
);
