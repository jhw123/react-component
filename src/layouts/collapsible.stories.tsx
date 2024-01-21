import { Global } from '@emotion/react'
import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { CollapsibleLayout, ResetStyle } from '..'

const meta = {
  title: 'Layout/Collapsible',
  component: CollapsibleLayout,
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
} satisfies Meta<typeof CollapsibleLayout>

export default meta
type Story = StoryObj<typeof meta>

export const Example: Story = {
  args: {
    children: ['Collapsible Content'],
  },
}
