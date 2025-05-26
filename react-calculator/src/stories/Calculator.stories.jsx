import React from 'react'
import Calculator from '../components/Calculator'

export default {
  title: 'Calculator',
  component: Calculator,
}

const Template = (args) => <Calculator {...args} />

export const Default = Template.bind({})
Default.args = {}

export const WithInput = Template.bind({})
WithInput.args = {
  initialInput: '123',
}

export const WithError = Template.bind({})
WithError.args = {
  initialInput: 'ERROR',
}

export const WithResult = Template.bind({})
WithResult.args = {
  initialInput: '456',
  result: '789',
}