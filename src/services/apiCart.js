export function getCart() {
  const cart = JSON.parse(localStorage.getItem("cart"));

  return cart;
}

export function addToCart(product, quantity) {
  const cart = getCart() || [];

  const currentItem = cart.find((item) => item.id === product.id);

  if (currentItem)
    localStorage.setItem(
      "cart",
      JSON.stringify(
        cart.map((item) =>
          item.id === currentItem.id ? { ...item, quantity } : item
        )
      )
    );
  else
    localStorage.setItem(
      "cart",
      JSON.stringify([...cart, { ...product, quantity }])
    );

  return cart;
}

export function UpdateInCart(id, quantity) {
  const cart = getCart();

  localStorage.setItem(
    "cart",
    JSON.stringify(
      cart.map((item) => (item.id === id ? { ...item, quantity } : item))
    )
  );

  return cart;
}

export function deleteFromCart(id) {
  const cart = getCart();

  localStorage.setItem(
    "cart",
    JSON.stringify(cart.filter((item) => item.id !== id))
  );

  return cart;
}

export function deleteAllFromCart() {
  localStorage.setItem("cart", JSON.stringify([]));
}
