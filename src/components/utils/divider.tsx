import styled from '@emotion/styled'
import { css } from '@emotion/react'
import React from 'react'
import { Fill, View } from '../../foundation'

interface Props {
  fill?: Fill
}

export const Divider = View<Props>(({ fill = 'Secondary', ...props }) => {
  return <Container {...props} fill={fill}></Container>
})

const Container = styled.div<{ fill: Fill }>`
  ${({ fill }) => css`
    height: 1px;
    width: auto;
    ${Fill[fill]}
  `}
`
