import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Product } from "../type";

type CartStateType = {
  product: Product;
  count: number;
}[];

const initialState: CartStateType = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    incrementProduct: (state, action: PayloadAction<Product>) => {
      const index = state.findIndex(
        (item) => item.product.id === action.payload.id
      );
      state[index].count += 1;
    },
    decrementProduct: (state, action: PayloadAction<Product>) => {
      const index = state.findIndex(
        (item) => item.product.id === action.payload.id
      );
      const count = state[index].count;
      if (count === 1) {
        state.splice(index, 1);
      } else {
        state[index].count -= 1;
      }
    },
    addProductToCart: (state, action: PayloadAction<Product>) => {
      const index = state.findIndex(
        (item) => item.product.id === action.payload.id
      );
      if (index === -1) {
        state.push({ product: action.payload, count: 1 });
      } else {
        state[index].count += 1;
      }
    },
    removeProductFromCart: (state, action: PayloadAction<Product>) => {
      const index = state.findIndex(
        (item) => item.product.id === action.payload.id
      );
      state.splice(index, 1);
    },
    clearCart: (state) => {
      state.splice(0, state.length);
    },
  },
});
// Action creators are generated for each case reducer function
export const {
  incrementProduct,
  decrementProduct,
  addProductToCart,
  clearCart,
  removeProductFromCart,
} = cartSlice.actions;

export default cartSlice.reducer;
