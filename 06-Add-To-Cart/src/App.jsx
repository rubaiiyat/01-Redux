import Navbar from "daisyui/components/navbar";
import "./App.css";
import { Outlet } from "react-router";

function App() {
  return (
    <div>
      <nav>Navbar</nav>
      <main>
        <Outlet></Outlet>
      </main>
    </div>
  );
}

export default App;
