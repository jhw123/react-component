import { Global, ThemeProvider } from '@emotion/react'
import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { BodyText } from '..'
import { ResetStyle } from '../../foundation'
import { DEFAULT_THEME } from '../../themes'

const meta = {
  title: 'Component/Text/Body',
  component: BodyText,
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
} satisfies Meta<typeof BodyText>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    color: 'Primary',
    children: 'Body Text',
  },
}

export const Secondary: Story = {
  args: {
    color: 'Secondary',
    children: 'Body Text',
  },
}

export const Success: Story = {
  args: {
    color: 'Success',
    children: 'Body Text',
  },
}

export const Danger: Story = {
  args: {
    color: 'Danger',
    children: 'Body Text',
  },
}

export const Warning: Story = {
  args: {
    color: 'Warning',
    children: 'Body Text',
  },
}

export const Focus: Story = {
  args: {
    color: 'Focus',
    children: 'Body Text',
  },
}
