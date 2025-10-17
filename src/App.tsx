import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PlanosCarousel from "./components/PlanosCarousel";
import Footer from "./components/Footer";
import "./index.css";
 

import AboutUs from "./conteiner.tsx/AboutUs";
import InfoSection from "./components/InfoSection"; 
import CookieConsent from "./components/Accept.Cookies";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <InfoSection /> 
      <PlanosCarousel/>
      <AboutUs />
      <Footer />
      <CookieConsent/>
    </>
  );
}

export default App;
