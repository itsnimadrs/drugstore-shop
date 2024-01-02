import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import CategoriesSlice from "./CategoriesSlice";
import SubcategoriesSlice from "./SubcategoriesSlice";
import ProductSlice from "./Product/Product-Slice";
const rootReducer = combineReducers({
  auth: authReducer,
  categories: CategoriesSlice,
  subcategories: SubcategoriesSlice,
  products: ProductSlice,
});
export default rootReducer;
