import React from "react";
import styles from './validator.module.css';
const Validator = ({isMatchArray,current}) => {

  return (
    <>
      <div className={styles.validator} >
        <span  className={styles.validator_item} style={{backgroundColor:isMatchArray[0]?"white":"red",color:current===0?"green":"black",fontWeight:current===0?"bold":"normal"}} >minute</span>
        <span  className={styles.validator_item} style={{backgroundColor:isMatchArray[1]?"white":"red",color:current===1?"green":"black",fontWeight:current===1?"bold":"normal"}} >hour</span>
        <span  className={styles.validator_item} style={{backgroundColor:isMatchArray[2]?"white":"red",color:current===2?"green":"black",fontWeight:current===2?"bold":"normal"}} >day(month)</span>
        <span  className={styles.validator_item} style={{backgroundColor:isMatchArray[3]?"white":"red",color:current===3?"green":"black",fontWeight:current===3?"bold":"normal"}} >month</span>
        <span  className={styles.validator_item} style={{backgroundColor:isMatchArray[4]?"white":"red",color:current===4?"green":"black",fontWeight:current===4?"bold":"normal"}} >day(week)</span>
      </div>
    </>
  );
};

export default Validator;
