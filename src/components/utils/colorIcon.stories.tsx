import { Global, ThemeProvider } from '@emotion/react'
import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { ColorIcon } from '..'
import { ResetStyle } from '../../foundation'
import styled from '@emotion/styled'
import { DEFAULT_THEME } from '../../themes'
import { Elevation } from '../../themes/default/elevation'

const Window = styled.div`
  width: 500px;
  ${Elevation.L1}
`

const meta = {
  title: 'Component/Util/ColorIcon',
  component: ColorIcon,
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
} satisfies Meta<typeof ColorIcon>

export default meta
type Story = StoryObj<typeof meta>

export const Example: Story = {
  args: {
    src: '/user.png',
    type: 'Primary',
    alt: 'Color Icon',
    size: 52,
  },
}
