import { useState } from 'react'

const MAX_LENGTH = 9
const MAX_VALUE = 999999999

const useCalculatorLogic = () => {
  const [display, setDisplay] = useState('0')
  const [operation, setOperation] = useState(null)
  const [previousValue, setPreviousValue] = useState(null)
  const [waitingForOperand, setWaitingForOperand] = useState(false)
  const [fullOperation, setFullOperation] = useState('')

  const setSafeDisplay = val => {
    if (Math.abs(val) > MAX_VALUE) {
      setDisplay('ERROR')
      return
    }
    const str = String(val)
    if (str.replace('-', '').length > MAX_LENGTH) {
      // Para resultados periódicos
      const truncated = Number(val).toFixed(MAX_LENGTH - str.split('.')[0].length - 1)
      setDisplay(truncated)
      return
    }
    setDisplay(str)
  }

  const handleNumberClick = num => {
    if (display === 'ERROR') return
    if (waitingForOperand) {
      setDisplay(num === '.' ? '0.' : num)
      setWaitingForOperand(false)
      setFullOperation(previousValue + operation + (num === '.' ? '0.' : num))
    } else {
      if (display.length >= MAX_LENGTH) return
      if (num === '.' && display.includes('.')) return
      const newDisplay = display === '0' && num !== '.' ? num : display + num
      setDisplay(newDisplay)
      if (operation) {
        setFullOperation(previousValue + operation + newDisplay)
      } else {
        setFullOperation(newDisplay)
      }
    }
  }

  const handleOperationClick = op => {
    if (display === 'ERROR') return
    setPreviousValue(display)
    setOperation(op)
    setWaitingForOperand(true)
    setFullOperation(display + op)
  }

  const handleEqualClick = () => {
    if (display === 'ERROR' || operation === null || previousValue === null) return
    let result
    const current = Number(display)
    const prev = Number(previousValue)
    switch (operation) {
      case '+': result = prev + current; break
      case '-': result = prev - current; break
      case '*': result = prev * current; break
      case '/': 
        if (current === 0) {
          setDisplay('ERROR')
          setFullOperation('ERROR')
          return
        }
        result = prev / current
        break
      case '%': result = prev % current; break
      default: return
    }

    if (Math.abs(result) > MAX_VALUE) {
      setDisplay('ERROR')
      setFullOperation('ERROR')
    } else {
      const resultStr = result.toString()
      let finalResult = resultStr
      
      if (resultStr.includes('.')) {
        const integerPart = resultStr.split('.')[0]
        const maxDecimals = MAX_LENGTH - integerPart.length - 1
        if (maxDecimals > 0) {
          finalResult = Number(result).toFixed(maxDecimals).replace(/\.?0+$/, '')
        } else {
          finalResult = integerPart
        }
      }
      
      setSafeDisplay(finalResult)
      setFullOperation(finalResult)
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
    setFullOperation('')
  }

  const toggleNegative = () => {
    if (display === 'ERROR') return
    if (display.startsWith('-')) {
      setDisplay(display.slice(1))
      setFullOperation(fullOperation.replace('-', ''))
    } else if (display !== '0' && display.length < MAX_LENGTH) {
      setDisplay('-' + display)
      setFullOperation('-' + fullOperation)
    }
  }

  return {
    display: fullOperation || display,
    handleNumberClick,
    handleOperationClick,
    handleEqualClick,
    handleClear,
    toggleNegative,
  }
}

export default useCalculatorLogic