import React, { useState } from "react";
import ProductCard from "../ProductCard/ProductCard.jsx";
import s from "./HitsDesktop.module.css";

const HitsDesktop = ({ products }) => {
  const [showAll, setShowAll] = useState(false);

  const displayedProducts = showAll ? products : products.slice(0, 3);
  return (
    <>
      <div className={showAll ? s.productGridExpanded : s.productGrid}>
        {displayedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      {!showAll && (
        <button className={s.hitsDeskBtn} onClick={() => setShowAll(true)}>
          Дивитись всі
        </button>
      )}
    </>
  );
};

export default HitsDesktop;

// import React, { useState } from "react";
// import ProductCard from "../ProductCard/productCard.jsx";
// import s from "./hitsDesktop.module.css";

// const HitsDesktop = ({ products }) => {
//   const [showAll, setShowAll] = useState(false);

//   const displayedProducts = showAll ? products : products.slice(0, 3);
//   return (
//     <>
//       <div className={showAll ? s.productGridExpanded : s.productGrid}>
//         {displayedProducts.map((product) => (
//           <ProductCard key={product._id} product={product} />
//         ))}
//       </div>
//       {!showAll && (
//         <button className={s.hitsDeskBtn} onClick={() => setShowAll(true)}>
//           Дивитись всі
//         </button>
//       )}
//     </>
//   );
// };

// export default HitsDesktop;
