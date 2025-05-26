import React from 'react'

const Keypad = ({
  onNumber,
  onOperation,
  onEqual,
  onClear,
  onToggleNegative
}) => (
  <div className="keypad">
    <button onClick={onClear}>C</button>
    <button onClick={() => onOperation('%')}>%</button>
    <button onClick={onToggleNegative}>+/-</button>
    <button onClick={() => onOperation('/')}>/</button>
    <button onClick={() => onNumber('7')}>7</button>
    <button onClick={() => onNumber('8')}>8</button>
    <button onClick={() => onNumber('9')}>9</button>
    <button onClick={() => onOperation('*')}>*</button>
    <button onClick={() => onNumber('4')}>4</button>
    <button onClick={() => onNumber('5')}>5</button>
    <button onClick={() => onNumber('6')}>6</button>
    <button onClick={() => onOperation('-')}>-</button>
    <button onClick={() => onNumber('1')}>1</button>
    <button onClick={() => onNumber('2')}>2</button>
    <button onClick={() => onNumber('3')}>3</button>
    <button onClick={() => onOperation('+')}>+</button>
    <button onClick={() => onNumber('0')}>0</button>
    <button onClick={() => onNumber('.')}>.</button>
    <button onClick={onEqual}>=</button>
  </div>
)

export default Keypad