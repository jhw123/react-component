import styled from '@emotion/styled'
import { css } from '@emotion/react'
import React from 'react'
import { View } from '../../foundation'
import { Fill } from '../../themes/default/fill'

interface Props {
  fill?: Fill
}

export const Divider = View<Props>(({ fill = 'Secondary', ...props }) => {
  return <Container {...props} fill={fill}></Container>
})

const Container = styled.div<{ fill: Fill }>`
  ${({ theme, fill }) => css`
    height: 2px;
    width: auto;
    ${theme.fill[fill]}
  `}
`
