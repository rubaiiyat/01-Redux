import React from "react";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import OrderSummary from "./OrderSummary";

const Cart = () => {
  const carts = useSelector((state) => state.carts);
  return (
    <div className="grid grid-cols-3 ">
      <div className="col-span-2 mt-2">
        {carts.map((cart, index) => (
          <CartItem key={index} cart={cart}></CartItem>
        ))}
      </div>
      <div className="col-span-1 mt-10">
        <OrderSummary></OrderSummary>
      </div>
    </div>
  );
};

export default Cart;
