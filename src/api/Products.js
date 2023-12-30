import { PRODUCTS_URL } from "./api";
import axios from "axios";

export const PagedProductsRequest = async (params) => {
  try {
    const response = await axios.get(`${PRODUCTS_URL}?${params}`);
    const allData = response.data;
    return {
      products: allData.data.products,
      count: allData.length,
    };
  } catch (error) {
    return {
      error: true,
      message: error.message,
    };
  }
};

export const deleteProductRequest = async (id) => {
  try {
    const response = await axios.delete(`${PRODUCTS_URL}/${id}`);
    return response.data;
  } catch (error) {
    return {
      error: true,
      message: error.message,
    };
  }
};

const API_URL = "/api/products/";

export const getProducts = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const addProduct = async (productData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL, productData, config);
  return response.data;
};

export const createProductRequest = async (newProduct, token) => {
  try {
    const response = await axios.post(
      "http://localhost:8000/api/products",
      newProduct,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          "Authorization": `Bearer ${token.accessToken}` 
        }
      }
    )
    console.log(response.data.data.product);
    return {
      product: response.data.data.product,
    };
  } catch (error) {
    console.error("Error creating product:", error.response.data);
    return Promise.reject(error);
  }
};
