import styled from '@emotion/styled'
import { css } from '@emotion/react'
import React from 'react'
import { View } from '../../foundation'
import { Fill } from '../../themes/default/fill'

interface Props {
  fill?: Fill
  height?: number
}

export const Divider = View<Props>(({ fill = 'Secondary', height = 2, ...props }) => {
  return <Container {...props} fill={fill} height={height}></Container>
})

const Container = styled.div<{ fill: Fill; height: number }>`
  ${({ theme, height, fill }) => css`
    height: ${height}px;
    width: auto;
    ${theme.fill[fill]}
  `}
`
