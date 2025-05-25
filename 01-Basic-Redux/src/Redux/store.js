import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../Redux/Features/Counter/counterSlice";
const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;
