import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import axios from "axios";

const EditProductModal = ({ show, productData, onClose }) => {
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
    <Modal
      className={`w-[600px] mt-24 mx-auto bg-white p-8 flex flex-col`}
      isOpen={show}
      onRequestClose={onClose}
      contentLabel="Edit Product">
      <form onSubmit={updateProductData}>
        {error && <p className="text-red-500">{error}</p>}
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
            type="submit">
            ویرایش محصول
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default EditProductModal;
