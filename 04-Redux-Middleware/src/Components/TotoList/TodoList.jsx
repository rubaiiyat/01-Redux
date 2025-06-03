import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  removeTodo,
  toggleTodo,
} from "../../Redux/Features/TodosSlice";

const TodoList = () => {
  const todos = useSelector((state) => state.todos.items);

  const dispatch = useDispatch();

  const handleForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const todoList = form.todoList.value;

    dispatch(addTodo(todoList));

    form.reset();
  };

  return (
    <div>
      <h1 className="text-4xl font-bold mt-10">Daily Todo List</h1>
      <form onSubmit={handleForm} className="mt-10 space-y-5">
        <div className=" flex items-center justify-center">
          <input
            className="input input-accent"
            name="todoList"
            type="text"
            placeholder="Add Your List"
            required
          />

          <button className="btn bg-accent text-black">Add</button>
        </div>
      </form>

      <div>
        <ul className="w-96 m-auto mt-10">
          {todos.map((todo) => (
            <li
              onClick={() => dispatch(toggleTodo(todo.id))}
              key={todo.id}
              className={`flex justify-between items-center ${
                todo.completed == true ? "bg-base-300" : "bg-base-100"
              } shadow rounded p-4 hover:cursor-pointer mt-2 hover:bg-base-300 duration-500`}
            >
              {todo.text}{" "}
              <span
                onClick={() => dispatch(removeTodo(todo.id))}
                className="text-error hover:cursor-pointer hover:text-red-500"
              >
                Remove
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
