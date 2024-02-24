import { Global, ThemeProvider } from '@emotion/react'
import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { OutlineButton } from '..'
import { ResetStyle } from '../../foundation'
import { DEFAULT_THEME } from '../../themes'

const meta = {
  title: 'Component/Button/Outline',
  component: OutlineButton,
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
} satisfies Meta<typeof OutlineButton>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    color: 'Primary',
    children: 'Outline Button',
  },
}

export const Secondary: Story = {
  args: {
    color: 'Secondary',
    children: 'Outline Button',
  },
}

export const Success: Story = {
  args: {
    color: 'Success',
    children: 'Outline Button',
  },
}

export const Danger: Story = {
  args: {
    color: 'Danger',
    children: 'Outline Button',
  },
}

export const Warning: Story = {
  args: {
    color: 'Warning',
    children: 'Outline Button',
  },
}

export const Focus: Story = {
  args: {
    color: 'Focus',
    children: 'Outline Button',
  },
}
