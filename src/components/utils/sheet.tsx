import styled from '@emotion/styled'
import { css } from '@emotion/react'
import React from 'react'
import { Fill } from '@src/foundation/fill'
import { View } from '@src/foundation'
import { Elevation } from '@src/foundation/elevation'

interface Props {
  fill: Fill
  children?: React.ReactNode
}

export const Sheet = View<Props>(({ fill, children, ...props }) => {
  return (
    <Container {...props} fill={fill}>
      {children}
    </Container>
  )
})

const Container = styled.div<{ fill: Fill }>`
  ${({ fill }) => css`
    ${Elevation.L1}
    width: auto;
    ${Fill[fill]}
  `}
`
