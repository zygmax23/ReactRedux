import React from "react";
import "./styles.css";
import { Provider } from "react-redux";
import store from "./store/store";
import Counter from "./Counter";

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Counter />
      </div>
    </Provider>
  );
}
