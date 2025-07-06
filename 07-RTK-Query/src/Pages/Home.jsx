import React from "react";
import { useGetAllPostQuery } from "../Redux/Features/Post/postApi";
import { Link } from "react-router";

const Home = () => {
  const { data, error, isLoading } = useGetAllPostQuery();

  if (error) return <div>Something went wrong</div>;
  if (isLoading) return <div>Loading........</div>;
  return (
    <div className="bg-base-200 w-6/12 mx-auto p-5 mt-20">
      <ul className="">
        {data.slice(0, 10).map((post) => (
          <li key={post.id} className="text-blue-400">
            <Link to={`/posts/${post.id}`}>
              {post.id}. {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
