import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { MIN_BUTTON_SIZE } from '@src/constants/size'
import { ComponentState } from '@src/constants/states'
import { View } from '@src/foundation/view'
import { Fill } from '@src/foundation/fill'
import { Font } from '@src/foundation/font'
import React from 'react'

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
      ${Fill.Inactive}
      cursor: not-allowed;
    }
  `}
`
