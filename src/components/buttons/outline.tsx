import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { MIN_BUTTON_SIZE } from '@src/constants/size'
import { ComponentState } from '@src/constants/states'
import { View } from '@src/foundation/view'
import { Border } from '@src/foundation/border'
import { Color } from '@src/foundation/color'
import { Fill } from '@src/foundation/fill'
import { Font } from '@src/foundation/font'
import React from 'react'

interface Props {
  state?: ComponentState
  children: React.ReactNode
  onClick?: () => void
  color?: Border & Color
}

export const OutlineButton = View<Props>(({ state = 'Default', children, color = 'Primary', onClick, ...props }) => {
  return (
    <Container color={color} {...props} onClick={onClick} disabled={state === 'Disabled'}>
      {children}
    </Container>
  )
})

const Container = styled.button<{ color: Border & Color }>`
  ${({ color }) => css`
    ${Font.Body}
    min-height: ${MIN_BUTTON_SIZE}px;
    border-radius: 8px;
    ${Border[color]}
    ${Color[color]}
    cursor: pointer;
    padding: 4px 8px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    &:not(:disabled):hover {
      background-image: linear-gradient(rgb(0 0 0/10%) 0 0);
      background-blend-mode: lighten;
    }

    &:disabled {
      ${Fill.Inactive}
      cursor: not-allowed;
    }
  `}
`
