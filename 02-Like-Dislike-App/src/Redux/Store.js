import { configureStore } from "@reduxjs/toolkit";
import LikeDislikes from "../Components/LikeDislikes";
import likeDisLikesReducer from "../Redux/Features/LikeDislikes/LikeDislikesSlice";
const store = configureStore({
  reducer: {
    likeDislikes: likeDisLikesReducer,
  },
});

export default store;
