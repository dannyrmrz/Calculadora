import React from 'react'
import { render } from '@testing-library/react'
import Display from '../components/Display'

describe('Display Component', () => {
  it('renders the correct value', () => {
    const { getByText } = render(<Display value="123" />)
    expect(getByText('123')).toBeInTheDocument()
  })

  it('displays ERROR for negative numbers', () => {
    const { getByText } = render(<Display value="-1" />)
    expect(getByText('ERROR')).toBeInTheDocument()
  })

  it('displays ERROR for numbers greater than 999999999', () => {
    const { getByText } = render(<Display value="1000000000" />)
    expect(getByText('ERROR')).toBeInTheDocument()
  })

  it('limits display to 9 characters', () => {
    const { getByText } = render(<Display value="1234567890" />)
    expect(getByText('123456789')).toBeInTheDocument()
  })

  it('renders decimal values correctly', () => {
    const { getByText } = render(<Display value="123.45" />)
    expect(getByText('123.45')).toBeInTheDocument()
  })
})