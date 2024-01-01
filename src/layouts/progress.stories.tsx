import { Global } from '@emotion/react'
import styled from '@emotion/styled'
import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Elevation, ProgressLayout, ResetStyle } from '..'

const meta = {
  title: 'Layout/Progress',
  component: ProgressLayout,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  decorators: [
    Story => (
      <>
        <Global styles={ResetStyle} />
        <Window>
          <Story />
        </Window>
      </>
    ),
  ],
} satisfies Meta<typeof ProgressLayout>

const Window = styled.div`
  width: 500px;
  height: 300px;
  ${Elevation.L1}
`

export default meta
type Story = StoryObj<typeof meta>

export const Example: Story = {
  args: {
    children: ['Content 1', 'Content 2', 'Content 3'],
    stage: 1,
  },
}
