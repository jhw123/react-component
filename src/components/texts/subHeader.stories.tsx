import { Global, ThemeProvider } from '@emotion/react'
import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { SubHeaderText } from '..'
import { ResetStyle } from '../../foundation'
import { DEFAULT_THEME } from '../../themes'

const meta = {
  title: 'Component/Text/SubHeader',
  component: SubHeaderText,
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
} satisfies Meta<typeof SubHeaderText>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    color: 'Primary',
    children: 'SubHeader Text',
  },
}

export const Secondary: Story = {
  args: {
    color: 'Secondary',
    children: 'SubHeader Text',
  },
}

export const Success: Story = {
  args: {
    color: 'Success',
    children: 'SubHeader Text',
  },
}

export const Danger: Story = {
  args: {
    color: 'Danger',
    children: 'SubHeader Text',
  },
}

export const Warning: Story = {
  args: {
    color: 'Warning',
    children: 'SubHeader Text',
  },
}

export const Focus: Story = {
  args: {
    color: 'Focus',
    children: 'SubHeader Text',
  },
}
