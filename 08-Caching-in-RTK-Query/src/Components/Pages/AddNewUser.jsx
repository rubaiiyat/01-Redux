import React from "react";
import { useForm } from "react-hook-form";

import { useNavigate } from "react-router";
import { useAddNewUserMutation } from "../../Redux/Features/User/UserApi";

const AddNewUser = () => {
  const [addNewUser] = useAddNewUserMutation();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await addNewUser(data);
      alert("User Added Successfully");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-base-100 flex items-center justify-center mt-5">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="card w-full max-w-md bg-base-200 shadow-xl p-6 space-y-4"
      >
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
            {...register("username", { required: true })}
            className="input input-bordered w-full bg-base-100 text-base-content"
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text text-base-content">Full Name</span>
          </label>
          <input
            name="name"
            type="text"
            placeholder="Enter full name"
            {...register("name", { required: true })}
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
            {...register("mail", { required: true })}
            className="input input-bordered w-full bg-base-100 text-base-content"
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text text-base-content">Gender</span>
          </label>
          <select
            name="gender"
            {...register("gender", { required: true })}
            className="select select-bordered w-full bg-base-100 text-base-content"
          >
            <option disabled value="">
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
            {...register("city", { required: true })}
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
