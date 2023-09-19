import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { Color } from '@src/themes/default/color'
import React from 'react'

interface Props {
  children: React.ReactNode
  color?: Color
}

export const StrongText = ({ children, color = 'Inherit' }: Props) => {
  return <Container color={color}>{children}</Container>
}

const Container = styled.span<{ color: Color }>`
  ${({ color }) => css`
    ${Color[color]}
    font-weight: bold;
  `}
`
