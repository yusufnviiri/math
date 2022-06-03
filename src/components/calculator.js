import React, { useState } from 'react';
import calculate from './logic/calculator';

const Calculator = () => {
  const [calcState, setCalcState] = useState({
    data: {

      total: null,
      next: null,
      operation: null,
    },

  });

  const clickFunction = (e) => {
    setCalcState(({ data }) => ({ data: calculate(data, e.target.name) }));
  };

  return (
    <div className="container">
      <button type="button" className="row">
        {calcState.data.total || ''}
        {calcState.data.operation || ''}
        {calcState.data.next || ''}
      </button>

      <button type="button" onClick={clickFunction} name="AC" className="clear">AC</button>
      <button type="button" onClick={clickFunction} name="+/-" className="sign">+/-</button>
      <button type="button" onClick={clickFunction} name="%" className="percent">%</button>
      <button type="button" onClick={clickFunction} name="÷" className="calc">÷</button>

      <button type="button" onClick={clickFunction} name="7" className="seven">7</button>

      <button type="button" onClick={clickFunction} name="8" className="eight">8</button>
      <button type="button" onClick={clickFunction} name="9" className="nine">9</button>
      <button type="button" onClick={clickFunction} name="x" className="calc">x</button>

      <button type="button" onClick={clickFunction} name="4" className="four">4</button>
      <button type="button" onClick={clickFunction} name="5" className="five">5</button>
      <button type="button" onClick={clickFunction} name="6" className="six">6</button>
      <button type="button" onClick={clickFunction} name="-" className="calc">-</button>

      <button type="button" onClick={clickFunction} name="1" className="one">1</button>
      <button type="button" onClick={clickFunction} name="2" className="two">2</button>
      <button type="button" onClick={clickFunction} name="3" className="three">3</button>
      <button type="button" onClick={clickFunction} name="+" className="calc">+</button>

      <button type="button" onClick={clickFunction} name="0" className="zero">0</button>
      <button type="button" onClick={clickFunction} name="." className="decimal">.</button>
      <button type="button" onClick={clickFunction} name="=" className="calc">=</button>

    </div>
  );
};
export default Calculator;
