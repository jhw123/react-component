import { Global, ThemeProvider } from '@emotion/react'
import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { ToggleButton } from '..'
import { ResetStyle } from '../../foundation'
import { DEFAULT_THEME } from '../../themes'

const meta = {
  title: 'Component/Button/Toggle',
  component: ToggleButton,
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
} satisfies Meta<typeof ToggleButton>

export default meta
type Story = StoryObj<typeof meta>

export const Secondary: Story = {
  args: {
    left: 'On',
    right: 'Off',
    fill: 'Secondary',
  },
}

export const Success: Story = {
  args: {
    left: 'On',
    right: 'Off',
    fill: 'Success',
  },
}

export const Danger: Story = {
  args: {
    left: 'On',
    right: 'Off',
    fill: 'Danger',
  },
}

export const Warning: Story = {
  args: {
    left: 'On',
    right: 'Off',
    fill: 'Warning',
  },
}

export const Focus: Story = {
  args: {
    left: 'On',
    right: 'Off',
    fill: 'Focus',
  },
}
