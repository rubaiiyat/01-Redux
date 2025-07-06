import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import { Provider } from "react-redux";
import { Store } from "./Redux/Store.js";

createRoot(document.getElementById("root")).render(
  <Provider store={Store}>
    <BrowserRouter>
      <Routes>
        <Route element={<App></App>}>
          <Route path="/" element={<div>RTK ADVANCED TOPIC</div>}></Route>
          <Route path="/add-user" element={<div>Add User</div>}></Route>
          <Route path="/edit-user" element={<div>Edit User</div>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);
