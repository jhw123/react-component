import { Global } from '@emotion/react'
import styled from '@emotion/styled'
import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { LinearLayout, ResetStyle } from '..'
import { Elevation } from '../themes/default/elevation'

const meta = {
  title: 'Layout/Linear',
  component: LinearLayout,
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
} satisfies Meta<typeof LinearLayout>

const Window = styled.div`
  width: 500px;
  height: 300px;
  ${Elevation.L1}
`

export default meta
type Story = StoryObj<typeof meta>

export const Example: Story = {
  args: {
    children: [<div>Content 1</div>, <div>Content 2</div>, <div>Content 3</div>],
  },
}
