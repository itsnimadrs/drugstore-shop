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
