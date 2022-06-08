import React, { useState } from 'react';
import Button from './button';
import calculate from '../logic/calculate';
import './css/calculator.css';

const Calculator = () => {
  const [state, setState] = useState({ total: 0, next: null, operation: null });

  const onClick = (event) => {
    const result = calculate(state, event.target.id);
    setState(result);
  };

  const buttons = [
    { id: 'AC', className: 'btn_center', onClick: { onClick } },
    { id: '+/-', className: 'btn_center', onClick: { onClick } },
    { id: '%', className: 'btn_center', onClick: { onClick } },
    { id: '/', className: 'btn_left', onClick: { onClick } },
    { id: '7', className: 'btn_center', onClick: { onClick } },
    { id: '8', className: 'btn_center', onClick: { onClick } },
    { id: '9', className: 'btn_center', onClick: { onClick } },
    { id: 'x', className: 'btn_left', onClick: { onClick } },
    { id: '4', className: 'btn_center', onClick: { onClick } },
    { id: '5', className: 'btn_center', onClick: { onClick } },
    { id: '6', className: 'btn_center', onClick: { onClick } },
    { id: '-', className: 'btn_left', onClick: { onClick } },
    { id: '1', className: 'btn_center', onClick: { onClick } },
    { id: '2', className: 'btn_center', onClick: { onClick } },
    { id: '3', className: 'btn_center', onClick: { onClick } },
    { id: '+', className: 'btn_left', onClick: { onClick } },
    { id: '0', className: 'btn_center doublespan', onClick: { onClick } },
    { id: '.', className: 'btn_center', onClick: { onClick } },
    { id: '=', className: 'btn_left', onClick: { onClick } },
  ];

  return (
    <>
      <h1 className="title_home">Let&apos;s do some maths:</h1>
      <div className="calculate">
        <div className="container">
          <div className="container_calc">
            <div className="output">
              <span>{state.total}</span>
              <span>{state.operation}</span>
              <span>{state.next}</span>
            </div>
            <div className="grid-container">

              {buttons.map((btn) => (
                <Button
                  key={btn.id}
                  id={btn.id}
                  className={btn.className}
                  onClick={onClick}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calculator;
