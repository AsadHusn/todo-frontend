import actions from "./actions";
import fetch from "./fetch";

const getTodos = async (dispatch) => {
  const todos = await fetch("/todo", "GET");
  dispatch({
    type: actions.GET,
    payload: todos,
  });
};

const addTodo = async (dispatch, todo) => {
  const id = await fetch("/todo", "POST", todo);
  dispatch({
    type: actions.ADD,
    payload: { id, ...todo },
  });
};

const deleteTodo = async (dispatch, id) => {
  await fetch("/todo/" + id, "DELETE");
  dispatch({
    type: actions.DELETE,
    payload: id,
  });
};

const updateTodo = async (dispatch, todo) => {
  await fetch("/todo/" + todo.id, "PUT", todo);
  dispatch({
    type: actions.UPDATE,
    payload: todo,
  });
};

export default {
  getTodos,
  addTodo,
  deleteTodo,
  updateTodo,
};
