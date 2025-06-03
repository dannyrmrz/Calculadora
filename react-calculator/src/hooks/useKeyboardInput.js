import { useEffect } from 'react'

const useKeyboardInput = ({ handleNumberClick, handleOperationClick, handleEqualClick, handleClear }) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (/^[0-9.]$/.test(event.key) || (event.keyCode >= 96 && event.keyCode <= 105)) {
        const num = event.keyCode >= 96 ? String(event.keyCode - 96) : event.key
        handleNumberClick(num)
      }
      switch (event.key) {
        case '+': case '-': case '*': case '/':
          handleOperationClick(event.key); break
        case 'Enter': case '=':
          handleEqualClick(); break
        case 'Escape':
          handleClear(); break
        case '%':
          handleOperationClick('%'); break
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleNumberClick, handleOperationClick, handleEqualClick, handleClear])
}

export default useKeyboardInput 