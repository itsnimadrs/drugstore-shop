import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { BASE_URL, PRODUCTS_URL } from "../api/api";
import { Button } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { ChoosedProduct } from "../services/productServ";

const Dtail = () => {
 
  const [product] = useState([])
  const [count, setCount] = useState(1); 
  const [productDetails, setProductDetails] = useState(null);

  const [isLoading, setIsLoading] = useState(false);

     

  // const cartState = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let initCount = 1;
  // const handleCount = () => {
  //   cartState.map((item) => {
  //     if (item.product._id === productId) {
  //       initCount = item.count;
  //     }
  //     return initCount;
  //   });
  //   return initCount;
  // };

  // const [counterProduct, setcounterProduct] = useState(handleCount());
  // useEffect(() => {
  //   handleCount();
  // }, [initCount]);

  const { isPending, error, data } = useQuery({
    queryKey: ["productById", productId],
    queryFn: () =>
      axios.get(`${PRODUCTS_URL}/${productId}`).then((res) => res.data),

  });
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

  if (isPending) return "loading...";
  if (error) return error.message;




  return (
    <>
      {/* <Header /> */}

      <div  className="flex flex-col">
        <span className="flex gap-8 justify-end -mr-[60rem] mb-10 my-10 bg-slate-200 ">
          <div className="h-[20rem] w-[20rem] flex justify-end m-auto bg-slate-300">
            {/* {product.images.map((image) => (
              <img
                key={image}
                className="w-[20rem] h-[20rem] object-fit flex justify-center m-auto gap-10 "
                src={`http://localhost:8000/images/products/images/${image}`}
                alt={image}
              />
            ))} */}
          </div>
        </span>
        <div className="flex justify-center -mr-[17rem] -mt-[20rem] mb-[20rem] text-3xl font-bold">
          
        </div>
        <div className="">
          <div className="flex justify-center -mr-[20rem] -mt-[45rem]">
           
          </div>
          <div className="flex justify-center mr-[20rem] -mt-6">
            
          </div>
          <div className="text-2xl font-bold flex justify-center mt-12 -mr-[30rem]">
            تومان 
          </div>
          <form className="max-w-xs ml-[55rem] mt-8">
            <label
              htmlFor="counter-input"
              className="block mb-1 font-medium text-gray-900 dark:text-white text-m ml-10"
            >
              :تعداد
            </label>
            <div className="relative flex items-center">
              <button
               
                type="button"
                id="decrement-button"
                data-input-counter-decrement="counter-input"
                className="flex-shrink-0 bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
              >
                <svg
                  className="w-2.5 h-2.5 text-gray-900 dark:text-white"
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
                className="flex-shrink-0 text-gray-900 dark:text-white border-0 bg-transparent text-sm font-normal focus:outline-none focus:ring-0 max-w-[2.5rem] text-center"
                placeholder=""
              
                readOnly
              />
              <button
              
                type="button"
                id="increment-button"
                data-input-counter-increment="counter-input"
                className="flex-shrink-0 bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
              >
                <svg
                  className="w-2.5 h-2.5 text-gray-900 dark:text-white"
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
          <Button
            className="flex justify-center ml-[30rem] -mt-[3rem]"
            color="blue"
          >
            افزودن به سبد خرید
          </Button>
          <div className="rtl mt-10 ml-10"></div>
        </div>
      </div>

      <Link to="/"> بازگشت به سایت</Link>
    </>
  );
};
export default Dtail;

// import Box from "@mui/material/Box";
// import Typography from "@mui/material/Typography";
// import StyledBreadcrumb from "../components/mui-customized/StyledBreadcrumb.tsx";
// import CustomLink from "../components/common/CustomLink.tsx";
// import Breadcrumbs from "@mui/material/Breadcrumbs";
// import Chip from "@mui/material/Chip";
// import { ChoosedProduct } from "../services/productServ";
// import React from "react";





// const Dtail = ({ product }: { product: ChoosedProduct }) => {
//   return (
//     <>
//       <Typography variant='h4' component='h1' mt={5}>
//         {product.name}
//       </Typography>

//       <Box display='flex' gap={3} mt={10} justifyContent='space-between' alignItems='center'>
//         <Typography>گروه محصول: </Typography>
//         <Breadcrumbs separator='\'>
//           <StyledBreadcrumb component={CustomLink} to={`/categories/${product.category.slugname}`} label={product.category.name} />
//           <StyledBreadcrumb
//             component={CustomLink}
//             to={`/categories/${product.category.slugname}/${product.subcategory.slugname}`}
//             label={product.subcategory.name}
//           />
//         </Breadcrumbs>
//       </Box>

//       <Box display='flex' gap={5} mt={5} justifyContent='space-between' alignItems='center'>
//         <Typography>رتبه محصول: </Typography>
        
//       </Box>

//       <Box display='flex' gap={5} mt={5} justifyContent='space-between' alignItems='center'>
//         <Typography>قیمت محصول: </Typography>
//         <Chip label={`${(product.price)} تومان`} variant='outlined' sx={{ fontSize: 18, py: 2, px: 1 }} />
//       </Box>
//     </>
//   );
// };

// export default Dtail;



  