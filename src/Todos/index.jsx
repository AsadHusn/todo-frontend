import { useState, useEffect, useReducer, useCallback } from "react";
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
      <main
        style={{
          width: 400,
          margin: "auto",
        }}
      >
        <h1>todos</h1>
        <Add AddTodo={addTodo} />
        {todos.length ? <List todos={todos} /> : "List is Empty"}
      </main>
    </TodoContext.Provider>
  );
};
