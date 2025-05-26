import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Button from '../components/Button'

describe('Button Component', () => {
  it('renders the button with the correct label', () => {
    const { getByText } = render(<Button label="1" onClick={() => {}} />)
    expect(getByText('1')).toBeInTheDocument()
  })

  it('calls the onClick handler when clicked', () => {
    const handleClick = jest.fn()
    const { getByText } = render(<Button label="2" onClick={handleClick} />)
    fireEvent.click(getByText('2'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('renders correctly with different labels', () => {
    const { getByText } = render(<Button label="+" onClick={() => {}} />)
    expect(getByText('+')).toBeInTheDocument()
  })
})