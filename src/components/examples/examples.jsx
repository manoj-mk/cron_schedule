import React from "react";
import styles from "./examples.module.css";
import {Link} from 'react-router-dom';
const Example = () => {
  return (
    <div className={styles.example_comp} >
        <h1 style={{textAlign:"center"}} >Cron Examples</h1>
      <div className={styles.examples}>
        <ul className={styles.examples_left}>
          <Link className={styles.example_link}  to="examples/* * * * *" >every minute </Link>
          <Link className={styles.example_link}  to="examples/*^1 * * * *" >every 1 minute</Link>
          <Link className={styles.example_link}  to="examples/*^2 * * * *" > every 2 minute </Link>
          <Link className={styles.example_link} to="examples/0 0 * * SUN" > every sunday </Link>
          <Link className={styles.example_link} to="examples/0 0 * * MON" > every monday </Link>
          <Link className={styles.example_link} to="examples/0 0 * * TUE" > every tuesday </Link>
          <Link className={styles.example_link} to="examples/*^30 * * * *" > every 30 minute </Link>
          <Link className={styles.example_link} to="examples/0 *^4 * * *" > every 4 hours </Link>
          <Link className={styles.example_link} to="examples/0 *^6 * * *" > every 6 hours </Link>
          <Link className={styles.example_link} to="examples/0 *^12 * * *" > every 12 hours </Link>
        </ul>
        <ul className={styles.examples_right}>
          <Link className={styles.example_link} to="examples/0 0 * * 1-5" >Monday to friday</Link>
          <Link className={styles.example_link} to="examples/0 0 1 * *" >every month </Link>
          <Link className={styles.example_link} to="examples/0 0 * * 0" > Weekly </Link>
          <Link className={styles.example_link} to="examples/0 9 * * * " > every  morning </Link>
          <Link className={styles.example_link} to="examples/0 0 * * *" > Daily </Link>
          <Link className={styles.example_link} to="examples/*^10 * * * *" > every 10 minutes </Link>
          <Link className={styles.example_link} to="examples/*^30 * * * *" > every half hour </Link>
          <Link className={styles.example_link} to="examples/0 * * * *" > once a month </Link>
          <Link className={styles.example_link} to="examples/0 * * * FRI" > once a week </Link>
          <Link className={styles.example_link} to="examples/0 0 *^15 * *" > every 15 days </Link>
        </ul>
      </div>
    </div>
  );
};

export default Example;
