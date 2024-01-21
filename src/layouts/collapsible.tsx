import { css } from '@emotion/react'
import styled from '@emotion/styled'
import React from 'react'
import { View } from '../foundation'

interface Props {
  checked?: boolean
  children: React.ReactNode
}

export const CollapsibleLayout = View<Props>(({ children, checked = true, ...props }) => {
  return (
    <Container {...props} collapsed={!checked}>
      {children}
    </Container>
  )
})

const Container = styled.div<{ collapsed: boolean }>`
  ${({ collapsed }) => css`
    max-height: ${collapsed ? 0 : '2000px'};
    overflow: hidden;
    transition: max-height 0.5s ease-in-out;
  `}
`
