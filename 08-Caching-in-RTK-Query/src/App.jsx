import { Outlet } from "react-router";
import "./App.css";
import { useGetUsersQuery } from "./Redux/Features/User/UserApi";

function App() {
  const { data, error, isLoading } = useGetUsersQuery();

  console.log(data);

  return (
    <div>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
