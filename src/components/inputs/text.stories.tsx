import { Global } from '@emotion/react'
import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { TextInput } from '..'
import { Elevation, ResetStyle } from '../../foundation'
import styled from '@emotion/styled'

const Window = styled.div`
  width: 500px;
  ${Elevation.L1}
`

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
      <Window>
        <Global styles={ResetStyle} />
        <Story />
      </Window>
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
