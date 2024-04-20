"use client";

import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { PRODUCTS_URL } from "../api/api";
import { Card } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, Outlet, useNavigate } from "react-router-dom";
import React from "react";
import { Category } from "../services/catServ";

import useCategories from "../hooks/categories/categories.ts";
import { Product } from "../services/productServ.ts";
import { addToCart } from "../hooks/redux/cartSlice.js";




export default function Pcard() {
  const { data: categories = [], isLoading } = useCategories();
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const products = useSelector((state: any) => state.products.data);
  const { isPending, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () => fetch(PRODUCTS_URL).then((res) => res.json()),
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    navigate("/cart");
  };


 
    
    return (
      <>
        <div className="grid grid-cols-3 md:grid-cols-3 gap-4 m-4">
         
          {products &&
            products.map((product) => (
              <Card
                key={product._id}
                className="max-w-sm ml-20 bg-slate-300 flex gap-4 m-4"
              >
                <Link to={`/Productdetails/${product._id}`} key={product._id}>
                  <span>
                    <div className="h-60 w-60 object-cover flex justify-center m-auto">
                      {product.images.map((image) => (
                        <img
                          key={image}
                          className="w-60 h-60 object-fit flex justify-center m-auto"
                          src={`http://localhost:8000/images/products/images/${image}`}
                          alt={image}
                        />
                      ))}
                    </div>

                    <h5 className="cursor-pointer text-xl font-semibold tracking-tight text-gray-900 dark:text-white m-auto flex justify-center">
                      {product.name}
                    </h5>
                  </span>
                </Link>
                <Outlet />

                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-gray-900 dark:text-white">
                    {product.price} تومان
                  </span>
                  <button onClick={() => handleAddToCart(product)}  className=" cursor-pointer rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800">
                    افزودن به سبد خرید
                  </button>
                </div>
              </Card>
            ))}
        </div>
      </>
    );
  };

