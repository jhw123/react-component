import { css } from '@emotion/react'
import styled from '@emotion/styled'
import React from 'react'
import { Color, View, Font } from '../../foundation'

type Align = 'left' | 'center' | 'right'

interface Props {
  children: React.ReactNode
  align?: Align
  color?: Color
}

export const SubHeaderText = View<Props>(({ color = 'Primary', children, align = 'left', ...props }) => {
  return (
    <Container color={color} align={align} {...props}>
      {children}
    </Container>
  )
})

const Container = styled.div<{ color: Color; align: Align }>`
  ${({ color, align }) => css`
    ${Font.SubTitle}
    ${Color[color]}
    text-align: ${align};
    white-space: pre-wrap;
    height: min-content;
  `}
`
