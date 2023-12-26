import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "../../features/Product/Product-Slice";
import CategoriesSlice from "../../features/CategoriesSlice";
import SubcategoriesSlice from "../../features/SubcategoriesSlice";

const store = configureStore({
  reducer: {
    categories: CategoriesSlice,
    subcategories: SubcategoriesSlice,
    products: ProductSlice,
  },
});

export default store;
