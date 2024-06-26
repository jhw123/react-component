import { Global, ThemeProvider } from '@emotion/react'
import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { FileInput } from '..'
import { ResetStyle } from '../../foundation'
import { DEFAULT_THEME } from '../../themes'

const meta = {
  title: 'Component/Input/File',
  component: FileInput,
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
} satisfies Meta<typeof FileInput>

export default meta
type Story = StoryObj<typeof meta>

export const Example: Story = {
  args: {
    children: 'File Input',
  },
}
