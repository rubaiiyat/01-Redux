import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const TodosSlice = createSlice({
  name: "todos",
  initialState: initialState,
  addTodo: (state, action) => {
    state.items.push({
      id: Date.now(),
      text: action.payload,
      completed: false,
    });
  },
  removeTodo: (state, action) => {
    state.items = state.items.filter((todo) => todo.id != action.payload);
  },
  toggleTodo: (state, action) => {
    const todo = state.find((todo) => todo.id == action.payload);
    if (todo) {
      todo.completed = !todo.completed;
    }
  },
});

export const { addTodo, removeTodo, toggleTodo } = TodosSlice.actions;
export default TodosSlice.reducer;
