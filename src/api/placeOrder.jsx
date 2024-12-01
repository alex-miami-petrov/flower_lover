const placeOrder = async (item, quantity) => {
  const orderData = {
    productId: item.id,
    name: item.name,
    quantity: quantity,
    totalPrice: item.price * quantity, 

  const response = await fetch("/api/place-order", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(orderData),
  });

  if (!response.ok) {
    throw new Error("Не вдалося оформити замовлення");
  }

  const result = await response.json();
  console.log("Замовлення успішно оформлено", result);
};
