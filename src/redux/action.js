import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from "./constant";

export const AddToCart = (data) => {
  return {
    type: ADD_TO_CART,
    data,
  };
};
export const RemoveFromCart = (data) => {
  return {
    type: REMOVE_FROM_CART,
    data,
  };
};
export const EmptyCart = () => {
  return {
    type: EMPTY_CART,
  };
};
