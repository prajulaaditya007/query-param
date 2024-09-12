import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { AppProvider } from "./context/AppProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter basename="/linux">
    <StrictMode>
      <AppProvider>
        {" "}
        {/* Wrap the App with AppProvider */}
        <App />
      </AppProvider>
    </StrictMode>
  </BrowserRouter>
);
