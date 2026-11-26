import { useEffect, type ReactNode } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  LandingPage,
  DocsAuthGate,
  PrivacyPolicyPage,
  TermsOfUsePage,
  NotFoundPage,
} from "./pages";
import LoadingScreen from "./components/LoadingScreen";
import { useAppConstants } from "./hooks/useAppConstants";
import { useTheme } from "./hooks/useTheme";
import "./index.css";

function AppContent() {
  const { constants, isLoading, themeColors } = useAppConstants();

  // Apply theme colors when data is loaded
  useTheme(themeColors, isLoading);

  useEffect(() => {
    if (!isLoading) {
      document.title = constants.nameEmpresa;

      // Update favicon dynamically from linkIcon
      if (constants.linkIcon) {
        // Remove existing favicon
        const existingLink = document.querySelector("link[rel='icon']");
        if (existingLink) {
          existingLink.remove();
        }

        // Create new favicon link
        const link = document.createElement("link");
        link.rel = "icon";
        link.type = "image/png";
        link.href = constants.linkIcon;
        document.head.appendChild(link);
      }
    }
  }, [constants.nameEmpresa, constants.linkIcon, isLoading]);

  // A landing ('/') é estática e não depende da API da empresa — não fica
  // atrás do LoadingScreen. As demais páginas (que usam os dados da empresa)
  // continuam gated enquanto `useAppConstants` carrega.
  const gated = (element: ReactNode) =>
    isLoading ? <LoadingScreen isLoading={isLoading} /> : element;

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/docs" element={<DocsAuthGate />} />
      <Route path="/privacidade" element={gated(<PrivacyPolicyPage />)} />
      <Route path="/termos" element={gated(<TermsOfUsePage />)} />
      <Route path="*" element={gated(<NotFoundPage />)} />
    </Routes>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
