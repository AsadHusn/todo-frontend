import { useRef } from "react";
import { useTodoContext } from "./context";

export default () => {
  const { addTodo } = useTodoContext();
  const inputRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    const title = inputRef.current.value.trim();
    if (!title) return;
    addTodo({
      title,
      completed: false,
    });

    inputRef.current.value = "";
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={inputRef} required />
      <input type="submit" value="Add Todo" />
    </form>
  );
};
