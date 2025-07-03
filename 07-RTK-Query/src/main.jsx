import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import Store from "./Redux/Store.js";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./Pages/Home.jsx";
import SinglePost from "./Pages/SinglePost.jsx";

createRoot(document.getElementById("root")).render(
  <Provider store={Store}>
    <BrowserRouter>
      <Routes>
        <Route element={<App></App>}>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/posts/:id" element={<SinglePost></SinglePost>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);
