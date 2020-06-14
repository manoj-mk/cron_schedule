import React from "react";
import styles from './rules.module.css';
const Rule = ({active}) => {
  return (

    <>
      <ul  className={styles.rules_ul} style={{display:active===0?"":"none"}} >
        <li className={styles.border} ><span className={styles.rule_span}  >0-59</span> allowed values</li>
      </ul>
      <ul className={styles.rules_ul} style={{display:active===1?"":"none"}} >
        <li className={styles.border} ><span className={styles.rule_span} >0-23</span> allowed values</li>
      </ul>
      <ul className={styles.rules_ul} style={{display:active===2?"":"none"}} >
        <li className={styles.border} ><span className={styles.rule_span} >1-31</span> allowed values</li>
      </ul>
      <ul className={styles.rules_ul} style={{display:active===3?"":"none"}} >
        <li className={styles.border} ><span className={styles.rule_span} >1-12</span> allowed values</li>
        <li className={styles.border} ><span className={styles.rule_span} >JAN-DEC</span> alternative single values</li>
      </ul>
      <ul className={styles.rules_ul} style={{display:active===4?"":"none"}} >
        <li className={styles.border} ><span  >0-6</span> allowed values</li>
        <li className={styles.border} ><span  >SUN-SAT</span> alternative single values</li>
      </ul>
    </>
  );
};

export default Rule;
