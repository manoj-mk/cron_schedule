import React from "react";
import { Header, Expression } from "./components";
import styles from "./App.module.css";
import { Link, MemoryRouter as Router, Switch } from "react-router-dom";
import Example from "./components/examples/examples";
function App({ match, location }) {
  let expression = "";
  if (match) {
    // expression = match ? match.params.example : null;
  }
  if (expression) {
    expression = expression.replace("^", "/");
  }

  return (
    
      <div className={styles.App}>
        <Header />
        <Expression expression={expression} isAllMatched={true} />
          <div className={styles.examples_link}>
          <Router>
            <Link to="/examples">Examples</Link>
          </Router>
        </div>
      </div>
    
  );
}

export default App;
