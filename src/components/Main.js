import React from "react";

import {
  AddToCart,
  EmptyCart,
  ProcuctList,
  RemoveFromCart,
} from "../redux/action";
import { useDispatch, useSelector } from "react-redux";

const Main = () => {
  const dispatch = useDispatch();
  let data = useSelector((state) => state.ProcuctList);
  console.log("Main data componetents", data);
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
      <button onClick={() => dispatch(RemoveFromCart())}>
        Remove from Cart
      </button>
      <button onClick={() => dispatch(EmptyCart())}>Empty Cart</button>
      <button onClick={() => dispatch(ProcuctList())}>Procuct List</button>
    </>
  );
};

export default Main;
