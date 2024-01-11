// import React from "react";
// import { useState, useEffect } from "react";
// import { Link, Outlet } from "react-router-dom";

// const ProductDetails = ({ product, image }) => {
//   const [quantity, setQuantity] = useState(1);

//   useEffect(() => {
//     setQuantity(1);
//   }, [product]);

//   const handleQuantityChange = (event) => {
//     const value = parseInt(event.target.value);
//     if (value < 1) {
//       setQuantity(1);
//     } else if (value > product.inventory) {
//       setQuantity(product.inventory);
//     } else {
//       setQuantity(value);
//     }
//   };
//   return (
//     <>
//       <div className="w-full flex justify-center">
//         {/* <h1></h1>

//       {product.inventory > 0 ? (
//         <>
//           <img  alt={image} />

//           <div  />

//           <input
//             type="number"

//           />

//           <button >افزودن به سبد خرید</button>
//         </>
//       ) : (
//         <p>موجود نمی باشد</p>
//       )} */}
//       </div>
//       <div>
//         <Link to="/"> بازگشت به سایت</Link>
//       </div>
//       <Outlet />
//     </>
//   );
// };
///////////////////////////
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { PRODUCTS_URL } from "../api/api";
import { Button } from 'flowbite-react';
import { useSelector } from "react-redux";
import { Link, Navigate, Outlet, useParams } from "react-router-dom";
import ProductDetails from "./ProductDetails";
import { useState, useEffect } from "react";
import Header from "../components/Header";

export default function Pcard(shouldNavigate) {
  const [count, setCount] = useState(1);
  const { id } = useParams();
  console.log(id);
  const productId = id;
  const products = useSelector((state) => state.products.data);
  const { isPending, error, data } = useQuery({
    queryKey: ["productById", productId],
    queryFn: () => fetch(`${PRODUCTS_URL}/${productId}`).then((res) => res.data.product),
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  console.log(data);

  function increment() {
    if (count < 100) {
      setCount(count + 1);
    }
  }
  function decrement() {
    if (count > 1) {
      setCount(count - 1);
    }
  }

  return (
    <>
      {/* <Header /> */}
      {products.map((product) => (
        <div key={product._id} className="flex flex-col">
          <span className="flex gap-8 justify-end -mr-[60rem] mb-10 my-10 bg-slate-200 ">
            <div className="h-[20rem] w-[20rem] flex justify-end m-auto bg-slate-300">
              {product.images.map((image) => (
                <img
                  key={image}
                  className="w-[20rem] h-[20rem] object-fit flex justify-center m-auto gap-10 "
                  src={`http://localhost:8000/images/products/images/${image}`}
                  alt={image}
                />
              ))}
            </div>
          </span>
          <div className="flex justify-center -mr-[17rem] -mt-[20rem] mb-[20rem] text-3xl font-bold">
            {product.name}
          </div>
          <div className="">
            <div className="flex justify-center -mr-[20rem] -mt-[45rem]">
              {product.category}
            </div>
            <div className="flex justify-center mr-[20rem] -mt-6">
              {product.subcategory}
            </div>
            <div className="text-2xl font-bold flex justify-center mt-12 -mr-[30rem]">
              تومان {product.price}{" "}
            </div>
            <form class="max-w-xs ml-[55rem] mt-8">
              <label
                for="counter-input"
                class="block mb-1 font-medium text-gray-900 dark:text-white text-m ml-10"
              >
                :تعداد
              </label>
              <div class="relative flex items-center">
              
                <button
                  onClick={decrement}
                  type="button"
                  id="decrement-button"
                  data-input-counter-decrement="counter-input"
                  class="flex-shrink-0 bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                >
                  <svg
                    class="w-2.5 h-2.5 text-gray-900 dark:text-white"
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
                <input
                  type="text"
                  id="counter-input"
                  data-input-counter
                  class="flex-shrink-0 text-gray-900 dark:text-white border-0 bg-transparent text-sm font-normal focus:outline-none focus:ring-0 max-w-[2.5rem] text-center"
                  placeholder=""
                  value={count}
                  readOnly
                />
                <button
                  onClick={increment}
                  type="button"
                  id="increment-button"
                  data-input-counter-increment="counter-input"
                  class="flex-shrink-0 bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                >
                  <svg
                    class="w-2.5 h-2.5 text-gray-900 dark:text-white"
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
             
            </form>
            <Button className="flex justify-center ml-[30rem] -mt-[3rem]" color="blue">افزودن به سبد خرید</Button>
            <div className="rtl mt-10 ml-10">{product.description}</div>
          </div>
        </div>
      ))}
      <Link to="/"> بازگشت به سایت</Link>
    </>
  );
}
