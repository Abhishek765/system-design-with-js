// ! Create multiple Components that work together to perform a single task

import React from "react";
import ReactDOM from "react-dom";

import ImagesList from "./Images";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <div className="App">
      <ImagesList />
    </div>
  </React.StrictMode>,
  rootElement
);
