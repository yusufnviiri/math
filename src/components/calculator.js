import React, { Component } from 'react';
import calculate from './logic/calculator';

export default class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total: null,
      next: null,
      operation: null,

    };
    this.clickFunction = this.clickFunction.bind(this);
  }

clickFunction =(e) => {
  this.setState((currentState) => calculate({
    total: currentState.total,
    next: currentState.next,
    operation: currentState.operation,
  }, e.target.name));
}

render() {
  const { total, next, operation } = this.state;

  return (
    <div className="wrapper">
      <p>Let&apos;s do some Math</p>
      <div className="container">

        <button type="button" className="row">
          {total || ''}
          {operation || ''}
          {next || ''}
        </button>

        <button type="button" onClick={this.clickFunction} name="AC" className="clear">AC</button>
        <button type="button" onClick={this.clickFunction} name="+/-" className="sign">+/-</button>
        <button type="button" onClick={this.clickFunction} name="%" className="percent">%</button>
        <button type="button" onClick={this.clickFunction} name="÷" className="calc">÷</button>

        <button type="button" onClick={this.clickFunction} name="7" className="seven">7</button>

        <button type="button" onClick={this.clickFunction} name="8" className="eight">8</button>
        <button type="button" onClick={this.clickFunction} name="9" className="nine">9</button>
        <button type="button" onClick={this.clickFunction} name="x" className="calc">x</button>

        <button type="button" onClick={this.clickFunction} name="4" className="four">4</button>
        <button type="button" onClick={this.clickFunction} name="5" className="five">5</button>
        <button type="button" onClick={this.clickFunction} name="6" className="six">6</button>
        <button type="button" onClick={this.clickFunction} name="-" className="calc">-</button>

        <button type="button" onClick={this.clickFunction} name="1" className="one">1</button>
        <button type="button" onClick={this.clickFunction} name="2" className="two">2</button>
        <button type="button" onClick={this.clickFunction} name="3" className="three">3</button>
        <button type="button" onClick={this.clickFunction} name="+" className="calc">+</button>

        <button type="button" onClick={this.clickFunction} name="0" className="zero">0</button>
        <button type="button" onClick={this.clickFunction} name="." className="decimal">.</button>
        <button type="button" onClick={this.clickFunction} name="=" className="calc">=</button>

      </div>
    </div>

  );
}
}
