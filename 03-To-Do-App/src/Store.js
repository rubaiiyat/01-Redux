import { configureStore } from "@reduxjs/toolkit";

import todoReducer from "./Features/Todo/TodoSlice";

const Store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});

export default Store;
