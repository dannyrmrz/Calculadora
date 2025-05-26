import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Keypad from '../components/Keypad'

describe('Keypad Component', () => {
  let handleButtonClick

  beforeEach(() => {
    handleButtonClick = jest.fn()
  })

  test('renders all buttons', () => {
    const { getByText } = render(<Keypad onButtonClick={handleButtonClick} />)
    const buttons = ['1', '2', '3', '+', '4', '5', '6', '-', '7', '8', '9', '*', '0', '=', '/']
    
    buttons.forEach(button => {
      expect(getByText(button)).toBeInTheDocument()
    })
  })

  test('calls onButtonClick when a button is clicked', () => {
    const { getByText } = render(<Keypad onButtonClick={handleButtonClick} />)
    const button = getByText('1')
    
    fireEvent.click(button)
    expect(handleButtonClick).toHaveBeenCalledWith('1')
  })

  test('disables buttons correctly when needed', () => {
    const { getByText } = render(<Keypad onButtonClick={handleButtonClick} disabledButtons={['+', '-']} />)
    
    expect(getByText('+')).toBeDisabled()
    expect(getByText('-')).toBeDisabled()
  })
})