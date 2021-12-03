import { CartActions } from "./cart-slice";

export const addToCart = (product) => {
  return (dispatch) => {
    dispatch(CartActions.addToCart({ name: payload }));
  };
};
