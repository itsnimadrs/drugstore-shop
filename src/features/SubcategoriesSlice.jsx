import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { SubcategoriesByCategoryRequest } from "./Product/Product-Slice.ts";
const initialState = {
  subcategories: [],
  selectedSubcategory: null,
  loading: false,
  error: "",
};

export const fetchSubcategories = createAsyncThunk(
  "subcategories/fetchSubCategories",
  SubcategoriesByCategoryRequest
);

export const subcategoriesSlice = createSlice({
  name: "subcategories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // read
    builder.addCase(fetchSubcategories.pending, (state) => {
      return { ...state, loading: true };
    });
    builder.addCase(fetchSubcategories.fulfilled, (state, action) => {
      return { ...state, loading: false, subcategories: action.payload };
    });
    builder.addCase(fetchSubcategories.rejected, (state, action) => {
      return {
        ...state,
        subcategories: [],
        loading: false,
        error: String(action.payload),
      };
    });
  },
});
export default subcategoriesSlice.reducer;