import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../Features/ProductSlice";

const Store = configureStore({
  reducer: {
    products: productReducer,
  },
});

export default Store;
