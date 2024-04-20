"use client";

import { Table } from "flowbite-react";
import { Link, Outlet } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import { Button } from "flowbite-react";
import {
  AddCartContext,
  CartContext,
  RemoveCartContext,
} from "../utils/shop/localCart";

const Cart = ({ cartData }) => {
  const [cart, setCart] = useState(cartData);

  // useEffect(() => {
  //   setCart(cartData);
  // }, [cartData]);
  // console.log(cartData)

  const delItem = (key) => {
    const updatedCartData = [...cart];
    updatedCartData.splice(key, 1);
    localStorage.setItem("cart", JSON.stringify(updatedCartData));
    setCart(updatedCartData);
  };

  // const calculatedTotal = () => {
  //   return cart.reduce((total, item) => total + item.price, 0);
  // };
  return (
    <div>
      <div className="font-bold text-3xl flex justify-end m-auto mx-10 my-10">
        سبد خرید
      </div>
      
        <>
          <div className="overflow-x-auto">
            <Table>
              <Table.Head>
                <Table.HeadCell>
                  <span className="sr-only">Edit</span>
                </Table.HeadCell>
                <Table.HeadCell>تعداد</Table.HeadCell>
                <Table.HeadCell>قیمت</Table.HeadCell>
                <Table.HeadCell>نام</Table.HeadCell>
                <Table.HeadCell>تصویر</Table.HeadCell>
              </Table.Head>

              <Table.Body className="divide-y">
                {cart?.map((item, index) => (
                  <Table.Row
                    key={index}
                    className="bg-white dark:border-gray-700 dark:bg-gray-800"
                  >
                    <Table.Cell>
                      <a
                        onClick={()=>delItem(index)}
                        className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                      >
                        حذف از سبد خرید
                      </a>
                    </Table.Cell>
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      {'Apple MacBook Pro 17"'}
                    </Table.Cell>
                    <Table.Cell>{item?.price}</Table.Cell>
                    <Table.Cell>{item?.name}</Table.Cell>
                    <Table.Cell>{item?.image}</Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
          </div>
          <div className="flex justify-end">
            <div className="flex justify-end text-2xl mx-10 my-8 font-bold">
              تومان: جمع کل
            </div>
          </div>
          <div>
            <Outlet />
            <Link to="finalizationOrder">
              <Button
                className="flex justify-center align-middle m-auto my-10 w-60"
                color="success"
              >
                نهایی کردن سبد خرید
              </Button>
            </Link>{" "}
            <br />
            <Link
              className="flex justify-center m-auto text-justify underline text-lg font-normal"
              to="/"
            >
              {" "}
              بازگشت به سایت
            </Link>
          </div>
        </>
      
        <>
          <div className="min-h-[80vh] flex flex-col items-center justify-center">
            <h1 className="text-gray-700 font-semibold text-xl mb-2">
              سبد خرید شما خالی است{" "}
            </h1>
            <Link to={"/"}>
              <button className="bg-purple-700 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-purple-600 font-bold hover:text-purple-700 p-3">
                بازگشت به سایت
              </button>
            </Link>
          </div>
        </>
      
    </div>
  );
};

export default Cart;
