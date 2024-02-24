import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { View } from '../foundation'
import React from 'react'

interface Props {
  gap?: number
  children: React.ReactNode
  justifyContent?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly'
}

export const LinearLayout = View<Props>(({ children, gap = 0, justifyContent = 'space-between', ...props }) => {
  return (
    <Container {...props} gap={gap} justifyContent={justifyContent}>
      {children}
    </Container>
  )
})

const Container = styled.div<{ gap: number; justifyContent: string }>`
  ${({ gap, justifyContent }) => css`
    display: flex;
    flex-direction: row;
    gap: ${gap}px;
    align-items: center;
    justify-content: ${justifyContent};
  `}
`
