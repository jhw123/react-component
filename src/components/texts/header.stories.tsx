import { Global } from '@emotion/react'
import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { HeaderText } from '..'
import { ResetStyle } from '../../foundation'

const meta = {
  title: 'Component/Text/Header',
  component: HeaderText,
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
} satisfies Meta<typeof HeaderText>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    color: 'Primary',
    children: 'Header Text',
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
