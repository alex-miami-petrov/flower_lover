import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Header from "./Components/Header/Header";

import "./App.css";
import MobMenu from "./Components/MobMenu/MobMenu";
import Hero from "./Components/Hero/Hero";
import Catalogue from "./Components/Catalogue/Catalogue";
import AboutUs from "./Components/AboutUs/AboutUs.jsx";
import Order from "./Components/Order/Order.jsx";
import Clients from "./Components/Clients/Clients.jsx";
import Footer from "./Components/Footer/Footer.jsx";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <Header toggleMenu={toggleMenu} />
      {isMenuOpen && <MobMenu closeMenu={toggleMenu} />}
      <Hero />
      <Catalogue />
      <AboutUs />
      <Order />
      <Clients />
      <Footer />
    </>
  );
}

export default App;
