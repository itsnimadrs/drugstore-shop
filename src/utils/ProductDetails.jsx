import React from "react";
import { useState, useEffect } from "react";

 const ProductDetails = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    setQuantity(1);
  }, [product]);

  const handleQuantityChange = (event) => {
    const value = parseInt(event.target.value);
    if (value < 1) {
      setQuantity(1);
    } else if (value > product.inventory) {
      setQuantity(product.inventory);
    } else {
      setQuantity(value);
    }
  };
  return (
    <div className="w-full flex justify-center">
      <h1>{product.name}</h1>

      {product.inventory > 0 ? (
        <>
          <img src={product.image} alt={product.name} />

          <div dangerouslySetInnerHTML={{ __html: product.description }} />

          <input
            type="number"
            value={quantity}
            onChange={handleQuantityChange}
          />

          <button disabled={product.inventory === 0}>افزودن به سبد خرید</button>
        </>
      ) : (
        <p>موجود نمی باشد</p>
      )}
    </div>
  );
};

export default ProductDetails;
