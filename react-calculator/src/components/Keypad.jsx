import React from 'react'

const btns = [
  { t: 'C', f: 'handleClear' }, { t: '%', f: 'handleOperationClick' }, { t: '+/-', f: 'toggleNegative' }, { t: '/', f: 'handleOperationClick' },
  { t: '7', f: 'handleNumberClick' }, { t: '8', f: 'handleNumberClick' }, { t: '9', f: 'handleNumberClick' }, { t: '*', f: 'handleOperationClick' },
  { t: '4', f: 'handleNumberClick' }, { t: '5', f: 'handleNumberClick' }, { t: '6', f: 'handleNumberClick' }, { t: '-', f: 'handleOperationClick' },
  { t: '1', f: 'handleNumberClick' }, { t: '2', f: 'handleNumberClick' }, { t: '3', f: 'handleNumberClick' }, { t: '+', f: 'handleOperationClick' },
  { t: '0', f: 'handleNumberClick' }, { t: '.', f: 'handleNumberClick' }, { t: '=', f: 'handleEqualClick' }
]

const Keypad = (props) => (
  <div className="keypad">
    {btns.map(({ t, f }) => <button key={t} onClick={() => props[f](t)}>{t}</button>)}
  </div>
)

export default Keypad
