import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./Components/Pages/Home.jsx";
import { Provider } from "react-redux";
import Store from "./Redux/Store/Store.js";
import Cart from "./Components/Pages/Cart.jsx";

createRoot(document.getElementById("root")).render(
  <Provider store={Store}>
    <BrowserRouter>
      <Routes>
        <Route element={<App></App>}>
          <Route path="/" element={<Home></Home>}></Route>
          <Route
            path="/products"
            element={<div>This is Product page</div>}
          ></Route>
          <Route path="/cart" element={<Cart></Cart>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);
