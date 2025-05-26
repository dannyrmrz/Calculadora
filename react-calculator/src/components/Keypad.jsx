import React from 'react'
const btns = [
  { t: 'C', f: 'onClear' }, { t: '%', f: 'onOperation' }, { t: '+/-', f: 'onToggleNegative' }, { t: '/', f: 'onOperation' },
  { t: '7', f: 'onNumber' }, { t: '8', f: 'onNumber' }, { t: '9', f: 'onNumber' }, { t: '*', f: 'onOperation' },
  { t: '4', f: 'onNumber' }, { t: '5', f: 'onNumber' }, { t: '6', f: 'onNumber' }, { t: '-', f: 'onOperation' },
  { t: '1', f: 'onNumber' }, { t: '2', f: 'onNumber' }, { t: '3', f: 'onNumber' }, { t: '+', f: 'onOperation' },
  { t: '0', f: 'onNumber' }, { t: '.', f: 'onNumber' }, { t: '=', f: 'onEqual' }
]
const Keypad = props => (
  <div className="keypad">
    {btns.map(({ t, f }) =>
      <button key={t} onClick={() => props[f](f === 'onOperation' || f === 'onNumber' ? t : undefined)}>{t}</button>
    )}
  </div>
)
export default Keypad
