import { Global, ThemeProvider } from '@emotion/react'
import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Divider } from '..'
import { ResetStyle } from '../../foundation'
import styled from '@emotion/styled'
import { DEFAULT_THEME } from '../../themes'
import { Elevation } from '../../themes/default/elevation'

const Window = styled.div`
  width: 500px;
  ${Elevation.L1}
`

const meta = {
  title: 'Component/Util/Divider',
  component: Divider,
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
            Section 1
            <Story />
            Section 2
          </Window>
        </ThemeProvider>
      </>
    ),
  ],
} satisfies Meta<typeof Divider>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    fill: 'Primary',
    marginVertical: 24,
  },
}

export const Secondary: Story = {
  args: {
    fill: 'Secondary',
    marginVertical: 24,
  },
}

export const Success: Story = {
  args: {
    fill: 'Success',
    marginVertical: 24,
  },
}

export const Danger: Story = {
  args: {
    fill: 'Danger',
    marginVertical: 24,
  },
}

export const Warning: Story = {
  args: {
    fill: 'Warning',
    marginVertical: 24,
  },
}

export const Focus: Story = {
  args: {
    fill: 'Focus',
    marginVertical: 24,
  },
}
