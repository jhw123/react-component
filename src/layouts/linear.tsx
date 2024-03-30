import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { View } from '../foundation'
import React from 'react'

interface Props {
  gap?: number
  children: React.ReactNode
  justifyContent?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly'
  alignItems?: 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline'
}

export const LinearLayout = View<Props>(
  ({ children, gap = 0, justifyContent = 'space-between', alignItems = 'center', ...props }) => {
    return (
      <Container {...props} gap={gap} justifyContent={justifyContent} alignItems={alignItems}>
        {children}
      </Container>
    )
  }
)

const Container = styled.div<{ gap: number; justifyContent: string; alignItems: string }>`
  ${({ gap, justifyContent, alignItems }) => css`
    display: flex;
    flex-direction: row;
    gap: ${gap}px;
    align-items: ${alignItems};
    justify-content: ${justifyContent};
  `}
`
