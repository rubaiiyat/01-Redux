import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import { Provider } from "react-redux";
import { Store } from "./Redux/Store.js";
import Home from "./Components/Pages/Home.jsx";
import AddNewUser from "./Components/Pages/AddNewUser.jsx";
import UpdateUser from "./Components/Pages/UpdateUser.jsx";

createRoot(document.getElementById("root")).render(
  <Provider store={Store}>
    <BrowserRouter>
      <Routes>
        <Route element={<App></App>}>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/users" element={<Home></Home>}></Route>
          <Route path="/add-user" element={<AddNewUser></AddNewUser>}></Route>
          <Route
            path="/update-user/:id"
            element={<UpdateUser></UpdateUser>}
          ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);
