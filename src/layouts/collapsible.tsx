import { css } from '@emotion/react'
import styled from '@emotion/styled'
import React from 'react'
import { ComponentState, View } from '../foundation'

interface Props {
  state?: Extract<ComponentState, 'Default' | 'Checked'>
  children: React.ReactNode
}

export const Collapsible = View<Props>(({ children, state = 'Default', ...props }) => {
  return (
    <Container {...props} collapsed={state !== 'Checked'}>
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
