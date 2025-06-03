import React from 'react'
import Display from './Display'
import Keypad from './Keypad'
import useCalculatorLogic from '../hooks/useCalculatorLogic'
import useKeyboardInput from '../hooks/useKeyboardInput'

const Calculator = () => {
  const calculatorLogic = useCalculatorLogic()
  useKeyboardInput(calculatorLogic)

  return (
    <div>
      <Display value={calculatorLogic.display} />
      <Keypad {...calculatorLogic} />
    </div>
  )
}

export default Calculator