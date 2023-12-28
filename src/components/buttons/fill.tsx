import { css } from '@emotion/react'
import styled from '@emotion/styled'
import React, { ComponentState } from 'react'
import { MIN_BUTTON_SIZE } from '../../foundation/size'
import { Fill, View, Font } from '../../foundation'

interface Props {
  state?: ComponentState
  children: React.ReactNode
  onClick?: () => void
  fill: Fill
}

export const FillButton = View<Props>(({ children, fill, onClick, state = 'Default', ...props }) => {
  return (
    <Container {...props} fill={fill} onClick={onClick} disabled={state === 'Disabled'}>
      {children}
    </Container>
  )
})

const Container = styled.button<{ fill: Fill }>`
  ${({ fill }) => css`
    ${Font.Body}
    min-height: ${MIN_BUTTON_SIZE}px;
    color: white;
    ${Fill[fill]}
    border-radius: 8px;
    cursor: pointer;
    padding: 4px 8px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    &:not(:disabled):hover {
      background-image: linear-gradient(rgb(0 0 0/20%) 0 0);
      background-blend-mode: darken;
    }

    &:disabled {
      filter: grayscale(0.8);
      cursor: not-allowed;
    }
  `}
`
