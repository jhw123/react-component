import { Global, ThemeProvider } from '@emotion/react'
import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { CaptionText } from '..'
import { ResetStyle } from '../../foundation'
import { DEFAULT_THEME } from '../../themes'

const meta = {
  title: 'Component/Text/Caption',
  component: CaptionText,
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
} satisfies Meta<typeof CaptionText>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    color: 'Primary',
    children: 'Caption Text',
  },
}

export const Secondary: Story = {
  args: {
    color: 'Secondary',
    children: 'Caption Text',
  },
}

export const Success: Story = {
  args: {
    color: 'Success',
    children: 'Caption Text',
  },
}

export const Danger: Story = {
  args: {
    color: 'Danger',
    children: 'Caption Text',
  },
}

export const Warning: Story = {
  args: {
    color: 'Warning',
    children: 'Caption Text',
  },
}

export const Focus: Story = {
  args: {
    color: 'Focus',
    children: 'Caption Text',
  },
}
