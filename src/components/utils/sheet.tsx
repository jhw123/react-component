import styled from '@emotion/styled'
import { css } from '@emotion/react'
import React from 'react'
import { View } from '../../foundation'
import { Fill } from '../../themes/default/fill'

interface Props {
  fill?: Fill
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
      <Container {...props} fill={fill} style={styleWithPadding}>
        {children}
      </Container>
    )
  }
)

const Container = styled.div<{ fill: Fill }>`
  ${({ theme, fill }) => css`
    ${theme.elevation.L1}
    width: auto;
    ${theme.fill[fill]}
  `}
`
