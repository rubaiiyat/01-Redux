import { configureStore } from "@reduxjs/toolkit";
import { UserApi } from "./Features/User/UserApi";

export const Store = configureStore({
  reducer: {
    [UserApi.reducerPath]: UserApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(UserApi.middleware),
});
