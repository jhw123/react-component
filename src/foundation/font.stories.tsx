import { Global, css } from '@emotion/react'
import styled from '@emotion/styled'
import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Font, ResetStyle } from '.'

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
  title: 'Foundation/Font',
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