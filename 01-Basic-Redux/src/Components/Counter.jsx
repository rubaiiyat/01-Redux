import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../Redux/Features/Counter/counterSlice";

const Counter = () => {
  const value = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div className="flex gap-5 justify-center">
      <button
        onClick={() => dispatch(increment())}
        className="btn  bg-success text-2xl text-black"
      >
        +
      </button>
      <span className="text-2xl">{value}</span>
      <button
        onClick={() => dispatch(decrement())}
        className="btn bg-success text-4xl text-black"
      >
        -
      </button>
    </div>
  );
};

export default Counter;
