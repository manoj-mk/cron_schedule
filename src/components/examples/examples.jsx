import React from "react";
import styles from "./examples.module.css";
import {Link} from 'react-router-dom';
const Example = () => {
  return (
    <>
        <h1 style={{textAlign:"center"}} >Examples</h1>
      <div className={styles.examples}>
        <ul className={styles.examples_left}>
          <Link className={styles.example_link}  to="examples/1 * * * *" >every 1 minute </Link>
          <Link className={styles.example_link}  to="examples/* * * * *" >At every minute</Link>
          <Link className={styles.example_link}  to="examples/2 * * * *" > every 2 minute </Link>
          <Link className={styles.example_link} > every sunday </Link>
          <Link className={styles.example_link} > every monday </Link>
        </ul>
        <ul className={styles.examples_right}>
          <Link className={styles.example_link} >every weekday</Link>
          <Link className={styles.example_link} >every month </Link>
          <Link className={styles.example_link} > daily </Link>
          <Link className={styles.example_link} > every  morning </Link>
          <Link className={styles.example_link} > every midnight </Link>
        </ul>
      </div>
    </>
  );
};

export default Example;
