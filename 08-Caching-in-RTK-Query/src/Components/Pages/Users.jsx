import React from "react";

const Users = ({ user }) => {
  const { id, name, username, mail, gender, city, isActive } = user;
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
      </div>
    </div>
  );
};

export default Users;
