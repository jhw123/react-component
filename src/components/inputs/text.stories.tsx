import { Global } from '@emotion/react'
import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { TextInput } from '..'
import { ResetStyle } from '../../foundation'

const meta = {
  title: 'Component/Input/Text',
  component: TextInput,
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
} satisfies Meta<typeof TextInput>

export default meta
type Story = StoryObj<typeof meta>

export const Example: Story = {
  args: {
    value: '',
    placeholder: 'Text Input',
  },
}
