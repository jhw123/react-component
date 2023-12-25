import styled from '@emotion/styled'
import React from 'react'

interface Props {
  children: React.ReactNode
}

export const StrongText = ({ children }: Props) => {
  return <Container>{children}</Container>
}

const Container = styled.span`
  font-weight: bold;
`
