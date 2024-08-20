import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import CategoriesSlice from "./CategoriesSlice";
import SubcategoriesSlice from "./SubcategoriesSlice";
import ProductSlice from "./Product/Product-Slice.ts";
import ReduxWish from "../hooks/reducers/wish.js";
import ReduxWishCounter from "../hooks/reducers/wishCounter";
import ReduxCartCounter from "../hooks/reducers/cartCounter";
import ReduxCart from "../hooks/reducers/reduceCart.js";
import CartTotalPrice from "../hooks/reducers/cartTotal";

const rootReducer = combineReducers({
  auth: authReducer,
  categories: CategoriesSlice,
  subcategories: SubcategoriesSlice,
  products: ProductSlice,
  rw: ReduxWish,
  rc: ReduxWishCounter,
  cc: ReduxCartCounter,
  rt: ReduxCart,
  ct: CartTotalPrice,
});
export default rootReducer;
