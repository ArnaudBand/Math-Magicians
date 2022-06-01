import React from 'react';
import Button from './button';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick = (event) => {
    const result = calculate(this.state, event.target.id);
    this.setState(result);
  };

  render() {
    const { total, next, operation } = this.state;
    return (
      <>
        <div className="output">
          <span>{total}</span>
          <span>{operation}</span>
          <span>{next}</span>
        </div>
        <div className="grid-container">

          <Button className="btn_center" id="AC" onClick={this.onClick} />
          <Button className="btn_center" id="+/-" onClick={this.onClick} />
          <Button className="btn_center" id="%" onClick={this.onClick} />
          <Button className="btn_left" id="/" onClick={this.onClick} />

          <Button className="btn_center" id="7" onClick={this.onClick} />
          <Button className="btn_center" id="8" onClick={this.onClick} />
          <Button className="btn_center" id="9" onClick={this.onClick} />
          <Button className="btn_left" id="x" onClick={this.onClick} />

          <Button className="btn_center" id="4" onClick={this.onClick} />
          <Button className="btn_center" id="5" onClick={this.onClick} />
          <Button className="btn_center" id="6" onClick={this.onClick} />
          <Button className="btn_left" id="-" onClick={this.onClick} />

          <Button className="btn_center" id="1" onClick={this.onClick} />
          <Button className="btn_center" id="2" onClick={this.onClick} />
          <Button className="btn_center" id="3" onClick={this.onClick} />
          <Button className="btn_left" id="+" onClick={this.onClick} />

          <Button className="btn_center doublespan" id="0" onClick={this.onClick} />
          <Button className="btn_center" id="." onClick={this.onClick} />
          <Button className="btn_left" id="=" onClick={this.onClick} />
        </div>

      </>
    );
  }
}

export default Calculator;
