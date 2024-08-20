const addToCart = (product) => {
  try {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      existingProduct.quantity += product.quantity;
    } else {
      cart.push(product);
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    console.log("Product added to cart successfully");
  } catch (error) {
    console.error("Error:", error);
  }
};

addToCart(product);
