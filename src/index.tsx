import { useState } from "react";
import ReactDOM from "react-dom";
import CodeCell from "./components/code-cell";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Provider } from "react-redux";
import { store } from "./state";
import "bulmaswatch/superhero/bulmaswatch.min.css";
import TextEditor from "./components/text-editor";
import CellList from "./components/cell-list";

const App = () => {
  return (
    <Provider store={store}>
      <CellList />
    </Provider>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
