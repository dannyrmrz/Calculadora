import React from 'react'
import Display from '../components/Display'

export default {
  title: 'Calculator/Display',
  component: Display,
}

const Template = (args) => <Display {...args} />

export const Default = Template.bind({})
Default.args = {
  value: '0',
}

export const WithValue = Template.bind({})
WithValue.args = {
  value: '123456789',
}

export const ErrorState = Template.bind({})
ErrorState.args = {
  value: 'ERROR',
}

export const WithDecimal = Template.bind({})
WithDecimal.args = {
  value: '123.45',
}