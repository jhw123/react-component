import { Global, ThemeProvider } from '@emotion/react'
import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { DEFAULT_THEME, ResetStyle, SplitLayout } from '..'
import styled from '@emotion/styled'
import { Elevation } from '../themes/default/elevation'

const meta = {
  title: 'Layout/Split',
  component: SplitLayout,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  decorators: [
    Story => (
      <>
        <Global styles={ResetStyle} />
        <ThemeProvider theme={DEFAULT_THEME}>
          <Window>
            <Story />
          </Window>
        </ThemeProvider>
      </>
    ),
  ],
} satisfies Meta<typeof SplitLayout>

const Window = styled.div`
  width: 500px;
  height: 300px;
  ${Elevation.L1}
`

export default meta
type Story = StoryObj<typeof meta>

export const Horizontal: Story = {
  args: {
    direction: 'horizontal',
    children: ['Content 1', 'Content 2', 'Content 3'],
  },
}

export const Vertical: Story = {
  args: {
    direction: 'vertical',
    children: ['Content 1', 'Content 2', 'Content 3'],
  },
}
