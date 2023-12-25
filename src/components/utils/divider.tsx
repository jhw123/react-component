import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { Fill } from '@src/themes/default/fill'
import { View } from '@src/foundation/view'
import React from 'react'

interface Props {
  fill?: Fill
}

export const Divider = View<Props>(({ fill = 'Secondary', ...props }) => {
  return <Container {...props} fill={fill}></Container>
})

const Container = styled.div<{ fill: Fill }>`
  ${({ fill, theme }) => css`
    height: 1px;
    width: auto;
    ${theme.fill[fill]}
  `}
`
