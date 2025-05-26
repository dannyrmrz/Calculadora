import React from 'react'
import Keypad from '../components/Keypad'

export default {
  title: 'Keypad',
  component: Keypad,
}

const Template = (args) => <Keypad {...args} />

export const Default = Template.bind({})
Default.args = {
  onButtonClick: (value) => console.log(value),
}

export const WithOperations = Template.bind({})
WithOperations.args = {
  onButtonClick: (value) => console.log(value),
  operations: ['+', '-', '*', '/'],
}