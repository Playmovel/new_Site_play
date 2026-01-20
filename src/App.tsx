import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PlanosCarousel from "./components/PlanosCarousel";
import Footer from "./components/Footer";
import "./index.css";
import Icons from "./components/Icons";
import Diferenciais from "./components/diferenciais";
import AboutUs from "./components/AboutUs";
import InfoSection from "./components/InfoSection";
import CookieConsent from "./components/Accept.Cookies";
import LoadingScreen from "./components/LoadingScreen";
import { useAppConstants } from "./hooks/useAppConstants";
import { useTheme } from "./hooks/useTheme";

function App() {
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

  return (
    <>
      <LoadingScreen isLoading={isLoading} />
      {!isLoading && (
        <>
          <Navbar />
          <Hero />
          <InfoSection />
          <PlanosCarousel />
          <AboutUs />
          <Icons />
          <Diferenciais />
          <Footer />
          <CookieConsent />
        </>
      )}
    </>
  );
}

export default App;
