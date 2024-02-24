import { Global, ThemeProvider } from '@emotion/react'
import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { CheckInput } from '..'
import { ResetStyle } from '../../foundation'
import { DEFAULT_THEME } from '../../themes'

const meta = {
  title: 'Component/Input/Check',
  component: CheckInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  decorators: [
    Story => (
      <>
        <Global styles={ResetStyle} />
        <ThemeProvider theme={DEFAULT_THEME}>
          <Story />
        </ThemeProvider>
      </>
    ),
  ],
} satisfies Meta<typeof CheckInput>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    checkColor: 'Primary',
    children: 'Check Input',
  },
}

export const Success: Story = {
  args: {
    checkColor: 'Success',
    children: 'Check Input',
  },
}

export const Danger: Story = {
  args: {
    checkColor: 'Danger',
    children: 'Check Input',
  },
}

export const Warning: Story = {
  args: {
    checkColor: 'Warning',
    children: 'Check Input',
  },
}

export const Focus: Story = {
  args: {
    checkColor: 'Focus',
    children: 'Check Input',
  },
}
