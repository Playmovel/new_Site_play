import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage, PrivacyPolicyPage, TermsOfUsePage, NotFoundPage } from "./pages";
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

  if (isLoading) {
    return <LoadingScreen isLoading={isLoading} />;
  }

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/privacidade" element={<PrivacyPolicyPage />} />
      <Route path="/termos" element={<TermsOfUsePage />} />
      <Route path="*" element={<NotFoundPage />} />
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
