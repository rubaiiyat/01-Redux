import { Outlet } from "react-router";
import "./App.css";
import { useGetUsersQuery } from "./Redux/Features/User/UserApi";
import Navbar from "./Components/Navbar";

function App() {
  const { data, error, isLoading } = useGetUsersQuery();

  console.log(data);

  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
