import { useState } from 'react'

const useCalculatorLogic = () => {
  const [display, setDisplay] = useState('')
  const [operation, setOperation] = useState(null)
  const [previousValue, setPreviousValue] = useState(null)

  const handleNumberClick = (number) => {
    if (display.length < 9) {
      setDisplay((prev) => prev + number)
    }
  }

  const handleOperationClick = (op) => {
    if (display) {
      if (previousValue === null) {
        setPreviousValue(display)
      } else {
        calculateResult()
      }
      setOperation(op)
      setDisplay('')
    }
  }

  const calculateResult = () => {
    if (previousValue !== null && display) {
      const num1 = parseFloat(previousValue)
      const num2 = parseFloat(display)
      let result

      switch (operation) {
        case '+':
          result = num1 + num2
          break
        case '-':
          result = num1 - num2
          break
        case '*':
          result = num1 * num2
          break
        case '/':
          result = num2 !== 0 ? num1 / num2 : 'ERROR'
          break
        case '%':
          result = num1 % num2
          break
        default:
          return
      }

      if (result < 0 || result > 999999999) {
        setDisplay('ERROR')
      } else {
        setDisplay(result.toString().slice(0, 9))
      }
      setPreviousValue(null)
      setOperation(null)
    }
  }

  const handleEqualClick = () => {
    calculateResult()
  }

  const handleClear = () => {
    setDisplay('')
    setPreviousValue(null)
    setOperation(null)
  }

  const toggleNegative = () => {
    if (display) {
      setDisplay((prev) => (prev.startsWith('-') ? prev.slice(1) : '-' + prev))
    }
  }

  return {
    display,
    handleNumberClick,
    handleOperationClick,
    handleEqualClick,
    handleClear,
    toggleNegative,
  }
}

export default useCalculatorLogic