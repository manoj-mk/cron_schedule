import React from "react";
import { Header, Expression } from "../index";
import { Link, Switch } from "react-router-dom";
import styles from './cron.module.css';
// import Example from "./components/examples/examples";
function Cron({ match, location }) {
  let expression = "";
  if (match) {
    // expression = match ? match.params.example : null;
    expression = match.params.example;
  }
  if (expression) { 
    expression = expression.replace("^", "/");
  }

  return (
    <div className={styles.Cron}>
      <Header />
      <Expression expression={expression} isAllMatched={true} />
      <div className={styles.examples_link}>
        {/* <Link to="/examples">Examples</Link> */}
        <a href="/examples">Examples</a>
      </div>
    </div>
  );
} 

export default Cron;
