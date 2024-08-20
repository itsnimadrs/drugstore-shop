import { ActionTypes } from "../actions/action-types";

export const setproducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    paylaod: products,
  };
};

export const selectedProducts = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};
