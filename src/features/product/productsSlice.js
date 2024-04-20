import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AllProductsRequest, createProductRequest } from "../../api/api";
const initialState = {
  products: [],
  loading: false,
  error: "",
};
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  AllProductsRequest
);

export const AddProduct = createAsyncThunk(
  "products/AddProduct",
  (newProduct) => createProductRequest(newProduct)
);
export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // read
    builder.addCase(fetchProducts.pending, (state) => {
      return { ...state, loading: true };
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      const { products } = action.payload;
      return {
        ...state,
        loading: false,
        products: products,
      };
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      return {
        ...state,
        products: [],
        loading: false,
        error: String(action.payload),
      };
    });
    // create
    builder.addCase(AddProduct.pending, (state) => {
      return { ...state, loading: true };
    });
    builder.addCase(AddProduct.fulfilled, (state) => {
      return {
        ...state,
        loading: false,
      };
    });
    builder.addCase(AddProduct.rejected, (state, action) => {
      return { ...state, loading: false, error: String(action.payload) };
    });
  },
});
export default productsSlice.reducer;
