import React from 'react';
import {Header, Expression} from './components';
import styles from './App.module.css';
function App() {
  return (
    <div className={styles.App}>
      <Header/>
      <Expression/>
    </div>
  );
} 

export default App;
