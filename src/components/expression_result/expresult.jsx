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
  let [time,month] = helper.getReadableExpression(expression);
  return (
    <>
      <div className={styles.result_container}>
        <h1 className={styles.result_content}>At {time + month} </h1>
      </div>
    </>
  );
};

export default ExpResult;
