import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import storage from "redux-persist/lib/storage";

import cartReducer from "../features/cartSlice.ts";

const persistConfig = { key: "root", storage, blacklist: ["auth"] };
const rootReducer = combineReducers({   cart: cartReducer });
const persistedReducer = persistReducer(persistConfig, rootReducer);
 const store = configureStore({
  reducer: persistedReducer,
  // this middleware property is only for addressing an internal redux-persist related issue about state and actions serializability...
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
});

export const persistor = persistStore(store);

export default store;
