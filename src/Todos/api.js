import fetch from "./fetch";

const getTodos = async () => await fetch("/todo", "GET");

const addTodo = async (todo) => await fetch("/todo", "POST", todo);

const deleteTodo = async (id) => await fetch("/todo/" + id, "DELETE");

const updateTodo = async (todo) => await fetch("/todo/" + todo.id, "PUT", todo);

export default {
  getTodos,
  addTodo,
  deleteTodo,
  updateTodo,
};
