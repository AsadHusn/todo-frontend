import Todo from "./Todo";
export default ({ todos }) => {
  return (
    <ol>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </ol>
  );
};
