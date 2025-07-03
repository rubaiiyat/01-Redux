import React from "react";
import { useGetAllPostQuery } from "../Redux/Features/Post/postApi";

const Home = () => {
  const { data, error, isLoading } = useGetAllPostQuery();

  if (error) return <div>Something went wrong</div>;
  if (isLoading) return <div>Loading........</div>;
  return (
    <div>
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            {post.id}. {post.title}
          </li> // ✅ added key
        ))}
      </ul>
    </div>
  );
};

export default Home;
