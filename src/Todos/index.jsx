import "bootstrap/dist/css/bootstrap.min.css";
import { Toaster } from "react-hot-toast";
import Add from "./Add";
import List from "./List";
import { Provider } from "react-redux";
import store from "./redux/store";

export default () => {
  return (
    <Provider store={store}>
      <Toaster position="bottom-right" />
      <header className="navbar bg-body-tertiary text-center d-block">
        <span className="navbar-brand h1 fs-2">Todos</span>
      </header>
      <main className="container my-4">
        <Add />
        <List />
      </main>
    </Provider>
  );
};
