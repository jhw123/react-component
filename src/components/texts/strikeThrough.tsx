import styled from '@emotion/styled'
import React from 'react'
import { View } from '../../foundation'

interface Props {
  children: React.ReactNode
}

export const StrikeThroughText = View<Props>(({ children, ...props }) => {
  return <Container {...props}>{children}</Container>
})

const Container = styled.span`
  text-decoration: line-through;
`
