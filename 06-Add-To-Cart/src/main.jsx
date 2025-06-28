import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./Components/Pages/Home.jsx";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
  <Provider>
    <BrowserRouter>
      <Routes>
        <Route element={<App></App>}>
          <Route path="/" element={<Home></Home>}></Route>
          <Route
            path="/products"
            element={<div>This is Product page</div>}
          ></Route>
          <Route path="/cart" element={<div>This is cart page</div>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);
