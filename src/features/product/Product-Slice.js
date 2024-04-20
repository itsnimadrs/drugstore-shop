import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { PagedProductsRequest, deleteProductRequest } from "../../api/Products.js";
// import axios from "axios";
import {api} from "../../api/http.ts";


import { SubCategory } from "../../services/subServ.ts";

const initialState = {
  data: [],
  productsCount: 0,
  loading: false,
  error: false,
  message: "",
};

export const fetchProducts = createAsyncThunk(
  "/products/fetchProducts",
  PagedProductsRequest
);

export const deleteProduct = createAsyncThunk("products/deleteProduct", (id) =>
  deleteProductRequest(id)
);

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.fulfilled, (state, action: any) => {
        return {
          ...state,
          loading: false,
          error: false,
          data: action.payload.products,
          productsCount: action.payload.count,
          message: "products loaded successfully",
        };
      })
      .addCase(fetchProducts.rejected, (state, action: any) => {
        return {
          ...state,
          loading: false,
          error: true,
          message: action.payload.message || "Failed to load products",
        };
      })
      .addCase(fetchProducts.pending, (state, action) => {
        return {
          ...state,
          loading: true,
          message: "loading products",
        };
      })
      .addCase(deleteProduct.fulfilled, (state, action: any) => {
        return {
          ...state,
          loading: false,
          error: false,
          data: state.data.filter(
            (product: any) => product.id !== action.payload.id
          ),
          message: "products deleted successfully",
        };
      })
      .addCase(deleteProduct.rejected, (state, action: any) => {
        return {
          ...state,
          loading: false,
          error: true,
          message: action.payload.message || "Failed to delete product",
        };
      })
      .addCase(deleteProduct.pending, (state, action) => {
        return {
          ...state,
          loading: true,
          // data:state.data.filter,
          message: "deleting product",
        };
      });
  },
});



export const allCategoriesRequest = async () => {
  try {
    const res = await api.get("http://localhost:8000/api/categories");
    return res.data.data.categories;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const categoryByIDRequest = async (id) => {
  try {
    const res = await api.get(`http://localhost:8000/api/categories/${id}`);
    return res.data.data.category;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const SubcategoriesByCategoryRequest = async (id) => {
  try {
    const res = await api.get(
      `http://localhost:8000/api/subcategories?category=${id}`
    );
    return res.data.data.subcategories;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const subcategoryByIDRequest = async (id) => {
  try {
    const res = await api.get(`http://localhost:8000/api/subcategories/${id}`);
    return res.data.data.subcategory;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const AllProductsRequest = async () => {
  try {
    const response = await api.get("http://localhost:8000/api/products");
    return {
      products: response.data.data.products,
    };
  } catch (error) {
    return Promise.reject(error);
  }
};

export const createProductRequest = async (newProduct) => {
  try {
    const response = await api.post(
      "http://localhost:8000/api/products",
      newProduct,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    console.log(response.data.data.product);
    return {
      product: response.data.data.product,
    };
  } catch (error) {
    return Promise.reject(error);
  }
};

//  updateAmountProduct(state , action) {
//   const id= action.payload.id;
//   const type=action.payload.type;
//   const index= state.cart.findIndex(p=>p._id === id);

//   if(type){
//     state.cart[index].quantity +=1;
//     state.total += state.cart[index].price;
//   }
//   if(!type && state.cart[index].quntity >1){
//     state.cart[index].quntity -=1;
//     state.total -= state.cart[index].price;
//   }
// }

export default productsSlice.reducer;

