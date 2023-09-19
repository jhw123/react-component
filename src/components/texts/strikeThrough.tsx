import styled from '@emotion/styled'
import { View } from '@src/foundation/view'
import React from 'react'

interface Props {
  children: React.ReactNode
}

export const StrikeThroughText = View<Props>(({ children, ...props }) => {
  return <Container {...props}>{children}</Container>
})

const Container = styled.span`
  text-decoration: line-through;
`
