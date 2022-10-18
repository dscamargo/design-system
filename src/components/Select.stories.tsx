import { Meta, StoryObj } from '@storybook/react'
import { Select, SelectProps } from './Select'

export default {
  title: 'Components/Select',
  component: Select,
  args: {
    onChange: (evt) => {
      console.log('Selected: ', evt.target.value)
    },
    options: [
      { label: 'Option 01', value: '01', selected: false },
      { label: 'Option 02', value: '02', selected: true }
    ]
  },
  argTypes: {
    onChange: {
      table: {
        disable: true
      }
    }
  }
} as Meta<SelectProps>

export const Default = {} as StoryObj<SelectProps>

