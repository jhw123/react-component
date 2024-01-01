import { Global } from '@emotion/react'
import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { AccordionLayout, ResetStyle } from '..'

const meta = {
  title: 'Layout/Accordion',
  component: AccordionLayout,
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
} satisfies Meta<typeof AccordionLayout>

export default meta
type Story = StoryObj<typeof meta>

export const Example: Story = {
  args: {
    titles: ['Title 1', 'Title 2', 'Title 3'],
    children: ['Content 1', 'Content 2', 'Content 3'],
  },
}
