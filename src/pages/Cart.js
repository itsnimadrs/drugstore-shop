"use client";

import { Table } from "flowbite-react";
import { Link, Outlet } from "react-router-dom";
import { createContext, useState, useEffect } from "react";
import { Button } from "flowbite-react";

export default function Cart({ children }) {
  return (
    <div>
      <div className="font-bold text-3xl flex justify-end m-auto mx-10 my-10">
        سبد خرید
      </div>
      <div className="overflow-x-auto">
        <Table>
          <Table.Head>
            <Table.HeadCell>Product name</Table.HeadCell>
            <Table.HeadCell>Color</Table.HeadCell>
            <Table.HeadCell>Category</Table.HeadCell>
            <Table.HeadCell>Price</Table.HeadCell>
            <Table.HeadCell>
              <span className="sr-only">Edit</span>
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell>
                <a
                  href="#"
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                >
                  حذف از سبد خرید
                </a>
              </Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                Magic Mouse 2
              </Table.Cell>
              <Table.Cell>Black</Table.Cell>
              <Table.Cell>Accessories</Table.Cell>
              <Table.Cell>$99</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
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
    </div>
  );
}
