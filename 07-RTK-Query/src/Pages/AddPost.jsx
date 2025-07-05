import React from "react";

const AddPost = () => {
  const handleAddPostForm = (e) => {
    e.preventDefault();

    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;
    const authorID = form.authorID.value;

    const newPost = {
      title,
      description,
      authorID,
    };
    console.log(newPost);
  };
  return (
    <div className="min-h-screen bg-base-100 flex items-center justify-center px-4">
      <form
        onSubmit={handleAddPostForm}
        className="card w-full max-w-md bg-base-200 shadow-xl p-6 space-y-4"
      >
        <h2 className="text-2xl font-bold text-center text-primary">
          Add Post
        </h2>

        <div className="form-control">
          <label className="label">
            <span className="label-text text-base-content">Title</span>
          </label>
          <input
            name="title"
            type="text"
            placeholder="Enter title"
            className="input input-bordered w-full bg-base-100 text-base-content"
          />
        </div>

        <div className="form-control w-full">
          <label className="label">
            <span className="label-text text-base-content">Description</span>
          </label>
          <textarea
            name="description"
            placeholder="Enter description"
            className="textarea textarea-bordered h-24 w-full bg-base-100 text-base-content"
          ></textarea>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text text-base-content">Author ID</span>
          </label>
          <input
            name="authorID"
            type="text"
            placeholder="Enter author ID"
            className="input input-bordered w-full bg-base-100 text-base-content"
          />
        </div>

        <div className="form-control mt-6 mx-auto">
          <button className="btn btn-primary mx-auto w-32">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddPost;
