import React from "react";

const LikeDislikes = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="bg-base-300 p-10 rounded-2xl shadow-lg flex flex-col items-center gap-6 w-96">
        <div className="text-start">
          <h1 className="text-2xl font-bold mb-2">Likes: 0</h1>
          <h1 className="text-2xl font-bold">Dislikes: 0</h1>
        </div>
        <div className="flex gap-4">
          <button className="btn bg-green-600 text-white ">Add Like</button>
          <button className="btn  text-white bg-red-500">Add Dislike</button>
          <button className="btn btn-neutral">Reset</button>
        </div>
      </div>
    </div>
  );
};

export default LikeDislikes;
