import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App></App>}>
        <Route
          path="/products"
          element={<div>This is Product page</div>}
        ></Route>
        <Route path="/cart" element={<div>This is cart page</div>}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
);
