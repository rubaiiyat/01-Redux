import React from "react";
import { useDeleteUserMutation } from "../../Redux/Features/User/UserApi";
import { Link } from "react-router";

const Users = ({ user }) => {
  const { id, name, username, mail, gender, city, isActive } = user;

  const [deleteUser] = useDeleteUserMutation();

  const handleDeleteUser = async (id) => {
    try {
      await deleteUser(id);
      alert("Delete User Successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="space-y-2 bg-base-200 p-5 rounded m-5 shadow-xl">
        <img
          className="rounded-full w-16"
          src="https://img.freepik.com/premium-vector/person-with-blue-shirt-that-says-name-person_1029948-7040.jpg?semt=ais_hybrid&w=740"
          alt=""
        />
        <h1>
          Username: <span className="text-info">{username}</span>
        </h1>
        <h1>
          Name: <span className="text-info">{name}</span>
        </h1>
        <h1>
          Email: <span className="text-info">{mail}</span>
        </h1>
        <h1>
          Gender: <span className="text-info">{gender}</span>
        </h1>
        <h1>
          City: <span className="text-info">{city}</span>
        </h1>

        <div className="flex justify-between mt-3">
          <button
            onClick={() => handleDeleteUser(id)}
            className="btn btn-error"
          >
            Delete Post
          </button>
          <Link to={`/update-user/${id}`}>
            <button className="btn btn-info">Update Post</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Users;
