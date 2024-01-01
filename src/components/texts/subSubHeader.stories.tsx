import { Global } from '@emotion/react'
import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { SubSubHeaderText } from '..'
import { ResetStyle } from '../../foundation'

const meta = {
  title: 'Component/Text/SubSubHeader',
  component: SubSubHeaderText,
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
} satisfies Meta<typeof SubSubHeaderText>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    color: 'Primary',
    children: 'SubSubHeader Text',
  },
}

export const Secondary: Story = {
  args: {
    color: 'Secondary',
    children: 'SubSubHeader Text',
  },
}

export const Success: Story = {
  args: {
    color: 'Success',
    children: 'SubSubHeader Text',
  },
}

export const Danger: Story = {
  args: {
    color: 'Danger',
    children: 'SubSubHeader Text',
  },
}

export const Warning: Story = {
  args: {
    color: 'Warning',
    children: 'SubSubHeader Text',
  },
}

export const Focus: Story = {
  args: {
    color: 'Focus',
    children: 'SubSubHeader Text',
  },
}
