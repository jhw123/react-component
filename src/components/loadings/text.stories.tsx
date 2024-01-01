import { Global } from '@emotion/react'
import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { TextLoading } from '..'
import { ResetStyle } from '../../foundation'

const meta = {
  title: 'Component/Loading/Text',
  component: TextLoading,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  decorators: [
    Story => (
      <>
        <Global styles={ResetStyle} />
        <Story />
      </>
    ),
  ],
} satisfies Meta<typeof TextLoading>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    fill: 'Primary',
  },
}

export const Secondary: Story = {
  args: {
    fill: 'Secondary',
  },
}

export const Success: Story = {
  args: {
    fill: 'Success',
  },
}

export const Danger: Story = {
  args: {
    fill: 'Danger',
  },
}

export const Warning: Story = {
  args: {
    fill: 'Warning',
  },
}

export const Focus: Story = {
  args: {
    fill: 'Focus',
  },
}
