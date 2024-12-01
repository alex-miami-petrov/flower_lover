import React, { useState } from "react";
import s from "./orderMenu.module.css";

const OrderMenu = ({ item, onDecrease, onIncrease, onOrder }) => {
  const [quantity, setQuantity] = useState(item.count || 1);

  const handleQuantityChange = (e) => {
    const value = Math.max(1, Number(e.target.value));
    setQuantity(value);
  };

  const handleOrder = () => {
    onOrder(item, quantity);
  };

  return (
    <div className={s.actionArea}>
      <button
        className={s.btn}
        onClick={() => {
          if (quantity > 1) {
            setQuantity(quantity - 1);
            onDecrease(item);
          }
        }}
        disabled={quantity === 1}
      >
        -
      </button>

      <input
        type="number"
        min="1"
        value={quantity}
        onChange={handleQuantityChange}
        className={s.quantityInput}
      />

      <button
        className={s.btn}
        onClick={() => {
          setQuantity(quantity + 1);
          onIncrease(item);
        }}
      >
        +
      </button>

      <button className={s.orderButton} onClick={handleOrder}>
        Замовити
      </button>
    </div>
  );
};

export default OrderMenu;
