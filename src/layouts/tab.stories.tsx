import { Global, ThemeProvider } from '@emotion/react'
import styled from '@emotion/styled'
import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { DEFAULT_THEME, ResetStyle, TabLayout } from '..'
import { Elevation } from '../themes/default/elevation'

const meta = {
  title: 'Layout/Tab',
  component: TabLayout,
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
} satisfies Meta<typeof TabLayout>

const Window = styled.div`
  width: 500px;
  height: 300px;
  ${Elevation.L1}
`

export default meta
type Story = StoryObj<typeof meta>

export const Example: Story = {
  args: {
    tabTitles: ['Tab 1', 'Tab 2', 'Tab 3'],
    children: ['Content 1', 'Content 2', 'Content 3'],
  },
}
