import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PlanosCarousel from "./components/PlanosCarousel";
import Footer from "./components/Footer";
import "./index.css";
import Icons from "./components/Icons"
import Diferenciais from "./components/diferenciais";

import AboutUs from "./AboutUs";
import InfoSection from "./components/InfoSection";
import CookieConsent from "./components/Accept.Cookies";


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <InfoSection />
      <Diferenciais />
      <PlanosCarousel />
      <AboutUs />
      <Icons />
      <Footer />
      <CookieConsent />
    </>
  );
}

export default App;
