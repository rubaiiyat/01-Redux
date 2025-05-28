import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increseLikes,
  increseDislikes,
  reset,
} from "../Redux/Features/LikeDislikes/LikeDislikesSlice";

const LikeDislikes = () => {
  const { likes, disLikes } = useSelector((state) => state.likeDislikes);
  const dispatch = useDispatch();
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="bg-base-300 p-10 rounded-2xl shadow-lg flex flex-col items-center gap-6 w-96">
        <div className="text-start">
          <h1 className="text-2xl font-bold mb-2">
            Likes: <span className="text-green-600">{likes}</span>
          </h1>
          <h1 className="text-2xl font-bold">
            Dislikes: <span className="text-red-500">{disLikes}</span>
          </h1>
        </div>
        <div className="flex gap-4">
          <button
            onClick={() => dispatch(increseLikes())}
            className="btn bg-green-600 text-white "
          >
            Add Like
          </button>
          <button
            onClick={() => dispatch(increseDislikes())}
            className="btn  text-white bg-red-500"
          >
            Add Dislike
          </button>
          <button onClick={() => dispatch(reset())} className="btn bg-neutral">
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default LikeDislikes;
