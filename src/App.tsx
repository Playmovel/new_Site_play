import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PlanosCarousel from "./components/PlanosCarousel";
import Footer from "./components/Footer";
import "./index.css";
import Icons from "./components/Icons"
import Diferenciais from "./components/diferenciais";
import AboutUs from "./components/AboutUs";
import InfoSection from "./components/InfoSection";
import CookieConsent from "./components/Accept.Cookies";
import { constants } from "./constants/contants";


function App() {
  useEffect(() => {
    document.title = constants.nameEmpresa;
  }, []);

  return (
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
  );
}

export default App;
