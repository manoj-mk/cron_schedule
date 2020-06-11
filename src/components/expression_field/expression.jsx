import React, { Component } from "react";
import styles from "./expression.module.css";
import Validator from "../validator/validator";
import ExpResult from "../expression_result/expresult";
import helper from "../helper/helper";
import Rule from '../rules/rules';
import Example from "../examples/examples";
class Expression extends Component {
  state = {
    expression: "",
    isMinuteMatched: false,
    isMatchArray: [],
    isAllMatched: false,
    current: 0,
  };
  handleChange = (e) => {
    this.setState({ expression: e.target.value });
    let result, matchCount;
    [result, matchCount] = helper.checkForMatch(e.target.value);
    if (matchCount === 5) {
      this.setState({ isAllMatched: true });
    } else {
      this.setState({ isAllMatched: false });
    }
    this.setState({ isMatchArray: result });
  };
  static getDerivedStateFromProps(nextProps,prevProps){
    console.log("in compo",nextProps.expression,nextProps.isAllMatched);
    return ({expression:nextProps.expression,isAllMatched:nextProps.isAllMatched});
  }
  handlePos = (e) => {
    const ind = e.target.selectionStart;
    let exp = this.state.expression;
    let split_ = exp.slice(0,ind);
    split_ = split_.match(/\s+/g);
    let tar;
    if(split_){
      tar = split_.length;
    }
    else tar=0;
    this.setState({current:tar});
  };
  handleExamples = ({expression,isAllMatched}) => {
    this.setState({expression,isAllMatched});
  };
  render() {
    return (
      <>
        <div className={styles.result}>
          <ExpResult
            expression={this.state.expression}
            isAllMatched={this.state.isAllMatched}
            current={this.state.current}
          />
        </div>
        <div className={styles.expression}>
          <input
            style={{border:this.state.isAllMatched?"solid 1px":"solid 1px red"}}
            onChange={this.handleChange}
            onKeyUp={this.handlePos}
            value={this.state.expression}
            type="text"
            name="expression_field"
            id="expression_field"
          />
        </div>
        <Validator isMatchArray={this.state.isMatchArray} current={this.state.current} />
        <div className={styles.rules}>
          <ul>
            <li className={styles.rules_item} ><span>*</span> any value</li>
            <li className={styles.rules_item} ><span>-</span> range of values</li>
            <li className={styles.rules_item} ><span>/</span> step values</li>
          </ul>
          <Rule active={this.state.current} />
        </div>
        <div className={styles.description}>
          We created Cronitor because cron itself can't alert you if your jobs
          fail or never start. Cronitor is easy to integrate and provides you
          with instant alerts when things go wrong. Learn more about cron job
          monitoring.
        </div>

      </>
    );
  }
}

export default Expression;
