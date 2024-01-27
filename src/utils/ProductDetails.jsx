import { Button } from "flowbite-react";
import { Link, Navigate, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Breadcrumb } from "flowbite-react";
import { BASE_URL } from "../api/api.js";
import Header from "../components/Header/index.jsx";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../hooks.ts";
import { addToCart } from "./shop/reduxCart.jsx";

import { useDispatch, useSelector } from "react-redux";
export default function Pcard() {
  const { id } = useParams();

  const [count, setCount] = useState(1);
  const navigate = useNavigate();
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [productQuantity, setProductQuantity] = useState(1);
  const dispatch = useDispatch();
  // const { quantity } = useSelector((state) => state.product || {});

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`${BASE_URL}/products/${id}`);
        if (!response.ok) {
          throw new Error("Something went wrong");
        }
        const data = await response.json();
        setProduct(data);
        console.log(data?.data?.product);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const incrementQuantity = () => {
    const newQuantity = productQuantity + 1;
    setProductQuantity(newQuantity);
  };
  const decrementQuantity = () => {
    const newQuantity = productQuantity - 1;
    if (newQuantity > 0) {
      setProductQuantity(newQuantity);
    }
  };

  // const handleAddToCart = (product) => {
  //   dispatch(addToCart(product));
  //   navigate("/Cart");
  // };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    navigate("/cart");
  };

  return (
    <>
      <Header />
      {product ? (
        <div className="flex flex-col overflow-x-hidden">
          <span className="flex gap-8 justify-end -mr-[60rem] mb-10 my-10 bg-slate-200 ">
            <div className="h-[20rem] w-[20rem] flex justify-end m-auto bg-slate-300">
              <img
                className=""
                src={`http://localhost:8000/images/products/images/${product?.data?.product?.images[0]}`}
                alt=""
              />
            </div>
          </span>
          <div className="flex justify-center -mr-[17rem] -mt-[20rem] mb-[20rem] text-3xl font-bold">
            {product?.data?.product?.name}
          </div>
          <div className="">
            <Breadcrumb
              className="flex justify-center -mt-[18rem] ml-[16rem]"
              aria-label="Default breadcrumb example"
            >
              <Breadcrumb.Item href="#">
                <div>{product?.data?.product?.category.name}</div>
              </Breadcrumb.Item>
              <Breadcrumb.Item href="#">
                <div>{product?.data?.product?.subcategory?.name}</div>
              </Breadcrumb.Item>
            </Breadcrumb>

            <div className="text-2xl font-bold flex justify-center mt-6 -mr-[22rem] my-4">
              تومان{product?.data?.product?.price}
            </div>
            <form className="max-w-xs block ml-[46rem] ">
              <label
                htmlFor="quantity-input"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white ml-10"
              >
                : انتخاب تعداد
              </label>
              <div className="relative flex items-center max-w-[8rem]">
                <button
                  onClick={() =>
                    setCount((count) => (count > 1 ? count - 1 : count))
                  }
                  value="1"
                  type="button"
                  id="decrement-button"
                  data-input-counter-decrement="quantity-input"
                  className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                >
                  <svg
                    className="w-3 h-3 text-gray-900 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 2"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 1h16"
                    />
                  </svg>
                </button>

                <p
                  type="text"
                  id="quantity-input"
                  data-input-counter
                  data-input-counter-min="1"
                  data-input-counter-max={product?.data?.product?.quantity}
                  aria-describedby="helper-text-explanation"
                  class="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value="1"
                  readOnly="true"
                >
                  {count}
                </p>
                <button
                  onClick={() =>
                    setCount((count) =>
                      count < product?.data?.product?.quantity
                        ? count + 1
                        : count
                    )
                  }
                  type="button"
                  id="increment-button"
                  data-input-counter-increment="quantity-input"
                  className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                >
                  <svg
                    className="w-3 h-3 text-gray-900 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 18"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 1v16M1 9h16"
                    />
                  </svg>
                </button>
              </div>
              <p
                id="helper-text-explanation"
                className="mt-2 text-sm text-gray-500 dark:text-gray-400"
              >
                تعداد محصول را وارد نمایید
              </p>
            </form>

            <Button
              onClick={() => handleAddToCart(product)}
              className="flex justify-center ml-[30rem] -mt-[4rem] w-[10rem]"
              color="blue"
            >
              افزودن به سبد خرید
            </Button>
            <div
              dangerouslySetInnerHTML={{
                __html: product?.data?.product?.description,
              }}
              className="rtl my-20  ml-10 font-semibold"
            ></div>
          </div>
        </div>
      ) : (
        <p>نا موجود...</p>
      )}
      <Link to="/">
        <Button className="flex justify-center m-auto">بازگشت به سایت</Button>
      </Link>
    </>
  );
}

// import { useState, useEffect } from "react";
// // import { useData } from "../Layout/DataContext";
// import axios from "axios";
// import { useParams, useNavigate, Navigate } from "react-router-dom";
// import { useQuery } from "react-query";
// import { useData } from "../context/DataContext";

// export default function Pcard() {

// return (
//     <div className="w-full bg-[#fafafa] flex flex-col border-t border-b gap-8 py-8 border-gray-300">
//       <div className="w-4/5 border border-gray-300 rounded-sm h-[40px] mx-auto text-[13px] flex items-center pr-3">
//         خانه / فروشگاه / {productData.name}
//       </div>
//       <div className="w-4/5 flex mx-auto bg-white gap-2">
//         <div className="border border-gray-900 w-1/2 p-1 border-none">
//           {productData.images.length > 0 && (
//             <img
//               src={`http://localhost:8000/images/products/images/${productData.images[0]}`}
//               className="h-full w-full transition-transform transform hover:scale-110"
//               alt=""
//             />
//           )}
//         </div>
//         <div className="flex flex-col w-1/2 items-start">
//           <h1 className="text-2xl font-bold text-center my-6 text-[17px]">
//             {productData && productData.name}
//           </h1>
//           <div className="flex gap-3">برند: {productData.brand}</div>
//           <div className="flex flex-col pt-3">
//             <h1 className="text-[17px] font-bold text-right">مشخصات کالا:</h1>
//             <ul className="pr-1 pt-2">
//               <li className="text-[13px] p-1">
//                 {" "}
//                 پشتیبانی از شارژ سریع {productData.chargingPower} واتی
//               </li>
//               <li className="text-[13px] p-1">مناسب برای انواع گوشی و تبلت</li>
//               <li className="text-[13px] p-1 ">دارای 2 پورت Type-C و USB-A</li>
//             </ul>
//             <p className="font-bold text-red-700 pt-4 text-start ">
//               {`${productData.price} تومان`}
//             </p>
//             <p className="text-green-600 text-[14px] pt-4">
//               {" "}
//               موجودی: {productData.quantity || "نامشخص"}
//             </p>
//           </div>
//           <div className="flex items-center justify-center gap-7 ">
//             <div className="flex items-center gap-2 pt-5">
//               <button
//                 className="bg-gray-300"
// onClick={() =>
//   setCount((count) =>
//     count < productData.quantity ? count + 1 : count
//   )
//                 }>
//                 +
//               </button>
//               <p className="border border-gray-300 w-[60px] text-center flex justify-center items-center h-[45px]">
//                 {count}
//               </p>
//               <button
//                 className="bg-gray-300"
//                 onClick={() =>
//                   setCount((count) => (count > 1 ? count - 1 : count))
//                 }>
//                 -
//               </button>
//             </div>
//             <div className="pt-5">
//               <button
//                 onClick={(event) => addToCart(event)}
//                 className="w-[200px] outline-none  h-[45px] bg-red-500 text-white flex justify-center items-center">
//                 افزودن به سبد خرید
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="flex justify-between py-4 px-2 rounded-sm bg-white w-4/5 mx-auto"></div>
//     </div>
//   );
// }
