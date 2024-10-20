import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./reducers";
import { thunk } from "redux-thunk";

// NOTE: this will result in error if redux extension is not enable better to use 2nd way as following
// const store1 = createStore(
//   reducers,
//   compose(
//     applyMiddleware(thunk),
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   )
// );

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store2 = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default store2;
