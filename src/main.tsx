import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "./context/ThemeContext";
import { BrowserRouter } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react"
import App from "./App.tsx";
import "./i18n";
import "./index.css";

function Root() {
  useEffect(() => {
    // Add preload class for instant rendering, then remove smoothly after load
    document.documentElement.classList.add("preload");
    const handleLoad = () => {
      setTimeout(() => {
        document.documentElement.classList.remove("preload");
      }, 150);
    };
    window.addEventListener("load", handleLoad);
    return () => window.removeEventListener("load", handleLoad);
  }, []);

  return <App />;
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <Root />
        <Analytics />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
);
