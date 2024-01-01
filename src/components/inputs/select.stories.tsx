import { Global } from '@emotion/react'
import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { SelectInput } from '..'
import { ResetStyle } from '../../foundation'

const meta = {
  title: 'Component/Input/Select',
  component: SelectInput,
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
} satisfies Meta<typeof SelectInput>

export default meta
type Story = StoryObj<typeof meta>

export const Example: Story = {
  args: {
    options: ['Option 1', 'Option 2', 'Option 3'],
    value: 'Option 1',
  },
}
