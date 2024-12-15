const placeOrder = async (item, quantity) => {
  try {
    const orderData = {
      productId: item.id,
      name: item.name,
      quantity: quantity,
      totalPrice: item.price * quantity,
    };

    const response = await fetch("/api/place-order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderData),
    });

    if (!response.ok) {
      const errorDetails = await response.text();
      throw new Error(`Не вдалося оформити замовлення: ${errorDetails}`);
    }

    const result = await response.json();
    console.log("Замовлення успішно оформлено", result);

    return result;
  } catch (error) {
    console.error("Помилка оформлення замовлення:", error.message);
  }
};
