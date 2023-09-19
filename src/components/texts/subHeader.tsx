import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { View } from '@src/foundation/view'
import { Color } from '@src/themes/default/color'
import React from 'react'

interface Props {
  children: React.ReactNode
  color?: Color
}

export const SubHeaderText = View<Props>(({ color = 'Primary', children, ...props }) => {
  return (
    <Container color={color} {...props}>
      {children}
    </Container>
  )
})

const Container = styled.div<{ color: Color }>`
  ${({ color, theme }) => css`
    ${theme.font.SubTitle}
    ${theme.color[color]}
    white-space: pre-wrap;
    height: min-content;
  `}
`
