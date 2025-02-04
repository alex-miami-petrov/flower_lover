import React, { useEffect } from "react";

import s from "./Hits.module.css";
import h1 from "../../img/Hits/h1.png";
import h2 from "../../img/Hits/h2.png";
import h3 from "../../img/Hits/h3.png";
import h4 from "../../img/Hits/h4.png";
import h5 from "../../img/Hits/h5.png";
import h6 from "../../img/Hits/h6.png";

import HitsMob from "./HitsMob.jsx";

import { useState } from "react";
import HitsDesktop from "./HitsDesktop.jsx";

const products = [
  {
    id: 1,
    name: "Мінібукет 1400-2",
    description: "Хрезантема - 6  шт. (50 см.), Троянда міні  - 4 шт.",
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
    description: "Класичний букет",
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
    description: "51 троянда",
    price: 1000,
    oldPrice: null,
    isOnSale: false,
    isNew: false,
    hasWater: false,
    image: h3,
  },
  {
    id: 4,
    name: "Мінібукет 1400-3",
    description: "Мінібукет",
    price: 680,
    oldPrice: null,
    isOnSale: false,
    isNew: false,
    hasWater: false,
    image: h4,
  },
  {
    id: 5,
    name: "«Бархатний сезон»",
    description: "Бархатний сезон",
    price: 450,
    oldPrice: null,
    isOnSale: false,
    isNew: true,
    hasWater: false,
    image: h5,
  },
  {
    id: 6,
    name: "Нобіліс",
    description: "Нобіліс",
    price: 68,
    oldPrice: null,
    isOnSale: false,
    isNew: false,
    hasWater: true,
    image: h6,
  },
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
        <HitsMob products={products} />
      )}
    </div>
  );
};

export default Hits;

// import React, { useEffect, useState } from "react";
// import { fetchData } from "../../api/api.js";

// import s from "./hits.module.css";
// import HitsMob from "./hitsMob.jsx";
// import HitsDesktop from "./hitsDesktop.jsx";

// const Hits = () => {
//   const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1440);
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const loadProducts = async () => {
//       try {
//         const data = await fetchData();
//         setProducts(data);
//       } catch (err) {
//         setError("Не вдалося завантажити продукти");
//       } finally {
//         setLoading(false);
//       }
//     };

//     loadProducts();
//   }, []);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsDesktop(window.innerWidth >= 1440);
//     };
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   if (loading) {
//     return <div>Завантаження...</div>;
//   }

//   if (error) {
//     return <div>Помилка: {error}</div>;
//   }

//   return (
//     <div>
//       <h2 className={s.hitsTitle}>Хіт продажів</h2>
//       {isDesktop ? (
//         <HitsDesktop products={products} />
//       ) : (
//         <HitsMob products={products} />
//       )}
//     </div>
//   );
// };

// export default Hits;
