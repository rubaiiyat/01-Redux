import React from "react";

const AddNewUser = () => {
  return (
    <div className="bg-base-100 flex items-center justify-center mt-5">
      <form className="card w-full max-w-md bg-base-200 shadow-xl p-6 space-y-4">
        <h2 className="text-2xl font-bold text-center text-primary">
          Add Post
        </h2>

        <div className="form-control">
          <label className="label">
            <span className="label-text text-base-content">Username</span>
          </label>
          <input
            name="username"
            type="text"
            placeholder="Enter username"
            className="input input-bordered w-full bg-base-100 text-base-content"
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text text-base-content">Full Name</span>
          </label>
          <input
            name="fullName"
            type="text"
            placeholder="Enter full name"
            className="input input-bordered w-full bg-base-100 text-base-content"
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text text-base-content">Email</span>
          </label>
          <input
            name="email"
            type="email"
            placeholder="Enter email"
            className="input input-bordered w-full bg-base-100 text-base-content"
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text text-base-content">Gender</span>
          </label>
          <select
            name="gender"
            className="select select-bordered w-full bg-base-100 text-base-content"
          >
            <option disabled selected>
              Select gender
            </option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text text-base-content">City</span>
          </label>
          <input
            name="city"
            type="text"
            placeholder="Enter city"
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

export default AddNewUser;
