import React from "react";
import { Link, useParams } from "react-router";
import { useGetPostIdQuery } from "../Redux/Features/Post/postApi";

const SinglePost = () => {
  const { id } = useParams();

  const { data, isLoading, error } = useGetPostIdQuery(id);

  if (error) return <div>Something Went Wrong</div>;

  if (isLoading) return <div>Loading.......</div>;
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-sm mx-auto mt-10">
        <div className="card-body">
          <h2 className="card-title">{data.title}</h2>
          <p>{data.body}</p>
          <div className="card-actions justify-center">
            <button className="btn btn-primary">Like It</button>
            <Link to={"/"} className="btn btn-secondary">
              Back Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
