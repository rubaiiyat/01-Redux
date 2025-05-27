import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  likes: 0,
  dislikes: 0,
};

const LikeDislikes = createSlice({
  name: "likeDislike",
  initialState: initialState,

  reducers: {},
});
