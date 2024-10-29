import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Header from "./Components/Header/Header";

import "./App.css";
import MobMenu from "./Components/MobMenu/MobMenu";
import Hero from "./Components/Hero/Hero";
import Catalogue from "./Components/Catalogue/Catalogue";

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
    </>
  );
}

export default App;
