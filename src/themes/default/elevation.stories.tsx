import { Global, css } from '@emotion/react'
import styled from '@emotion/styled'
import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { ResetStyle } from '../../'
import { Elevation } from './elevation'

const PaletteComponent = () => {
  return (
    <>
      {Object.keys(Elevation).map((elevation, i) => (
        <Component elevation={elevation as Elevation} key={i}>
          {elevation}
        </Component>
      ))}
    </>
  )
}

const Component = styled.div<{ elevation: Elevation }>`
  ${({ elevation }) => css`
    ${Elevation[elevation]}
    width: 200px;
    height: 20px;
    margin: 12px;
    text-align: center;
    padding: 8px;
  `}
`

const meta = {
  title: 'Theme/Default/Elevation',
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
