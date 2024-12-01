import React, { useEffect } from "react";

import s from "./hits.module.css";
import h1 from "../../img/Hits/h1.png";
import h2 from "../../img/Hits/h2.png";
import h3 from "../../img/Hits/h3.png";

import HitsSwiper from "../../swiper/hitsSwiper.jsx";
import ProductCard from "../ProductCard/productCard.jsx";
import { useState } from "react";
import HitsDesktop from "./hitsDesktop.jsx";

const products = [
  {
    id: 1,
    name: "Мінібукет 1400-2",
    // description: "Гарний букет",
    price: 500,
    oldPrice: 700,
    isOnSale: true,
    isNew: false,
    hasWater: false,
    image: h1,
  },
  {
    id: 2,
    name: "Мінібукет 1600-6",
    // description: "Класичний букет",
    price: 800,
    oldPrice: null,
    isOnSale: false,
    isNew: false,
    hasWater: false,
    image: h2,
  },
  {
    id: 3,
    name: "Троянда Freedom",
    // description: "51 троянда",
    price: 1000,
    oldPrice: null,
    isOnSale: false,
    isNew: false,
    hasWater: false,
    image: h3,
  },
  // Додайте інші товари
];

const Hits = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1440);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1440);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <h2 className={s.hitsTitle}>Хіт продажів</h2>
      {isDesktop ? (
        <HitsDesktop products={products} />
      ) : (
        <HitsSwiper products={products} />
      )}
    </div>
  );
};

export default Hits;
