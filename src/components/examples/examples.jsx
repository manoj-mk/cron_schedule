import React from "react";
import styles from "./examples.module.css";
import {Link} from 'react-router-dom';
const Example = () => {
  return (
    <>
        <h1 style={{textAlign:"center"}} >Examples</h1>
      <div className={styles.examples}>
        <ul className={styles.examples_left}>
          <Link className={styles.example_link}  to="examples/* * * * *" >every minute </Link>
          <Link className={styles.example_link}  to="examples/*^1 * * * *" >every 1 minute</Link>
          <Link className={styles.example_link}  to="examples/*^2 * * * *" > every 2 minute </Link>
          <Link className={styles.example_link} to="examples/0 0 * * SUN" > every sunday </Link>
          <Link className={styles.example_link} to="examples/0 0 * * MON" > every monday </Link>
        </ul>
        <ul className={styles.examples_right}>
          <Link className={styles.example_link} to="examples/0 0 * * 1-5" >Monday to friday</Link>
          <Link className={styles.example_link} to="examples/0 0 1 * *" >every month </Link>
          <Link className={styles.example_link} to="examples/0 0 * * 0" > Weekly </Link>
          <Link className={styles.example_link} to="examples/0 9 * * * " > every  morning </Link>
          <Link className={styles.example_link} to="examples/0 0 * * *" > Daily </Link>
        </ul>
      </div>
    </>
  );
};

export default Example;
