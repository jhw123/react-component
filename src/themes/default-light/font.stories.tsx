import { Global, css } from '@emotion/react'
import styled from '@emotion/styled'
import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { ResetStyle } from '../..'
import { Font } from './font'

const PaletteComponent = () => {
  return (
    <>
      {Object.keys(Font).map((font, i) => (
        <Component font={font as Font} key={i}>
          {font}
        </Component>
      ))}
    </>
  )
}

const Component = styled.div<{ font: Font }>`
  ${({ font }) => css`
    ${Font[font]}
    width: 200px;
    height: 20px;
    margin: 12px;
    text-align: center;
    padding: 8px;
  `}
`

const meta = {
  title: 'Theme/Default-Light/Font',
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
