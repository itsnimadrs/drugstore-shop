import { ProductItem } from "./ProductItem";

export const ProductsList = ({ products }) => {
  return (
    <div>
      {products.map((product) => (
        <ProductItem product={product} />
      ))}
    </div>
  );
};
