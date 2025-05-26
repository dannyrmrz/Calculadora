import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Calculator from '../components/Calculator'

describe('Calculator Component', () => {
  beforeEach(() => {
    render(<Calculator />)
  })

  test('displays numbers when buttons are clicked', () => {
    const button1 = screen.getByText('1')
    const button2 = screen.getByText('2')
    const display = screen.getByTestId('display')

    fireEvent.click(button1)
    fireEvent.click(button2)

    expect(display.textContent).toBe('12')
  })

  test('clears display on operation button click', () => {
    const button1 = screen.getByText('1')
    const addButton = screen.getByText('+')
    const display = screen.getByTestId('display')

    fireEvent.click(button1)
    fireEvent.click(addButton)

    expect(display.textContent).toBe('')
  })

  test('shows result after pressing equal button', () => {
    const button1 = screen.getByText('1')
    const button2 = screen.getByText('2')
    const addButton = screen.getByText('+')
    const equalsButton = screen.getByText('=')
    const display = screen.getByTestId('display')

    fireEvent.click(button1)
    fireEvent.click(addButton)
    fireEvent.click(button2)
    fireEvent.click(equalsButton)

    expect(display.textContent).toBe('3')
  })

  test('shows ERROR for negative results', () => {
    const button2 = screen.getByText('2')
    const button1 = screen.getByText('1')
    const subtractButton = screen.getByText('-')
    const equalsButton = screen.getByText('=')
    const display = screen.getByTestId('display')

    fireEvent.click(button1)
    fireEvent.click(subtractButton)
    fireEvent.click(button2)
    fireEvent.click(equalsButton)

    expect(display.textContent).toBe('ERROR')
  })

  test('shows ERROR for results greater than 999999999', () => {
    const button9 = screen.getByText('9')
    const addButton = screen.getByText('+')
    const equalsButton = screen.getByText('=')
    const display = screen.getByTestId('display')

    fireEvent.click(button9)
    fireEvent.click(button9)
    fireEvent.click(button9)
    fireEvent.click(button9)
    fireEvent.click(button9)
    fireEvent.click(button9)
    fireEvent.click(button9)
    fireEvent.click(button9)
    fireEvent.click(button9)
    fireEvent.click(button9)
    fireEvent.click(addButton)
    fireEvent.click(button9)
    fireEvent.click(equalsButton)

    expect(display.textContent).toBe('ERROR')
  })

  test('handles decimal input correctly', () => {
    const button1 = screen.getByText('1')
    const buttonDot = screen.getByText('.')
    const button2 = screen.getByText('2')
    const display = screen.getByTestId('display')

    fireEvent.click(button1)
    fireEvent.click(buttonDot)
    fireEvent.click(button2)

    expect(display.textContent).toBe('1.2')
  })

  test('handles division operation', () => {
    const button6 = screen.getByText('6')
    const button2 = screen.getByText('2')
    const divideButton = screen.getByText('/')
    const equalsButton = screen.getByText('=')
    const display = screen.getByTestId('display')

    fireEvent.click(button6)
    fireEvent.click(divideButton)
    fireEvent.click(button2)
    fireEvent.click(equalsButton)

    expect(display.textContent).toBe('3')
  })

  test('handles modulo operation', () => {
    const button5 = screen.getByText('5')
    const button2 = screen.getByText('2')
    const moduloButton = screen.getByText('%')
    const equalsButton = screen.getByText('=')
    const display = screen.getByTestId('display')

    fireEvent.click(button5)
    fireEvent.click(moduloButton)
    fireEvent.click(button2)
    fireEvent.click(equalsButton)

    expect(display.textContent).toBe('1')
  })

  test('handles +/- operation', () => {
    const button5 = screen.getByText('5')
    const plusMinusButton = screen.getByText('+/-')
    const display = screen.getByTestId('display')

    fireEvent.click(button5)
    fireEvent.click(plusMinusButton)

    expect(display.textContent).toBe('-5')
  })
})