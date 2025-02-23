import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AuthPage from "./pages/auth";
import "./index.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthPage />
  </StrictMode>
);
