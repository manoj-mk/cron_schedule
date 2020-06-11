import React from 'react';
import {Header, Expression} from './components';
import styles from './App.module.css';
import {Link} from 'react-router-dom';
import Example from './components/examples/examples';
function App({match,location}) {
  const expression = match.params.example;
  console.log("IN app",expression);
  
  return (
    <div className={styles.App}>
      <Header/>
      <Expression expression={expression} isAllMatched={true} />
      <div className={styles.example_link} >
      <Link to="/examples">Examples</Link>
      </div>
    </div>
  );
} 

export default App;
