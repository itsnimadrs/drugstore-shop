import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../../features/rootReducers";
import logger from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
// import cartReducer from "../src/utils/cartSlice";
import cartReducer from "./cartSlice";
import productReducer from "../../utils/shop/productShopSlice";




const persistConfig = {
  key: "root",
  storage,
  version: 1,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  cart: cartReducer,
  product: productReducer,
  // reducer: { 
  //   categories: CategoriesSlice,
  //   subcategories: SubcategoriesSlice,
  //   products: ProductSlice,
  // },

  // ***********for error in log********
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST"],
        ignoredActionPaths: ["payload.callback"],
        ignoredPaths: ["auth.register"],
      },
    }).concat(logger),
});
// ********************
export const persistor = persistStore(store);
