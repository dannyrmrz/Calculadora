import { useState } from 'react'

const MAX_LENGTH = 9
const MAX_VALUE = 999999999

const useCalculatorLogic = () => {
  const [display, setDisplay] = useState('0')
  const [operation, setOperation] = useState(null)
  const [previousValue, setPreviousValue] = useState(null)
  const [waitingForOperand, setWaitingForOperand] = useState(false)

  const setSafeDisplay = val => {
    if (Math.abs(val) > MAX_VALUE) {
      setDisplay('ERROR')
      return
    }
    const str = String(val)
    if (str.replace('-', '').length > MAX_LENGTH) {
      setDisplay('ERROR')
      return
    }
    setDisplay(str)
  }

  const handleNumberClick = num => {
    if (display === 'ERROR') return
    if (waitingForOperand) {
      setDisplay(num === '.' ? '0.' : num)
      setWaitingForOperand(false)
    } else {
      if (display.length >= MAX_LENGTH) return
      if (num === '.' && display.includes('.')) return
      setDisplay(display === '0' && num !== '.' ? num : display + num)
    }
  }

  const handleOperationClick = op => {
    if (display === 'ERROR') return
    setPreviousValue(Number(display))
    setOperation(op)
    setWaitingForOperand(true)
  }

  const handleEqualClick = () => {
    if (display === 'ERROR' || operation === null || previousValue === null) return
    let result
    const current = Number(display)
    switch (operation) {
      case '+': result = previousValue + current; break
      case '-': result = previousValue - current; break
      case '*': result = previousValue * current; break
      case '/': result = current === 0 ? 'ERROR' : previousValue / current; break
      case '%': result = previousValue % current; break
      default: return
    }
    if (result === 'ERROR' || Math.abs(result) > MAX_VALUE) {
      setDisplay('ERROR')
    } else {
      setSafeDisplay(Number(result.toFixed(8)))
    }
    setOperation(null)
    setPreviousValue(null)
    setWaitingForOperand(true)
  }

  const handleClear = () => {
    setDisplay('0')
    setOperation(null)
    setPreviousValue(null)
    setWaitingForOperand(false)
  }

  const toggleNegative = () => {
    if (display === 'ERROR') return
    if (display.startsWith('-')) {
      setDisplay(display.slice(1))
    } else if (display !== '0' && display.length < MAX_LENGTH) {
      setDisplay('-' + display)
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