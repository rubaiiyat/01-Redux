import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route element={<App></App>}>
        <Route path="/" element={<div>RTK ADVANCED TOPIC</div>}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
);
