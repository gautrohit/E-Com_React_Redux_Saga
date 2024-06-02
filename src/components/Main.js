import React from "react";

import {
  AddToCart,
  EmptyCart,
  ProcuctList,
  RemoveFromCart,
} from "../redux/action";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const Main = () => {
  const dispatch = useDispatch();
  let data = useSelector((state) => state.ProcuctList);
  console.log("Main data componetents", data);

  useEffect(() => {
    dispatch(ProcuctList());
  }, [dispatch]);
  return (
    <>
      <button onClick={() => dispatch(EmptyCart())}>Empty Cart</button>
      <div className="product-container">
        {data.map((item) => (
          <div className="product-item">
            <div>
              <img src={item.photo} alt="items" height={300} width={250} />
            </div>
            <div>Name : {item.name} </div>
            <div>Color : {item.color} </div>
            <div>Price : {item.price} </div>
            <div>Category : {item.category} </div>
            <div>Brand : {item.brand} </div>
            <div>
              <button onClick={() => dispatch(AddToCart(item))}>
                Add to Cart
              </button>
              <button onClick={() => dispatch(RemoveFromCart(item.id))}>
                Remove to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Main;
