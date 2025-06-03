import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo, toggleTodo } from "../Features/Todo/TodoSlice";

const ToDoList = () => {
  const todos = useSelector((state) => state.todos);
  const disPatch = useDispatch();

  const handleForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const todoInput = form.todoInput.value;
    console.log(todoInput);
    disPatch(addTodo(todoInput));
    form.reset();
  };

  return (
    <div>
      <h1 className="text-4xl">Todo List App</h1>
      <div className="mt-5">
        <form onSubmit={handleForm}>
          <input
            className="input"
            type="text"
            placeholder="Add Your Todo"
            name="todoInput"
          />
          <button className="btn bg-success">Add</button>
        </form>

        <div className="mt-10 ">
          <ul className="mt-10 flex flex-col items-center w-full">
            {todos.length > 0 ? (
              todos.map((todo) => (
                <li
                  onClick={() => disPatch(toggleTodo(todo.id))}
                  key={todo.id}
                  className={
                    todo.completed == true
                      ? "flex justify-between items-center w-96 bg-base-300 p-4 rounded mb-2 shadow hover:cursor-pointer"
                      : "flex justify-between items-center w-96 bg-base-100 p-4 rounded mb-2 shadow hover:cursor-pointer"
                  }
                >
                  <span className="text-start">
                    {todo.id}. {todo.text}
                  </span>
                  <button
                    onClick={() => disPatch(removeTodo(todo.id))}
                    className="text-error hover:cursor-pointer hover:underline"
                  >
                    Remove
                  </button>
                </li>
              ))
            ) : (
              <p className="text-error text-center">No Items Found</p>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ToDoList;
