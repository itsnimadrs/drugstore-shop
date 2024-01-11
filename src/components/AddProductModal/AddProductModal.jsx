"use client";

import { Button, Modal } from "flowbite-react";
import { React, useState, useEffect } from "react";
import BasicDemo from "./categoryInput";
import {
  login,
  refreshAccessToken,
} from "../../features/Authentication/authService";
import * as Yup from "yup";
import { createProductRequest } from "../../api/Products";
import SubCategory from "./SubCategory";
import axios from "axios";
import { v4 as uuid } from "uuid";
import { api } from "../../api/http";
import { CATEGORIES_URL, PRODUCTS_URL } from "../../api/api";
import Category from "./categoryInput";
import { useQuery } from "@tanstack/react-query";

export default function AddProductModal({ onAdd, product, onEdit }) {
  const isEditing = !!product;

  const [openModal, setOpenModal] = useState(false);

  const [pName, setPname] = useState("");
  const [price, setPrice] = useState("");
  const [subcategory, setSubcategory] = useState("");
  const [category, setCategory] = useState("");
  const [images, setImage] = useState([]);
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleNameChange = (event) => {
    setPname(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };
  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };
  const handleImageChange = (event) => {
    setImage(event.target.value);
  };
  const handleSubcategoryChange = (event) => {
    setSubcategory(event.target.value);
  };

  const handleChange = async (e) => {
    e.preventDefault();

    let form_data = new FormData();
    form_data.append(`name`, pName);
    // form_data.append(`brand`, values.brand);
    form_data.append(`price`, price);
    form_data.append(`category`, category);
    form_data.append(`subcategory`, subcategory);
    form_data.append(`description`, description);
    form_data.append(`quantity`, quantity);

    // if (thumbnail) form_data.append("thumbnail", thumbnail);
    if (images) {
      form_data.append("images", images);
    }

    if (isEditing) {
      onEdit(form_data);
    } else {
      onAdd(form_data);
    }

    // images.forEach((images) => {

    // })
  };

  const { isPending, error, data , categoryId } = useQuery({
    queryKey: ["categoryData"],
    queryFn: () => api.get(`${CATEGORIES_URL}`).then((res) => res.data),
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <>
      <Button className="m-4" onClick={() => setOpenModal(true)}>
        افزودن کالا
      </Button>
      <form>
        <Modal show={openModal} onClose={() => setOpenModal(false)}>
          <Modal.Header>افزودن کالا</Modal.Header>
          <Modal.Body>
            <label
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              htmlFor="file_input"
            >
              بارگذاری عکس
            </label>
            <input
              value={images}
              onChange={handleImageChange}
              className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              id="file_input"
              type="file"
              required
            />
            <div className="mb-6">
              <label
                htmlFor="default-input"
                className="block my-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                نام کالا
              </label>
              <input
                value={pName}
                onChange={handleNameChange}
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              <label
                htmlFor="default-input"
                className="block my-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                مقدار کالا
              </label>
              <div>
                <div className="mb-2 block"></div>
                <input
                  value={quantity}
                  onChange={handleQuantityChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  id="base"
                  type="text"
                  sizing="md"
                />
              </div>
            </div>
            <div className="mb-6">
              <label
                htmlFor="default-input"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                قیمت
              </label>
              <input
                value={price}
                onChange={handlePriceChange}
                type="number"
                id="default-input"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <label
              htmlFor="default-input"
              className="block text-sm font-medium text-gray-900 dark:text-white"
            >
              دسته بندی
            </label>

            <Category
              value={category}
              array={data.data.categories}
              onchange={handleCategoryChange}
            />

            <label
              htmlFor="default-input"
              className="block text-sm font-medium text-gray-900 dark:text-white mb-4 w-full my-8"
            >
              زیردسته
            </label>
            <SubCategory
              value={subcategory}
              onchange={handleSubcategoryChange}
            />

            <div className="mb-6 mt-8">
              <label
                htmlFor="large-input"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white my-8"
              >
                توضیحات
              </label>
              <input
                value={description}
                onChange={handleDescriptionChange}
                type="text"
                id="large-input"
                className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
              />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button type="submit" onClick={handleChange}>
              ذخیره
            </Button>
          </Modal.Footer>
        </Modal>
      </form>
    </>
  );
}
