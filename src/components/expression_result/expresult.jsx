import React from "react";
import styles from "./expresult.module.css";
import helper from "../helper/helper";

const ExpResult = ({ expression, isAllMatched, current }) => {
  if (!isAllMatched)
    return (
      <>
        <div className={styles.result_container}></div>
      </>
    );
  let [min,h, d, mon, dy,flag] = expression
    ? helper.getReadableExpression(expression)
    : "";
  return (
    <>
      <div className={styles.result_container}>
        <h1 className={styles.result_content}>
          At 
          <span style={{color:(current===(flag?1:0))?"green":""}} >{min}</span>
          <span style={{color:(current===(flag?0:1))?"green":""}} >{h}</span>
          <span style={{color:(current===2)?"green":""}} >{d}</span>
          <span style={{color:(current===4)?"green":""}} >{dy}</span>
          <span style={{color:(current===3)?"green":""}} >{mon}</span>
        </h1>
      </div>
    </>
  );
};

export default ExpResult;
