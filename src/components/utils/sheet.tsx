import styled from '@emotion/styled'
import { css } from '@emotion/react'
import React from 'react'
import { View } from '../../foundation'
import { Fill } from '../../themes/default/fill'
import { Elevation } from '../../themes/default/elevation'

interface Props {
  fill?: Fill
  elevation?: Elevation
  padding?: number
  paddingLeft?: number
  paddingRight?: number
  paddingTop?: number
  paddingBottom?: number
  paddingHorizonal?: number
  paddingVertical?: number
  children?: React.ReactNode
}

export const Sheet = View<Props>(
  ({
    fill = 'Secondary',
    elevation = 'L0',
    padding,
    paddingBottom,
    paddingTop,
    paddingLeft,
    paddingRight,
    paddingHorizonal,
    paddingVertical,
    children,
    style,
    ...props
  }) => {
    const styleWithPadding = Object.assign(style, {
      paddingLeft: paddingLeft ?? paddingHorizonal ?? padding,
      paddingRight: paddingRight ?? paddingHorizonal ?? padding,
      paddingTop: paddingTop ?? paddingVertical ?? padding,
      paddingBottom: paddingBottom ?? paddingVertical ?? padding,
    })

    return (
      <Container {...props} fill={fill} elevation={elevation} style={styleWithPadding}>
        {children}
      </Container>
    )
  }
)

const Container = styled.div<{ fill: Fill; elevation: Elevation }>`
  ${({ theme, fill, elevation }) => css`
    ${theme.elevation[elevation]}
    width: auto;
    ${theme.fill[fill]}
  `}
`
