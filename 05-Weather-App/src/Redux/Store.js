import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "../Redux/Features/Weather/WeatherSlice";

const Store = configureStore({
  reducer: {
    weather: weatherReducer,
  },
});

export default Store;
