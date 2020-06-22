import React from "react";
import { Header, Expression } from "./components";
import styles from "./App.module.css";
import { Link, Switch,Route } from "react-router-dom";
import Example from "./components/examples/examples";
import Cron from './components/cron/cron';
function App({ match, location }) {
  let expression = "";
  if (match) {
    // expression = match ? match.params.example : null;
    expression = match.params.example;
  }
  if (expression) {
    expression = expression.replace("^", "/");
  }

  return (

     <>
      <Switch>
        <Route exact path="/examples" component={Example} />
        <Route exact path="/" component={Cron} />
        <Route path="/examples/:example" component={Cron} />
      </Switch> 
     </>
  );



}

export default App;
