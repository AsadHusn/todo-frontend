import { useTodoContext } from "./context";

export default ({ todo }) => {
  const { edit, setEdit, updateTodo, deleteTodo } = useTodoContext();

  return (
    <li>
      {edit !== todo.id ? (
        <>
          <input
            type="checkbox"
            id={todo.id}
            checked={todo.completed}
            onChange={(e) =>
              updateTodo({ ...todo, completed: e.target.checked })
            }
          />
          <label htmlFor={todo.id}>{todo.title}</label>
          <input type="button" value="Edit" onClick={() => setEdit(todo.id)} />
          <input
            type="button"
            value="Delete"
            onClick={() => deleteTodo(todo.id)}
          />
        </>
      ) : (
        <Edit todo={todo} />
      )}
    </li>
  );
};

const Edit = ({ todo }) => {
  const { updateTodo, setEdit } = useTodoContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    const title = e.target.edit.value.trim();
    if (!title) return;
    if (title === todo.title) {
      setEdit();
    } else {
      todo.title = title;
      updateTodo(todo);
      setEdit();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="edit"
        autoComplete="off"
        defaultValue={todo.title}
      />
      <input type="submit" value="Update" />
    </form>
  );
};
