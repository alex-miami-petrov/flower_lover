import React from "react";
import ProductCard from "../ProductCard/productCard.jsx";
import s from "./hitsDesktop.module.css";

const HitsDesktop = ({ products }) => {
  return (
    <>
      <div className={s.productGrid}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <button className={s.hitsDeskBtn}>Дивитись всі</button>
    </>
  );
};

export default HitsDesktop;
