import React from 'react';
import Button from './button';

export default class Calculator extends React.PureComponent {
  render() {
    return (
      <>
        <div className="output">0</div>

        <div className="grid-container">

          <div><Button className="btn_center" id="AC" onClick={onclick} /></div>
          <div><Button className="btn_center" id="+/-" onClick={onclick} /></div>
          <div><Button className="btn_center" id="%" onClick={onclick} /></div>
          <div><Button className="btn_left" id="/" onClick={onclick} /></div>

          <div><Button className="btn_center" id="7" onClick={onclick} /></div>
          <div><Button className="btn_center" id="8" onClick={onclick} /></div>
          <div><Button className="btn_center" id="9" onClick={onclick} /></div>
          <div><Button className="btn_left" id="x" onClick={onclick} /></div>

          <div><Button className="btn_center" id="4" onClick={onclick} /></div>
          <div><Button className="btn_center" id="5" onClick={onclick} /></div>
          <div><Button className="btn_center" id="6" onClick={onclick} /></div>
          <div><Button className="btn_left" id="-" onClick={onclick} /></div>

          <div><Button className="btn_center" id="1" onClick={onclick} /></div>
          <div><Button className="btn_center" id="2" onClick={onclick} /></div>
          <div><Button className="btn_center" id="3" onClick={onclick} /></div>
          <div><Button className="btn_left" id="+" onClick={onclick} /></div>

          <div><Button className="btn_center doublespan" id="0" onClick={onclick} /></div>
          <div><Button className="btn_center" id="." onClick={onclick} /></div>
          <div><Button className="btn_left" id="=" onClick={onclick} /></div>
        </div>
      </>
    );
  }
}
