import React, { useState } from "react";
import s from "./ProductCard.module.css";
import icons from "../../img/icons.svg";
import OrderMenu from "./OrderMenu.jsx";

const ProductCard = ({ product }) => {
  const [productCount, setProductCount] = useState(product.count || 1);

  const decreaseProductCount = (item) => {
    if (productCount > 1) {
      setProductCount(productCount - 1);
    }
  };

  const increaseProductCount = (item) => {
    setProductCount(productCount + 1);
  };

  const handleOrder = (item, quantity) => {
    console.log(`Замовлення на ${quantity} шт. товару: ${item.name}`);
    //  додати логіку для відправки замовлення на сервер чи обробки
  };

  return (
    <div className={s.productCard}>
      <div className={s.productImage}>
        <img src={product.image} alt={product.name} />
        {product.isNew && (
          <span className={s.badgeNew}>
            <svg className={s.newIcon} width="15">
              <use href={`${icons}#icon-new`} />
            </svg>
            Новинка
          </span>
        )}
        {product.isOnSale && <span className={s.badgeSale}>Акція</span>}
        {product.hasWater && (
          <span className={s.badgeWater}>
            <svg className={s.waterIcon} width="11">
              <use href={`${icons}#icon-water`} />
            </svg>
            З водою
          </span>
        )}
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
      </div>

      {/* Додатковий блок, який з'являється при hover */}
      <div className={s.hoverContent}>
        <p className={s.productDescription}>{product.description}</p>
        <OrderMenu
          item={product}
          onDecrease={decreaseProductCount}
          onIncrease={increaseProductCount}
          onOrder={handleOrder}
        />
      </div>
    </div>
  );
};

export default ProductCard;
