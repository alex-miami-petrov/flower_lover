import React from "react";
import s from "./productCard.module.css";

const ProductCard = ({ product }) => {
  return (
    <div className={s.productCard}>
      <div className={s.productImage}>
        <img src={product.image} alt={product.name} />
        {product.isNew && <span className={s.badgeNew}>Новинка</span>}
        {product.isOnSale && <span className={s.badgeSale}>Акція</span>}
        {product.hasWater && <span className={s.badgeWater}>З водою</span>}
      </div>

      <div className={s.productPricing}>
        {product.isOnSale ? (
          <>
            <span className={s.currentPrice}>{product.price} ₴</span>
            <span className={s.oldPrice}>{product.oldPrice} ₴</span>
          </>
        ) : (
          <span className={s.currentPrice}>{product.price} ₴</span>
        )}
      </div>

      <div className={s.productInfo}>
        <h3 className={s.hitsName}>{product.name}</h3>
        {/* <p>{product.description}</p> */}
      </div>
    </div>
  );
};

export default ProductCard;
