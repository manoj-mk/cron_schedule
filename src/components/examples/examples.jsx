import React from "react";
import styles from "./examples.module.css";
import {Link} from 'react-router-dom';
const Example = () => {
  return (
    <>
        <h1 style={{textAlign:"center"}} >Examples</h1>
      <div className={styles.examples}>
        <ul className={styles.examples_left}>
          <Link to="examples/* * * * *" >At every minute</Link>
          <li>At every hour </li>
          <li> At every </li>
          <li> At every </li>
          <li> At every</li>
        </ul>
        <ul className={styles.examples_right}>
          <li>At every minute</li>
          <li>At every hour </li>
          <li> At every </li>
          <li> At every </li>
          <li> At every</li>
        </ul>
      </div>
    </>
  );
};

export default Example;
