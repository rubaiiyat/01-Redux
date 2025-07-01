import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../Features/ProductSlice";
import cartReducer from "../Features/CartSlice";

const Store = configureStore({
  reducer: {
    products: productReducer,
    carts: cartReducer,
  },
});

export default Store;
