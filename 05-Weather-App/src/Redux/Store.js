import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "../Redux/Features/Weather/WeatherSlice";
import { thunk } from "redux-thunk";

const Store = configureStore({
  reducer: {
    weather: weatherReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default Store;
