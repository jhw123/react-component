import { Global } from '@emotion/react'
import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Sheet } from '..'
import { ResetStyle } from '../../foundation'

const meta = {
  title: 'Component/Util/Sheet',
  component: Sheet,
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
} satisfies Meta<typeof Sheet>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    fill: 'Primary',
    children: 'Sheet',
    padding: 24,
  },
}

export const Secondary: Story = {
  args: {
    fill: 'Secondary',
    children: 'Sheet',
    padding: 24,
  },
}

export const Success: Story = {
  args: {
    fill: 'Success',
    children: 'Sheet',
    padding: 24,
  },
}

export const Danger: Story = {
  args: {
    fill: 'Danger',
    children: 'Sheet',
    padding: 24,
  },
}

export const Warning: Story = {
  args: {
    fill: 'Warning',
    children: 'Sheet',
    padding: 24,
  },
}

export const Focus: Story = {
  args: {
    fill: 'Focus',
    children: 'Sheet',
    padding: 24,
  },
}
