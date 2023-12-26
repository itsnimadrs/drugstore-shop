export const ProductItem = ({ product }) => {
  const { id, name, price } = product;

  return (
    <div>
      <h3>{name}</h3>
      <p>{price} تومان</p>
    </div>
  );
};
