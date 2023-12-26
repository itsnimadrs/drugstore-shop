"use client";
import { Table } from "flowbite-react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../features/CategoriesSlice.jsx";
import {
  fetchProducts,
  deleteProduct,
} from "../../features/Product/Product-Slice";
import React from "react";
import { useSearchParams } from "react-router-dom";

import BsPagination from "../Bs-pagination/Bs-pagination.tsx";

import EditModal from "../EditModal/EditModal.jsx";

export default function AdminProductsTable() {
  const [active, setActive] = useState(1);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.data);
  const categories = useSelector((state) => state.categories.categories);
  const message = useSelector((state) => state.products.message);
  const loading = useSelector((state) => state.products.loading);
  const count = useSelector((state) => state.products.productsCount);
  const [filteredData, setFilteredData] = useState(products);
  const [searchParams, setSearchParams] = useSearchParams({
    page: 1,
    // limit: 4,
  });
  const [showLogin, setShowLogin] = useState(false);

  

  

  const handleDelete = (id) => {
    console.log(id);
    dispatch(deleteProduct(id)).then(() => {
      dispatch(
        fetchProducts(
          `page=${searchParams.get("page")}&limit=${searchParams.get("limit")}`
        )
      );
    });
  };

  useEffect(() => {
    dispatch(
      fetchProducts(
        `page=${searchParams.get("page")}&limit=${searchParams.get("limit")}`
      )
    );
  }, [dispatch]);

  useEffect(() => {
    if (products.length) {
      setFilteredData(products);
    }
  }, [products]);

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

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
              <Table.HeadCell></Table.HeadCell>
              <Table.HeadCell>دسته بندی</Table.HeadCell>
              <Table.HeadCell>نام محصول</Table.HeadCell>
              <Table.HeadCell>تصویر</Table.HeadCell>
              <Table.HeadCell>
                <span className="sr-only">Edit</span>
              </Table.HeadCell>
            </Table.Head>
            {products.map((product) => {
              const category = categories.find((cat) => cat.id === product.categoryId);
              return (
                <Table.Body key={product._id} className="divide-y">
                  <React.Fragment>
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                      <Table.Cell>
                        
                        <EditModal/>
                        <span
                          onClick={() => handleDelete(product._id)}
                          className=" font-medium text-cyan-600 hover:underline dark:text-cyan-500 cursor-pointer"
                        >
                          حذف
                        </span>
                      </Table.Cell>
                      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      {category?.name || "No category"}
                      </Table.Cell>
                      <Table.Cell>{product.name}</Table.Cell>
                      <Table.Cell>
                        <div className="images">
                          {product.images.map((image) => (
                            <img
                              key={image}
                              className="w-20 h-20"
                              src={`http://localhost:8000/images/products/images/${image}`}
                              alt={image}
                            />
                          ))}
                        </div>
                      </Table.Cell>
                    </Table.Row>
                  </React.Fragment>
                </Table.Body>
              );
            })}
          </Table>
        ) : null}
      </div>
      <BsPagination
        count={count}
        params={searchParams}
        active={active}
        setActive={setActive}
      />
    </>
  );
}
