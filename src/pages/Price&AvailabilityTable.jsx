"use client";

import { Table } from "flowbite-react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../features/Product/Product-Slice";
import React from "react";
import BsPagination from "../components/Bs-pagination/Bs-pagination.tsx";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function PriceAvailabilityTable() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.data);
  const message = useSelector((state) => state.products.message);
  const loading = useSelector((state) => state.products.loading);
  const [searchParams, setSearchParams] = useSearchParams({
    page: 1,
    // limit: 4,
  });
  
  useEffect(() => {
    dispatch(fetchProducts(`page=${searchParams.get("page")}&limit=${searchParams.get("limit")}`));
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }

  
  return (
    <>
      <p>{message}</p>

      <div className="overflow-x-auto mb-10">
        {products.length > 0 ? (
          <Table>
            <Table.Head>
              <Table.HeadCell>موجودی</Table.HeadCell>
              <Table.HeadCell>قیمت</Table.HeadCell>
              <Table.HeadCell>نام محصول</Table.HeadCell>  
            </Table.Head>
            {products.map((product) => (
              <Table.Body key={product._id} className="divide-y">
                <React.Fragment>
                  <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      {product.quantity}
                    </Table.Cell>
                    <Table.Cell>{product.price}</Table.Cell>
                    <Table.Cell>{product.name}</Table.Cell>
                  </Table.Row>
                </React.Fragment>
              </Table.Body>
            ))}
          </Table>
        ) : null}
      </div>
      {/* <BsPagination  /> */}
    </>
  );
}
