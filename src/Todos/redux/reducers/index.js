import { combineReducers } from "redux";
import edit from "./edit";
import todos from "./todos";

export default combineReducers({
  edit,
  todos,
});
