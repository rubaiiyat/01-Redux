import React from "react";
import { Link, useParams } from "react-router";
import {
  useDeletePostByIdMutation,
  useGetPostIdQuery,
  useUpdatePostByIdMutation,
} from "../Redux/Features/Post/postApi";

const SinglePost = () => {
  const { id } = useParams();
  const [deletePostById] = useDeletePostByIdMutation();
  const [updatePostById] = useUpdatePostByIdMutation();

  const { data, isLoading, error } = useGetPostIdQuery(id);

  if (error) return <div>Something Went Wrong</div>;

  if (isLoading) return <div>Loading.......</div>;

  const handleDeletePost = () => {
    const response = deletePostById(id);
    console.log(response);
  };

  const handleUpdatePost = () => {
    const data = {
      title: "This is new Title",
      description: "Description is perfect",
      authorID: 10,
    };

    const response = updatePostById(data, id);
    console.log(response);
  };

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
            <button onClick={handleDeletePost} className="btn btn-error">
              Delete
            </button>
            <button onClick={handleUpdatePost} className="btn btn-info">
              Update Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
