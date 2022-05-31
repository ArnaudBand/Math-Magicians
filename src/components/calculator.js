import React from 'react';

export default class Calculator extends React.PureComponent {
  render() {
    return (
      <div className="grid-container">

        <button className="btn_center" type="button">AC</button>
        <button className="btn_center" type="button">+/-</button>
        <button className="btn_center" type="button">%</button>
        <button className="btn_left" type="button">/</button>

        <button className="btn_center" type="button">7</button>
        <button className="btn_center" type="button">8</button>
        <button className="btn_center" type="button">9</button>
        <button className="btn_left" type="button">X</button>

        <button className="btn_center" type="button">4</button>
        <button className="btn_center" type="button">5</button>
        <button className="btn_center" type="button">6</button>
        <button className="btn_left" type="button">-</button>

        <button className="btn_center" type="button">1</button>
        <button className="btn_center" type="button">2</button>
        <button className="btn_center" type="button">3</button>
        <button className="btn_left" type="button">+</button>

        <button className="btn_center doublespan" type="button">0</button>
        <button className="btn_center" type="button">.</button>
        <button className="btn_left" type="button">=</button>
      </div>
    );
  }
}
