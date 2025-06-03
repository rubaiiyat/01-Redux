import { createSlice } from "@reduxjs/toolkit";

const TodoSlice = createSlice({
  name: "todos",
  initialState: [
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Learn Redux", completed: false },
    { id: 3, text: "Learn CP", completed: true },
  ],
  reducers: {
    addTodo: (state, action) => {
      state.push({
        id: Date.now(),
        text: action.payload,
        completed: false,
      });
    },
    removeTodo: (state, action) => {
      return state.filter((toto) => toto.id != action.payload);
    },
  },
});

export const { addTodo, removeTodo } = TodoSlice.actions;
export default TodoSlice.reducer;
