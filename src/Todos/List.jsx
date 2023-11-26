import Todo from "./Todo";
export default ({ todos }) => {
  return (
    <>
      <h4 className="mt-4">Todo List</h4>
      <ol className="list-group list-group-flush">
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </ol>
    </>
  );
};
