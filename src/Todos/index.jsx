import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect, useReducer, useCallback } from "react";
import { Toaster } from "react-hot-toast";
import Add from "./Add";
import List from "./List";
import TodoContext from "./context";
import reducer from "./reducer";
import API from "./api";

export default () => {
  const [todos, dispatch] = useReducer(reducer, []);
  const [edit, setEdit] = useState();

  useEffect(() => {
    API.getTodos(dispatch);
  }, []);

  const addTodo = useCallback((todo) => API.addTodo(dispatch, todo), []);
  const deleteTodo = useCallback((id) => API.deleteTodo(dispatch, id), []);
  const updateTodo = useCallback(
    (newTodo) => API.updateTodo(dispatch, newTodo),
    []
  );

  return (
    <TodoContext.Provider
      value={{
        addTodo,
        deleteTodo,
        updateTodo,
        edit,
        setEdit,
      }}
    >
      <Toaster position="bottom-right" />
      <header className="navbar bg-body-tertiary text-center d-block">
        <span className="navbar-brand h1 fs-2">Todos</span>
      </header>
      <main className="container my-4">
        <Add AddTodo={addTodo} />
        {todos.length ? (
          <List todos={todos} />
        ) : (
          <p className="display-6 text-center mt-4">List is Empty</p>
        )}
      </main>
    </TodoContext.Provider>
  );
};
