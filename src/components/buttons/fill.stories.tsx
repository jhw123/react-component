import { Global } from '@emotion/react'
import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { FillButton } from '..'
import { ResetStyle } from '../../foundation'

const meta = {
  title: 'Component/Button/Fill',
  component: FillButton,
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
} satisfies Meta<typeof FillButton>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    fill: 'Primary',
    children: 'Fill Button',
  },
}

export const Secondary: Story = {
  args: {
    fill: 'Secondary',
    children: 'Fill Button',
  },
}

export const Success: Story = {
  args: {
    fill: 'Success',
    children: 'Fill Button',
  },
}

export const Danger: Story = {
  args: {
    fill: 'Danger',
    children: 'Fill Button',
  },
}

export const Warning: Story = {
  args: {
    fill: 'Warning',
    children: 'Fill Button',
  },
}

export const Focus: Story = {
  args: {
    fill: 'Focus',
    children: 'Fill Button',
  },
}
