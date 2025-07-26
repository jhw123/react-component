import styled from '@emotion/styled'
import React from 'react'
import { View } from '../../foundation'
import { css } from '@emotion/react'

interface Props {
  children: React.ReactNode
  bullet?: string
}

export const ListItem = View<Props>(({ children, forwardedRef, bullet = '•', ...props }) => {
  return (
    <Container {...props} bullet={bullet}>
      {children}
    </Container>
  )
})

const Container = styled.div<{ bullet: string }>`
  ${({ theme, bullet }) => css`
    ${theme.font.Body}
    margin-left: 2ch;
    position: relative;

    &::before {
      content: '${bullet}';
      position: absolute;
      left: -2ch;
    }
  `}
`
