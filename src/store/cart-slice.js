import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    totalItems: 0,
    items: [],
  },
  reducers: {
    addToCart(state, action) {
      const inCart = state.items.findIndex((e) => e.id === action.payload.id);
      console.log(inCart);
      if (inCart >= 0) {
        console.log(current(state));
        console.log("enters2");
        console.log(action.payload.amount);
        state.items.map((e) =>
          e.id === action.payload.id
            ? (e.amount = e.amount + action.payload.amount)
            : e.amount
        );
        state.totalItems = state.totalItems + action.payload.amount;
        console.log(current(state));
      } else {
        console.log(current(state));
        state.items.push(action.payload);
        state.totalItems = state.totalItems + action.payload.amount;
        console.log(action.payload);
        console.log("enters");
        console.log(current(state));
      }
    },
    removeFromCart(state, action) {
      console.log(action.payload);
      console.log(current(state));
      state.items = state.items.filter((e) => e.id !== action.payload.id);
      console.log(current(state));
    },
    updateAmountOnCart(state, action) {
      state.items.map((e) =>
        e.id === action.payload.id ? action.payload.amount : e.amount
      );
    },
  },
});
export const CartActions = cartSlice.actions;
export default cartSlice;
