import { useRef } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./redux/actions/todos";

export default () => {
  const dispatch = useDispatch();
  const inputRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    const title = inputRef.current.value.trim();
    if (!title) return;
    dispatch(
      addTodo({
        title,
        completed: false,
      })
    );
    inputRef.current.value = "";
  };
  return (
    <form onSubmit={handleSubmit} className="input-group">
      <input
        type="text"
        ref={inputRef}
        required
        placeholder="Todo..."
        autoFocus
        className="form-control"
      />
      <div className="input-group-append">
        <input type="submit" value="Add Todo" className="btn btn-primary" />
      </div>
    </form>
  );
};
