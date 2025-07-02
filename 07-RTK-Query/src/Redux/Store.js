import { configureStore } from "@reduxjs/toolkit";
import postApi from "./Features/Post/postApi";

const Store = configureStore({
  reducer: {
    [postApi.reducerPath]: postApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postApi.middleware),
});

export default Store;
