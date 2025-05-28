import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  likes: 0,
  disLikes: 0,
};

const LikeDislikeSLice = createSlice({
  name: "likeDislikes",
  initialState: initialState,

  reducers: {
    increseLikes: (state) => {
      state.likes += 1;
    },
    increseDislikes: (state) => {
      state.disLikes += 1;
    },
    reset: (state) => {
      state.disLikes = 0;
      state.likes = 0;
    },
  },
});

export const { increseLikes, increseDislikes, reset } =
  LikeDislikeSLice.actions;

export default LikeDislikeSLice.reducer;
