import { combineReducers } from "redux";
import { productsReducer } from "../reducer/productsReducer";

const reducers = combineReducers({
  allProducts: productsReducer,
});

export default reducers;
