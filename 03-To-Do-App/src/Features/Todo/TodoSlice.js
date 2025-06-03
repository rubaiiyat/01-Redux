import { createSlice } from "@reduxjs/toolkit";

const TodoSlice = createSlice({
  name: "todos",
  initialState: [
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Learn Redux", completed: false },
    { id: 3, text: "Learn CP", completed: false },
  ],
  reducers: {
    addTodo: (state, action) => {
      state.push({
        id: state.length + 1,
        text: action.payload,
        completed: false,
      });
    },
    removeTodo: (state, action) => {
      return state.filter((toto) => toto.id != action.payload);
    },
    toggleTodo: (state, action) => {
      const todo = state.find((todo) => todo.id == action.payload);
      if (todo) todo.completed = true;
    },
  },
});

export const { addTodo, removeTodo, toggleTodo } = TodoSlice.actions;
export default TodoSlice.reducer;
