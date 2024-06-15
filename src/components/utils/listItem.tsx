import styled from '@emotion/styled'
import React from 'react'
import { View } from '../../foundation'

interface Props {
  children: string
}

export const ListItem = View<Props>(({ children, forwardedRef, ...props }) => {
  return <Container {...props}>{children}</Container>
})

const Container = styled.div`
  margin-left: 1.2ch;
  position: relative;

  &::before {
    content: '•';
    position: absolute;
    left: -1.2ch;
  }
`
