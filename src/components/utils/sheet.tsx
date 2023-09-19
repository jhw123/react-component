import styled from '@emotion/styled'
import { css } from '@emotion/react'
import React from 'react'
import { Fill } from '@src/themes/default/fill'
import { View } from '@src/foundation'

interface Props {
  fill?: Fill
  children?: React.ReactNode
}

export const Sheet = View<Props>(({ fill = 'Sheet', children, ...props }) => {
  return (
    <Container {...props} fill={fill}>
      {children}
    </Container>
  )
})

const Container = styled.div<{ fill: Fill }>`
  ${({ fill, theme }) => css`
    ${theme.elevation.L1}
    width: auto;
    ${theme.fill[fill]}
  `}
`
