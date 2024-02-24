import { Global, css } from '@emotion/react'
import styled from '@emotion/styled'
import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Border, ResetStyle } from '../..'

const PaletteComponent = () => {
  return (
    <>
      {Object.keys(Border).map((border, i) => (
        <Component border={border as Border} key={i}>
          {border}
        </Component>
      ))}
    </>
  )
}

const Component = styled.div<{ border: Border }>`
  ${({ border }) => css`
    ${Border[border]}
    width: 200px;
    height: 20px;
    margin: 12px;
    text-align: center;
    padding: 8px;
  `}
`

const meta = {
  title: 'Theme/Default/Border',
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
