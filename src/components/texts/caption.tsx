import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { View } from '@src/foundation/view'
import { Color } from '@src/themes/default/color'
import { Font } from '@src/themes/default/font'
import React from 'react'

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
  ${({ color, align }) => css`
    ${Font.Caption}
    ${Color[color]}
    text-align: ${align};
    white-space: pre-wrap;
    height: min-content;
  `}
`
