import React, { useState } from "react";
import s from "./productCard.module.css";
import OrderMenu from "./orderMenu.jsx";

const ProductCard = ({ product }) => {
  const [productCount, setProductCount] = useState(product.count || 1);

  // Функції для зменшення та збільшення кількості
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
    // Тут можна додати логіку для відправки замовлення на сервер чи обробки
  };

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
