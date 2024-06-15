import { Global, css } from '@emotion/react'
import styled from '@emotion/styled'
import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { ResetStyle } from '../..'
import { Fill } from './fill'

const PaletteComponent = () => {
  return (
    <>
      {Object.keys(Fill).map((fill, i) => (
        <Component fill={fill as Fill} key={i}>
          {fill}
        </Component>
      ))}
    </>
  )
}

const Component = styled.div<{ fill: Fill }>`
  ${({ fill }) => css`
    ${Fill[fill]}
    width: 200px;
    height: 20px;
    margin: 12px;
    text-align: center;
    padding: 8px;
  `}
`

const meta = {
  title: 'Theme/Default-Light/Fill',
  component: PaletteComponent,
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
  decorators: [
    Story => (
      <>
        <Global styles={ResetStyle} />
        <Story />
      </>
    ),
  ],
} satisfies Meta<typeof PaletteComponent>

export default meta
type Story = StoryObj<typeof meta>

export const Palette: Story = {
  args: {},
}
