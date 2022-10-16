import { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from './Text'

export default {
  title: 'Components/Text',
  component: Text,
  args: {
    children: 'Hello World Test',
    size: 'md'
  },
  argTypes:{
    size: {
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'inline-radio',
        default: 'md'
      }
    }
  }
} as Meta<TextProps>

export const Default = {} as StoryObj<TextProps>

export const Small = {
  args: {
    size: 'sm'
  }
} as StoryObj<TextProps>

export const Large = {
  args: {
    size: 'lg'
  }
} as StoryObj<TextProps>

export const CustomComponent = {
  args: {
    asChild: true,
    children: (
      <h1>Texto</h1>
    ),
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    },
    asChild: {
      table: {
        disable: true
      }
    }
  }
} as StoryObj<TextProps>