// "use client";

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { PRODUCTS_URL } from "../api/api";

// import { Card } from "flowbite-react";

// export default function Pcard() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const fetchApi = () => {
//       fetch(PRODUCTS_URL)
//         .then((response) => response.json())
//         .then((data) => {
//           setProducts(data);
//         });
//       console.log(products);
//     };

//     fetchApi();
//   }, []);

//   return (
//     <>
//       {/* {products.map((product) => (
//         <Card key={product.id} className="max-w-sm ml-20 bg-slate-300">
//           <a href="#">
//             <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
//               {product.name}
//             </h5>
//           </a>

//           <div className="flex items-center justify-between">
//             <span className="text-3xl font-bold text-gray-900 dark:text-white">
//               تومان
//             </span>
//             <a
//               href="#"
//               className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
//             >
//               افزودن به سبد خرید
//             </a>
//           </div>
//         </Card>
//       ))} */}
//     </>
//   );
// }

"use client";

import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { PRODUCTS_URL } from "../api/api";
import { Card } from "flowbite-react";
import { useSelector } from "react-redux";

export default function Pcard() {
  const products = useSelector((state) => state.products.data);
  const { isPending, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () => fetch(PRODUCTS_URL).then((res) => res.json()),
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  console.log(data);

  //className="h-20 w-20 object-cover mr-10"

  return (
    <>
      <div className="grid grid-cols-3 md:grid-cols-3 gap-4 m-4">
        {products.map((product) => (
          <Card
            key={product._id}
            className="max-w-sm ml-20 bg-slate-300 flex gap-4 m-4"
          >
            <a>
              <div className="h-40 w-40 object-cover flex justify-center m-auto">
                {product.images.map((image) => (
                  <img
                    key={image}
                    className="w-40 h-40 object-fit flex justify-center m-auto"
                    src={`http://localhost:8000/images/products/images/${image}`}
                    alt={image}
                  />
                ))}
              </div>
              <h5 className="cursor-pointer text-xl font-semibold tracking-tight text-gray-900 dark:text-white m-auto flex justify-center">
                {product.name}
              </h5>
            </a>

            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold text-gray-900 dark:text-white">
                {product.price} تومان
              </span>
              <a className=" cursor-pointer rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800">
                افزودن به سبد خرید
              </a>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
}
