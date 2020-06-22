import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Example from "./components/examples/examples";
import { BrowserRouter as Router, Route } from "react-router-dom";
console.log("In src/index.js");
ReactDOM.hydrate(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
