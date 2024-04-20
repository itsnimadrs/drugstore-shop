import { useQuery } from "@tanstack/react-query";
import { api } from "../../api/http";
import { PATHS, PRODUCTS_URL } from "../../config";
import { useParams, useNavigate } from "react-router-dom";
import { Button, CounterOfProduct, ImageSlider } from "../../components";
import { useEffect, useState } from "react";
import { IoMdArrowDropleft } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { addProductToCart } from "../../features";

const SingleProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const productId = id;

  const cartState = useSelector((state) => state.cart);

  let initCount = 1;
  const handleCount = () => {
    cartState.map((item) => {
      if (item.product._id === productId) {
        initCount = item.count;
      }
      return initCount;
    });
    return initCount;
  };

  const [counterProduct, setcounterProduct] = useState(handleCount());
  useEffect(() => {
    handleCount();
  }, [initCount]);

  const { isPending, error, data } = useQuery({
    queryKey: ["productById", productId],
    queryFn: () =>
      api.get(`${PRODUCTS_URL}/${productId}`).then((res) => res.data),
    keepPreviousData: true,
    staleTime: 60000,
  });
  // **********************************************
  const handleIncremeant = () => {
    if (counterProduct < product.quantity) {
      setcounterProduct((prevCounter) => prevCounter + 1);
    }
  };

  const handleDecrement = () => {
    if (counterProduct > 1) {
      setcounterProduct((prevCounter) => prevCounter - 1);
    }
    // dispatch(decrementProduct());
  };
  // ***************HandleAddToCart*****************//
  const handleAddtoCart = () => {
    dispatch(addProductToCart({ product, counterProduct }));
    navigate(`${PATHS.HOME}${PATHS.BASKET}`);
  };

  // const handleDelete = () => {
  //   dispatch(removeProductFromCart({ product, counterProduct }));
  // };
  // ********************************************
  if (isPending) return "loading...";
  if (error) return error.message;

  const { product } = data.data;

  return (
    <div className="container mx-auto p-11 pt-8 fixed pr-28 flex flex-col gap-y-12 mt-24">
      <div className="flex items-center gap-x-20 pr-12">
        <ImageSlider images={product?.images} />
        <div className="flex flex-col items-start gap-3">
          <div>{product.name}</div>
          <div className="flex items-center gap-2">
            <div>{product.category.name}</div>
            <IoMdArrowDropleft className="text-2xl" />
            <div className="pr-3">{product.subcategory.name}</div>
          </div>
          <div>
            {counterProduct !== 0
              ? (product.price * counterProduct).toLocaleString()
              : product.price.toLocaleString()}{" "}
            تومان
          </div>
          <div className="flex items-center mt-10">
            <CounterOfProduct
              counterProduct={counterProduct}
              onIncrement={handleIncremeant}
              onDecrement={handleDecrement}
            />
            {product.quantity !== 0 ? (
              <Button
                maincolor="bg-green-500"
                title="افزودن به سبد خرید"
                type="submit"
                className="text-lg"
                onClick={handleAddtoCart}
              />
            ) : (
              <span className="text-red-600 font-bold text-xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                اتمام موجودی
              </span>
            )}
          </div>
        </div>
      </div>

      <div
        dangerouslySetInnerHTML={{ __html: product.description }}
        className="modal rounded-3xl p-4 font-bold text-lg  text-white leading-loose drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.2)]"
      ></div>
    </div>
  );
};

export default SingleProduct;
// import parse from 'html-react-parser';
// npm i html-react-parser
