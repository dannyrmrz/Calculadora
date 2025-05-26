import React from 'react'
import Button from '../components/Button'

export default {
  title: 'Calculator/Button',
  component: Button,
}

const Template = (args) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  label: '1',
  onClick: () => console.log('Button clicked!'),
}

export const Operation = Template.bind({})
Operation.args = {
  label: '+',
  onClick: () => console.log('Operation button clicked!'),
}

export const Disabled = Template.bind({})
Disabled.args = {
  label: '2',
  onClick: null,
  disabled: true,
}