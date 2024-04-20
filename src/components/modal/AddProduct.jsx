("use client");

import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FileInput, FloatingLabel, Select, Textarea } from "flowbite-react";
import axios from "axios";
// import axiosInstance from "./axiosInstance.JS";

function AddProduct() {
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

  const handleAddProduct = async () => {
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
    } catch (error) {
      console.error("Error adding product:", error);
      if (error.response) {
        console.log("Server response:", error.response.data);
      } else {
        console.log("No response from the server");
      }
    }
  };
  const navigat = useNavigate();
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setIsLoadingCategories(true);
        const response = await axios.get(
          "http://localhost:8000/api/categories"
        );

        if (response.data && response.data.data) {
          const { categories, subcategories } = response.data.data;

          // Handle categories
          setCategories({
            data: {
              categories: categories || [],
            },
            isLoading: false,
          });

          // Handle subcategories
          setSubcategories({
            data: {
              subcategories: subcategories || [],
            },
            isLoading: false,
          });
        } else {
          // Handle the case when categories and subcategories are not present in the response
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
        // Handle the error case
      } finally {
        setIsLoadingCategories(false);
      }
    };

    fetchCategories();
  }, []);

  const fetchSubcategories = async () => {
    try {
      setIsLoadingSubcategories(true);
      const response = await axios.get(
        "http://localhost:8000/api/subcategories"
      );
      console.log("Subcategories response:", response.data);

      // Extract subcategories from the response
      const subcategoriesData = response.data.data.subcategories;

      // Log the subcategories data
      console.log("Subcategories data:", subcategoriesData);

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

  useEffect(() => {
    fetchSubcategories();
  }, []);

  useEffect(() => {
    console.log(subcategories);
  }, [subcategories]);

  function onCloseModal() {
    setOpenModal(false);
    // setEmail("");
  }

  return (
    <>
      <div className="w-4/5 flex justify-between items-center p-5 xl mb-4">
       
        <Button
          onClick={() => setOpenModal(true)}
          className=" top-6">
          افزودن کالا
        </Button>
      </div>
      <Modal
        show={openModal}
        size="xl"
        onClose={onCloseModal}
        popup>
        <Modal.Header />
        <form onSubmit={handleAddProduct}>
          {error && <p className="text-red-500">{error}</p>}{" "}
          <Modal.Body>
            <div className="w-full">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                نام محصول:
                <input
                  type="text"
                  className="mt-1 p-2 border rounded-md w-full"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                />
              </label>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                برند محصول:
                <input
                  type="text"
                  className="mt-1 p-2 border rounded-md w-full"
                  value={productBrand}
                  onChange={(e) => setProductBrand(e.target.value)}
                />
              </label>
            </div>
            <div className="w-full flex">
              <div className="w-1/2 flex flex-col">
                <label className="w-11/12 block text-sm font-medium text-gray-700 mb-1">
                  دسته بندی:
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="mt-1 p-2 border rounded-md w-full">
                    <option
                      value=""
                      disabled>
                      Select a category
                    </option>
                    {isLoadingCategories ? (
                      <option
                        value=""
                        disabled>
                        Loading categories...
                      </option>
                    ) : categories.data ? (
                      categories.data.categories ? (
                        Array.isArray(categories.data.categories) &&
                        categories.data.categories.length > 0 ? (
                          categories.data.categories.map((category) => (
                            <option
                              key={category._id}
                              value={category._id}>
                              {category.name}
                            </option>
                          ))
                        ) : (
                          <option
                            value=""
                            disabled>
                            No categories found (empty array)
                          </option>
                        )
                      ) : (
                        <option
                          value=""
                          disabled>
                          No categories found (categories not present)
                        </option>
                      )
                    ) : (
                      <option
                        value=""
                        disabled>
                        No categories found (data not present)
                      </option>
                    )}
                  </select>
                </label>
              </div>
              <div className="w-1/2">
                {/* Subcategory dropdown */}
                <label className="w-full block text-sm font-medium text-gray-700 mb-1">
                  Subcategory:
                  <select
                    value={selectedSubcategory}
                    onChange={(e) => setSelectedSubcategory(e.target.value)}
                    className="mt-1 p-2 border rounded-md w-full">
                    <option
                      value=""
                      disabled>
                      Select a subcategory
                    </option>
                    {isLoadingSubcategories ? (
                      <option
                        value=""
                        disabled>
                        Loading subcategories...
                      </option>
                    ) : subcategories.data &&
                      subcategories.data.subcategories &&
                      subcategories.data.subcategories.length > 0 ? (
                      subcategories.data.subcategories.map((subcategory) => (
                        <option
                          key={subcategory._id}
                          value={subcategory._id}>
                          {subcategory.name}
                        </option>
                      ))
                    ) : (
                      <option value="">No subcategories found</option>
                    )}
                  </select>
                </label>
              </div>
            </div>

            <div className="w-full flex">
              <div className="w-1/2">
                <label className="w-11/12 block text-sm font-medium text-gray-700 mb-1">
                  قیمت:
                  <input
                    type="number"
                    className="mt-1 p-2 border rounded-md w-full"
                    value={productPrice}
                    onChange={(e) => setProductPrice(e.target.value)}
                  />
                </label>
              </div>
              <div className="w-1/2">
                <label className=" block text-sm font-medium text-gray-700 mb-1">
                  موجودی:
                  <input
                    type="number"
                    className="mt-1 p-2 border rounded-md w-full"
                    value={productQuantity}
                    onChange={(e) => setProductQuantity(e.target.value)}
                  />
                </label>
              </div>
            </div>

            <label className="block text-sm font-medium text-gray-700 mb-1">
              مشخصات محصول:
              <textarea
                className="mt-1 p-2 border rounded-md w-full"
                value={productDescription}
                onChange={(e) => setProductDescription(e.target.value)}
              />
            </label>

            <label className="block text-sm font-medium text-gray-700 mb-1">
              تصویر محصول :
              <input
                type="file"
                multiple
                className="mt-1 p-2 rounded-md w-full"
                accept=".png, .jpg, .jpeg"
                onChange={(e) => setProductImages(e.target.files)}
              />
            </label>
            <div className="w-2/4 mx-auto">
              <button
                className="bg-green-400 w-full hover:bg-green-500"
                type="submit"
                onClick={handleAddProduct}>
                اضافه کردن محصول
              </button>
            </div>
          </Modal.Body>
        </form>
      </Modal>
    </>
  );
}

export default AddProduct;
