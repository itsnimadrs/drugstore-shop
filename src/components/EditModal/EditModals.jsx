"use client";

import { Button, Modal } from "flowbite-react";
import { useEffect, useState } from "react";
import CategoryInput from "../AddProductModal/categoryInput";
import axios from "axios";

export default function EditModal({ productData, onClose }) {
  const [openModal, setOpenModal] = useState(false);

  const [productName, setProductName] = useState("");
  const [productBrand, setProductBrand] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubcategory, setSelectedSubcategory] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productQuantity, setProductQuantity] = useState("");
  const [isLoadingCategories, setIsLoadingCategories] = useState(true);
  const [isLoadingSubcategories, setIsLoadingSubcategories] = useState(true);
  const [productImages, setProductImages] = useState([]);
  const [error, setError] = useState(null);

  const [categories, setCategories] = useState({
    data: { categories: [] },
    isLoading: true,
  });
  const [subcategories, setSubcategories] = useState({
    data: { subcategories: [] },
    isLoading: true,
  });

  useEffect(() => {
    if (productData) {
      const {
        name,
        brand,
        description,
        category,
        subcategory,
        price,
        quantity,
      } = productData;

      setProductName(name || "");
      setProductBrand(brand || "");
      setProductDescription(description || "");
      setSelectedCategory(category || "");
      setSelectedSubcategory(subcategory || "");
      setProductPrice(price || "");
      setProductQuantity(quantity || "");
    }
  }, [productData]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setIsLoadingCategories(true);
        const response = await axios.get(
          "http://localhost:8000/api/categories"
        );

        if (response.data && response.data.data) {
          const { categories, subcategories } = response.data.data;

          setCategories({
            data: {
              categories: categories || [],
            },
            isLoading: false,
          });

          setSubcategories({
            data: {
              subcategories: subcategories || [],
            },
            isLoading: false,
          });
        } else {
          setCategories({
            data: {
              categories: [],
            },
            isLoading: false,
          });

          setSubcategories({
            data: {
              subcategories: [],
            },
            isLoading: false,
          });
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setIsLoadingCategories(false);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchSubcategories = async () => {
      try {
        setIsLoadingSubcategories(true);
        const response = await axios.get(
          "http://localhost:8000/api/subcategories"
        );
        const subcategoriesData = response.data.data.subcategories;

        setSubcategories({
          data: { subcategories: subcategoriesData },
          isLoading: false,
        });
      } catch (error) {
        console.error("Error fetching subcategories:", error);
      } finally {
        setIsLoadingSubcategories(false);
      }
    };

    fetchSubcategories();
  }, []);

  const updateProductData = (newData) => {
    if (newData) {
      const {
        name,
        brand,
        description,
        category,
        subcategory,
        price,
        quantity,
      } = newData;

      setProductName(name || "");
      setProductBrand(brand || "");
      setProductDescription(description || "");
      setSelectedCategory(category || "");
      setSelectedSubcategory(subcategory || "");
      setProductPrice(price || "");
      setProductQuantity(quantity || "");
    }
  };

  const handleAddProduct = async (e) => {
    e.preventDefault();

    if (
      !productName ||
      !productBrand ||
      !selectedCategory ||
      !selectedSubcategory ||
      !productDescription ||
      !productPrice ||
      !productQuantity ||
      !productImages.length
    ) {
      setError("All fields are required!");
      return;
    }

    setError(null);

    try {
      const formData = new FormData();
      formData.append("name", productName);
      formData.append("brand", productBrand);
      formData.append("description", productDescription);
      formData.append("category", selectedCategory);
      formData.append("subcategory", selectedSubcategory);
      formData.append("price", productPrice);
      formData.append("quantity", productQuantity);

      for (let i = 0; i < productImages.length; i++) {
        formData.append("images", productImages[i]);
      }

      const response = await axios.post("/api/products", formData);

      // Update the state with the new data
      updateProductData(response.data.data);

      // Close the modal and pass the updated data to the parent component
      onClose(response.data.data);
    } catch (error) {
      console.error("Error adding product:", error);
      if (error.response) {
        console.error("Server response:", error.response.data);
      } else {
        console.error("No response from the server");
      }
    }
  };

  return (
    <>
      <span
        onClick={() => setOpenModal(true)}
        className="p-2 font-medium text-cyan-600 hover:underline dark:text-cyan-500 cursor-pointer"
      >
        ویرایش
      </span>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>افزودن/ویرایش کالا</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <label
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              htmlFor="file_input"
            >
              بارگذاری عکس
            </label>
            <input
              className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              id="file_input"
              type="file"
              accept="image/*"
              required
            />
            <div className="mb-6">
              <label
                htmlFor="default-input"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                نام کالا
              </label>
              <input
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <label
              htmlFor="default-input"
              className="block text-sm font-medium text-gray-900 dark:text-white"
            >
              دسته بندی
            </label>

            <CategoryInput />
          </div>
          <div className="mb-6">
            <label
              htmlFor="large-input"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-4"
            >
              توضیحات
            </label>
            <input
              type="text"
              id="large-input"
              className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button>ذخیره</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
