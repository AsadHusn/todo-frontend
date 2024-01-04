import { useSelector, useDispatch } from "react-redux";
import Todo from "./Todo";
import { getTodos } from "./redux/actions/todos";
import { useEffect } from "react";

export default () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  console.log("todos = ", todos);

  useEffect(() => {
    dispatch(getTodos());
  }, []);

  return todos?.length ? (
    <>
      <h4 className="mt-4">Todo List</h4>
      <ol className="list-group list-group-flush">
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </ol>
    </>
  ) : (
    <p className="display-6 text-center mt-4">List is Empty</p>
  );
};
