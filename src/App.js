import React, { Component } from "react";
import HelloWorld from "./HelloWorld";

import reducer from "./reducers";
import { createStore } from "redux";

//tạo store
const initialState = { tech: "React - Redux" };
const store = createStore(reducer, initialState);

//sử dụng store
class App extends Component {
  render() {
    return <HelloWorld tech={store.getState().tech} />
  }
}

export default App;