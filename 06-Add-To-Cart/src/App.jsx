import "./App.css";
import { Outlet } from "react-router";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className="">
      <div className="">
        <div className="">
          <Navbar />
        </div>
      </div>

      <main className="">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
