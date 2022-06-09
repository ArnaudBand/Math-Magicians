import operate from '../logic/operate';

describe('Testing operate functions', () => {
  it('Add two values', () => {
    const result = operate(1, 3, '+');
    expect(result).toEqual('4');
  });

  it('Substract two values', () => {
    const result = operate(1, 3, '-');
    expect(result).toEqual('-2');
  });

  it('Multiply two values', () => {
    const result = operate(1, 3, 'x');
    expect(result).toEqual('3');
  });

  it('Divide two values', () => {
    const result = operate(3, 3, '/');
    expect(result).toEqual('1');
  });

  it('Modulo two values', () => {
    const result = operate(1, 3, '%');
    expect(result).toEqual('1');
  });
});
