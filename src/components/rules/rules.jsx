import React from "react";
import styles from './rules.module.css';
const Rule = ({active}) => {
  const allowed = styles.allowed;
  return (

    <>
      <ul style={{display:active===0?"":"none"}} >
        <li><span allowed >0-59</span> allowed values</li>
      </ul>
      <ul style={{display:active===1?"":"none"}} >
        <li><span allowed >0-23</span> allowed values</li>
      </ul>
      <ul style={{display:active===2?"":"none"}} >
        <li><span allowed >1-31</span> allowed values</li>
      </ul>
      <ul style={{display:active===3?"":"none"}} >
        <li><span allowed >1-12</span> allowed values</li>
        <li><span allowed >JAN-DEC</span> alternative single values</li>
      </ul>
      <ul style={{display:active===4?"":"none"}} >
        <li><span allowed >0-6</span> allowed values</li>
        <li><span allowed >SUN-SAT</span> alternative single values</li>
      </ul>
    </>
  );
};

export default Rule;
