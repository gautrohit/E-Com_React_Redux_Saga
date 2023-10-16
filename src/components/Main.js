import React from "react";
import { AddToCart, EmptyCart, RemoveFromCart } from "../redux/action";
import { useDispatch } from "react-redux";

const Main = () => {
  const dispatch = useDispatch();
  const product = {
    name: "iPhone",
    color: "red",
    capacity: "128",
  };
  return (
    <>
      <button onClick={() => dispatch(AddToCart(product.name))}>
        Add To Cart
      </button>
      <button onClick={() => dispatch(RemoveFromCart(product.name))}>
        Remove from Cart
      </button>
      <button onClick={() => dispatch(EmptyCart())}>Empty Cart</button>
    </>
  );
};

export default Main;
