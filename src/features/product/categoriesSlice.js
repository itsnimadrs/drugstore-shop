import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { allCategoriesRequest } from "../../api/api";
const initialState = {
  categories: [],
  selectedCategory: null,
  loading: false,
  error: "",
};

export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  allCategoriesRequest
);

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // read
    builder.addCase(fetchCategories.pending, (state) => {
      return { ...state, loading: true };
    });
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      return { ...state, loading: false, categories: action.payload };
    });
    builder.addCase(fetchCategories.rejected, (state, action) => {
      return {
        ...state,
        categories: [],
        loading: false,
        error: String(action.payload),
      };
    });
  },
});
export default categoriesSlice.reducer;
