import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SetUpPage from "./pages/setup";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import './styles/theme.css';

// You'll need to create and import the Dashboard component
import DashboardPage from "./pages/dashboard";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/setup" element={<SetUpPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/" element={<Navigate to="/setup" replace />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
