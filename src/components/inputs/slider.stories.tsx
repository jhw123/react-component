import { Global, ThemeProvider } from '@emotion/react'
import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { SliderInput } from '..'
import { ResetStyle } from '../../foundation'
import styled from '@emotion/styled'
import { Elevation } from '../../themes/default/elevation'
import { DEFAULT_THEME } from '../../themes'

const Window = styled.div`
  width: 500px;
  ${Elevation.L1}
`

const meta = {
  title: 'Component/Input/Slider',
  component: SliderInput,
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
} satisfies Meta<typeof SliderInput>

export default meta
type Story = StoryObj<typeof meta>

export const Example: Story = {
  args: {
    value: 3,
    min: 1,
    max: 5,
  },
}
