import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    totalItems: 0,
    items: [],
  },
  reducers: {
    addToCart(state, action) {
      const inCart = state.items.findIndex((e) => e.id === action.payload.id);

      if (inCart >= 0) {
        state.items.map((e) =>
          e.id === action.payload.id
            ? (e.amount = e.amount + action.payload.amount)
            : e.amount
        );
        state.totalItems = state.totalItems + action.payload.amount;
      } else {
        state.items.push(action.payload);
        state.totalItems = state.totalItems + action.payload.amount;
      }
    },
    removeFromCart(state, action) {
      state.totalItems = state.totalItems - action.payload.amount;
      state.items = state.items.filter((e) => e.id !== action.payload.id);
    },
    updateAmountOnCart(state, action) {
      const productToUpdateIndex = state.items.findIndex(
        (e) => e.id === action.payload.id
      );
      state.totalItems =
        state.totalItems +
        (action.payload.amount - state.items[productToUpdateIndex].amount);
      state.items[productToUpdateIndex].amount = action.payload.amount;
    },
    emptyCart(state, action) {
      state.items = [];
      state.totalItems = 0;
    },
  },
});
export const CartActions = cartSlice.actions;
export default cartSlice;
