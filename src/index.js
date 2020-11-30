import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import store from "./redux/store";

import Hello from "./Hello";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <Hello />
  </Provider>,
  rootElement
);
