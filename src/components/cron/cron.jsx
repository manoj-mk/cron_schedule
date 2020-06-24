import React from "react";
import { Header, Expression } from "../index";
import { Link } from "react-router-dom";
import styles from './cron.module.css';
function Cron({ match, location }) {
  let expression = "";
  if (match) {
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
        <Link to="/examples">Examples</Link>
      </div>
    </div>
  );
} 

export default Cron;
