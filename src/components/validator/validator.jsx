import React from "react";
import styles from './validator.module.css';
const Validator = ({isMatchArray,current}) => {

  return (
    <>
      <div className={styles.validator} >
        <span  className={styles.validator_item} style={{backgroundColor:isMatchArray[0]?"white":"red",color:current===0?"blue":"black"}} >minute</span>
        <span  className={styles.validator_item} style={{backgroundColor:isMatchArray[1]?"white":"red",color:current===1?"blue":"black"}} >hour</span>
        <span  className={styles.validator_item} style={{backgroundColor:isMatchArray[2]?"white":"red",color:current===2?"blue":"black"}} >day(month)</span>
        <span  className={styles.validator_item} style={{backgroundColor:isMatchArray[3]?"white":"red",color:current===3?"blue":"black"}} >month</span>
        <span  className={styles.validator_item} style={{backgroundColor:isMatchArray[4]?"white":"red",color:current===4?"blue":"black"}} >day(week)</span>
      </div>
    </>
  );
};

export default Validator;
