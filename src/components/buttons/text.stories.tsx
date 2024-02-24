import { Global, ThemeProvider } from '@emotion/react'
import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { TextButton } from '..'
import { ResetStyle } from '../../foundation'
import { DEFAULT_THEME } from '../../themes'

const meta = {
  title: 'Component/Button/Text',
  component: TextButton,
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
} satisfies Meta<typeof TextButton>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    color: 'Primary',
    children: 'Text Button',
  },
}

export const Secondary: Story = {
  args: {
    color: 'Secondary',
    children: 'Text Button',
  },
}

export const Success: Story = {
  args: {
    color: 'Success',
    children: 'Text Button',
  },
}

export const Danger: Story = {
  args: {
    color: 'Danger',
    children: 'Text Button',
  },
}

export const Warning: Story = {
  args: {
    color: 'Warning',
    children: 'Text Button',
  },
}

export const Focus: Story = {
  args: {
    color: 'Focus',
    children: 'Text Button',
  },
}
