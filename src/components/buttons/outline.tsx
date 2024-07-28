import { css } from '@emotion/react'
import styled from '@emotion/styled'
import React from 'react'
import { View } from '../../foundation'
import { MIN_BUTTON_SIZE } from '../../foundation/size'
import { Border } from '../../themes/default/border'
import { Color } from '../../themes/default/color'

interface Props {
  disabled?: boolean
  children: React.ReactNode
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  color?: Border & Color
}

export const OutlineButton = View<Props>(
  ({ disabled = false, children, color = 'Primary', onClick, forwardedRef, ...props }) => {
    return (
      <Container color={color} {...props} onClick={onClick} disabled={disabled} ref={forwardedRef}>
        {children}
      </Container>
    )
  }
)

const Container = styled.button<{ color: Border & Color }>`
  ${({ color, theme }) => css`
    ${theme.font.Body}
    min-height: ${MIN_BUTTON_SIZE}px;
    border-radius: 8px;
    ${theme.border[color]}
    ${theme.color[color]}
    cursor: pointer;
    padding: 4px 8px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    &:not(:disabled):hover {
      filter: brightness(0.9);
    }

    &:disabled {
      filter: contrast(0.6);
      cursor: not-allowed;
    }
  `}
`
