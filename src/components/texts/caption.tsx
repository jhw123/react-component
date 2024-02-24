import { css } from '@emotion/react'
import styled from '@emotion/styled'
import React from 'react'
import { View } from '../../foundation'
import { Color } from '../../themes/default/color'

type Align = 'left' | 'center' | 'right'

interface Props {
  children: React.ReactNode
  align?: Align
  color?: Color
}

export const CaptionText = View<Props>(({ children, color = 'Secondary', align = 'left', ...props }) => {
  return (
    <Container {...props} color={color} align={align}>
      {children}
    </Container>
  )
})

const Container = styled.div<{ color: Color; align: Align }>`
  ${({ theme, color, align }) => css`
    ${theme.font.Caption}
    ${theme.color[color]}
    text-align: ${align};
    white-space: pre-wrap;
    height: min-content;
  `}
`
