import React, { useState, useEffect } from "react";
import axios from "axios";

// Компонент картки товару
const HitsCard = ({ productId }) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Отримуємо дані про товар з API
    axios
      .get(`http://localhost:5000/product/${productId}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
      });
  }, [productId]);

  // Якщо товар ще не завантажений
  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-card">
      <h2 className="product-name">{product.name}</h2>
      <p className="product-price">{product.price}</p>
      <p className="product-id">ID: {product._id}</p>
    </div>
  );
};

export default HitsCard;
