import { Global, css } from '@emotion/react'
import styled from '@emotion/styled'
import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { ResetStyle } from '../..'
import { Color } from './color'

const PaletteComponent = () => {
  return (
    <>
      {Object.keys(Color).map((color, i) => (
        <Component color={color as Color} key={i}>
          {color}
        </Component>
      ))}
    </>
  )
}

const Component = styled.div<{ color: Color }>`
  ${({ color }) => css`
    ${Color[color]}
    width: 200px;
    height: 20px;
    margin: 12px;
    text-align: center;
    padding: 8px;
  `}
`

const meta = {
  title: 'Theme/Default-Light/Color',
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
