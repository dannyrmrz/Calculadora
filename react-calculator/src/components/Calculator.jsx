import React from 'react'
import Display from './Display'
import Keypad from './Keypad'
import useCalculatorLogic from '../hooks/useCalculatorLogic'
const Calculator = () => {
  const {display, handleNumberClick, handleOperationClick, handleEqualClick, handleClear, toggleNegative,} = useCalculatorLogic()
  return (
    <div>
      <Display value={display} />
      <Keypad
        onNumber={handleNumberClick}
        onOperation={handleOperationClick}
        onEqual={handleEqualClick}
        onClear={handleClear}
        onToggleNegative={toggleNegative}
      />
    </div>
  )
}
export default Calculator