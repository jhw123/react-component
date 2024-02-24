import { Global, ThemeProvider } from '@emotion/react'
import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { RadioInput } from '..'
import { ResetStyle } from '../../foundation'
import { DEFAULT_THEME } from '../../themes'

const meta = {
  title: 'Component/Input/Radio',
  component: RadioInput,
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
} satisfies Meta<typeof RadioInput>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    fill: 'Primary',
    children: 'Radio Input',
  },
}

export const Secondary: Story = {
  args: {
    fill: 'Secondary',
    children: 'Radio Input',
  },
}

export const Success: Story = {
  args: {
    fill: 'Success',
    children: 'Radio Input',
  },
}

export const Danger: Story = {
  args: {
    fill: 'Danger',
    children: 'Radio Input',
  },
}

export const Warning: Story = {
  args: {
    fill: 'Warning',
    children: 'Radio Input',
  },
}

export const Focus: Story = {
  args: {
    fill: 'Focus',
    children: 'Radio Input',
  },
}
