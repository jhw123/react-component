import { Global, ThemeProvider } from '@emotion/react'
import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { StrikeThroughText } from '..'
import { ResetStyle } from '../../foundation'
import { DEFAULT_THEME } from '../../themes'

const meta = {
  title: 'Component/Text/StrikeThrough',
  component: StrikeThroughText,
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
          <Story />
        </ThemeProvider>
      </>
    ),
  ],
} satisfies Meta<typeof StrikeThroughText>

export default meta
type Story = StoryObj<typeof meta>

export const Example: Story = {
  args: {
    children: 'Text',
  },
}
