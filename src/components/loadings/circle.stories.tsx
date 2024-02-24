import { Global, ThemeProvider } from '@emotion/react'
import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { CircleLoading } from '..'
import { ResetStyle } from '../../foundation'
import { DEFAULT_THEME } from '../../themes'

const meta = {
  title: 'Component/Loading/Circle',
  component: CircleLoading,
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
} satisfies Meta<typeof CircleLoading>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    border: 'Primary',
  },
}

export const Secondary: Story = {
  args: {
    border: 'Secondary',
  },
}

export const Success: Story = {
  args: {
    border: 'Success',
  },
}

export const Danger: Story = {
  args: {
    border: 'Danger',
  },
}

export const Warning: Story = {
  args: {
    border: 'Warning',
  },
}

export const Focus: Story = {
  args: {
    border: 'Focus',
  },
}
