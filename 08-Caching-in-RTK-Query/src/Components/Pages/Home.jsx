import React from "react";
import { useGetUsersQuery } from "../../Redux/Features/User/UserApi";
import Users from "./Users";
import Loading from "./Loading";

const Home = () => {
  const { data, error, isLoading } = useGetUsersQuery();

  if (isLoading) {
    return <Loading></Loading>;
  }

  if (error) {
    return (
      <p className="text-center mt-5 text-red-500">Error loading users!</p>
    );
  }

  return (
    <div>
      <h1 className="text-4xl text-center mt-5">USERS</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mt-2 justify-center">
        {data.map((user) => (
          <Users key={user.id} user={user}></Users>
        ))}
      </div>
    </div>
  );
};

export default Home;
