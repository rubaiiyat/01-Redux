import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router";
import {
  useGetUserByIdQuery,
  useUpdateUserByIdMutation,
} from "../../Redux/Features/User/UserApi";
import Loading from "./Loading";
import { useEffect } from "react";

const UpdateUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: user = {}, isLoading, error } = useGetUserByIdQuery(id);
  const [updateUserById] = useUpdateUserByIdMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  if (user && !isLoading && !error && !reset.called) {
    reset(user);
    reset.called = true;
  }

  const onSubmit = async (data) => {
    try {
      await updateUserById({ id, ...data });
      alert("User Updated Successfully");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  if (isLoading) return <Loading></Loading>;

  if (error) return <div>{error.message}</div>;
  return (
    <div className="bg-base-100 flex items-center justify-center mt-5">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="card w-full max-w-md bg-base-200 shadow-xl p-6 space-y-4"
      >
        <h2 className="text-2xl font-bold text-center text-primary">
          Update User {user.name}
        </h2>

        <div className="form-control">
          <label className="label">
            <span className="label-text text-base-content">Username</span>
          </label>
          <input
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
            {...register("gender", { required: true })}
            className="select select-bordered w-full bg-base-100 text-base-content"
          >
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text text-base-content">City</span>
          </label>
          <input
            type="text"
            placeholder="Enter city"
            {...register("city", { required: true })}
            className="input input-bordered w-full bg-base-100 text-base-content"
          />
        </div>

        <div className="form-control mt-6 mx-auto">
          <button className="btn btn-primary mx-auto w-32">Update User</button>
        </div>
      </form>
    </div>
  );
};

export default UpdateUser;
