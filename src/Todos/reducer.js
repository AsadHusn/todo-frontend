import actions from "./actions";

export default (state, action) => {
  switch (action.type) {
    case actions.GET:
      return action.payload;
    case actions.ADD:
      return [...state, action.payload];
    case actions.DELETE:
      return state.filter(({ id }) => id !== action.payload);
    case actions.UPDATE:
      return state.map((todo) =>
        todo.id === action.payload.id ? action.payload : todo
      );
    default:
      return state;
  }
};
