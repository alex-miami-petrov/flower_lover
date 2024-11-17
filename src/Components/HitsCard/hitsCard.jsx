import { useEffect, useState } from "react";
import axios from "axios";

const HitsCard = ({ productId }) => {
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/product/${productId}`
        );
        setProduct(response.data);
      } catch (err) {
        setError("Error fetching product");
        console.error("Error fetching product:", err);
      }
    };

    fetchProduct();
  }, [productId]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <p>{product.price}</p>
      <h1>{product.name}</h1>
    </div>
  );
};

export default HitsCard;
