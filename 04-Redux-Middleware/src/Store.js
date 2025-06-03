import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./Redux/Features/TodosSlice";
const Store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});

export default Store;
