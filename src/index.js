import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Example from "./components/examples/examples";
import { BrowserRouter as Router, Route } from "react-router-dom";

ReactDOM.render(

    <Router>
      <Route exact path="/" component={App} />
      <Route exact path="/examples" component={Example} />
      <Route path="/examples/:example" component={App} />
    </Router>
  ,
  document.getElementById("root")
);
