import { Button, ToastToggle } from "flowbite-react";
import { Link, Navigate, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Breadcrumb } from "flowbite-react";
import { BASE_URL } from "../api/api.js";
import Header from "../components/Header/index.jsx";
import { useDispatch } from "react-redux";
import { Toast } from "flowbite-react";
import { HiFire } from "react-icons/hi";

export default function Pcard() {
  const { id } = useParams();
  const [count, setCount] = useState(1);
  // const navigate = useNavigate();
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  // const { data, setData, navigate } = useData();
  // const [myproducts, setMyProdcuts] = useState([]);

  // const [cart, setCart] = useState([])
  // const [showCart, setShowCart] = useState(false)

  // const addToCart = (data) => {
  //   setCart([...cart, { ...data, quantity: count }])
  // }

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`${BASE_URL}/products/${id}`);
        if (!response.ok) {
          throw new Error("Something went wrong");
        }
        const data = await response.json();
        // const setData = localStorage.setItem('product', JSON.stringify(product));
        // console.log(id);
        // const existingProducts = JSON.parse(localStorage.getItem("cart")) || [];
        // setMyProdcuts(existingProducts);
        // console.log(existingProducts);
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

  // const addProduct = (product) => {
  //   const newProducts = {
  //     ...product,
  //     count: 1,
  //   };
  //   setMyProdcuts((preProducts) => [...preProducts, newProducts]);
  //   localStorage.setItem("cart", JSON.stringify([...myproducts, newProducts]));
  // };

  // const handleAddToCart = (product) => {
  //   dispatch(addToCart(product));
  //   console.log(product);
  //   navigate("/cart");
  // };

  // Add a new item
  // const addToCart = () => {
  //   setItems([...items, `Product ${Date.now()}`]);
  //   navigate("/cart");
  // };

  // const addToCart = (event) => {
  //   event.preventDefault();

  //   if (productData.name && productData.quantity) {
  //     const newItem = {
  //       name: productData.name,
  //       count: count,
  //       images: productData.images,
  //       price: productData.price,
  //       id: productData._id,
  //     };

  //     setData((prevData) => {
  //       if (!Array.isArray(prevData)) {
  //         return [newItem];
  //       }

  //       return [newItem, ...prevData];
  //     });
  //     navigate("/cart");
  //   }
  // };

  return (
    <>
      <Header />
      {product ? (
        <div className="flex flex-col overflow-x-hidden">
          <span className="flex gap-8 justify-end -mr-[60rem] mb-10 my-10 bg-slate-200 ">
            <div className="h-[20rem] w-[20rem] flex justify-end m-auto bg-slate-300">
              <img
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
              variant={product.data.product.quantity === 0 && "disabled"}
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
      <Toast>
        <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-100 text-cyan-500 dark:bg-cyan-800 dark:text-cyan-200">
          <HiFire className="h-5 w-5" />
        </div>
        <div className="ml-3 text-sm font-normal">added to cart.</div>
        <Toast.Toggle />
      </Toast>
    </>
  );
}
