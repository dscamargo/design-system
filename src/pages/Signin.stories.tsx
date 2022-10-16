import { Meta, StoryObj } from '@storybook/react'
import { within, userEvent, waitFor } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import { Signin } from './Signin'
import { rest } from 'msw'

export default {
  title: 'Pages/Sign in',
  component: Signin,
  args: {},
  argTypes: {},
  parameters: {
    msw: {
      handlers: [
        rest.post('/sessions', (req, res, ctx) => {
          return res(ctx.json({ok: true}))
        })
      ]
    }
  }
} as Meta

export const Default = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    userEvent.type(canvas.getByPlaceholderText('Digite seu e-mail'), 'admin@dscamargo.com')
    userEvent.type(canvas.getByPlaceholderText('*********'), 'mypassword')

    userEvent.click(canvas.getByRole('button'))
    await waitFor(() => {
      expect(canvas.getByText('Login realizado')).toBeInTheDocument()
    })
  }
} as StoryObj
