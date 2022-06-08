import calculate from '../logic/calculate';

describe('Testing calculate functions', () => {
  it('Clear the results with AC button', () => {
    const previous = {
      total: '100',
      operation: '',
      next: '',
    };
    const btn = 'AC';
    const expected = {
      total: null,
      operation: null,
      next: null,
    };
    expect(calculate(previous, btn)).toStrictEqual(expected);
  });

  // Number

  it('Updates the number when it is pressed', () => {
    const previous = {};
    const btn = '0';
    const expected = {
      total: null,
      next: btn,
    };
    expect(calculate(previous, btn)).toStrictEqual(expected);
  });

  // dot

  it("Update . when it's pressed", () => {
    const previous = {
      total: null,
      next: '200',
    };
    const btn = '.';
    const expected = {
      total: null,
      next: '200.',
    };
    expect(calculate(previous, btn)).toStrictEqual(expected);
  });

  // Equal

  it('Provide the results with = button', () => {
    const previous = {
      total: '24',
      operation: '+',
      next: '6',
    };
    const btn = '=';
    const expected = {
      total: '30',
      operation: null,
      next: null,
    };
    expect(calculate(previous, btn)).toStrictEqual(expected);
  });

  // +/-

  it("Change number's sign with +/-", () => {
    const previous = {
      total: null,
      next: '3',
    };
    const btn = '+/-';
    const expected = {
      total: null,
      next: '-3',
    };
    expect(calculate(previous, btn)).toStrictEqual(expected);
  });
});
