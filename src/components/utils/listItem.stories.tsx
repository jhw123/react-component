import { Global, ThemeProvider } from '@emotion/react'
import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { ResetStyle } from '../../foundation'
import { DEFAULT_THEME } from '../../themes'
import { ListItem } from './listItem'

const meta = {
  title: 'Component/Util/ListItem',
  component: ListItem,
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
          <Story />
          <Story />
        </ThemeProvider>
      </>
    ),
  ],
} satisfies Meta<typeof ListItem>

export default meta
type Story = StoryObj<typeof meta>

export const Example: Story = {
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe nostrum, at dicta laborum neque, aut aliquid quo aspernatur delectus distinctio commodi tempore. Natus nulla soluta libero fugit! Veniam, id tempore?',
  },
}
