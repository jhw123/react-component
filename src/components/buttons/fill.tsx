import { css } from '@emotion/react'
import styled from '@emotion/styled'
import React from 'react'
import { View } from '../../foundation'
import { MIN_BUTTON_SIZE } from '../../foundation/size'
import { Fill } from '../../themes/default/fill'

interface Props {
  disabled?: boolean
  children: React.ReactNode
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  fill?: Fill
}

export const FillButton = View<Props>(
  ({ children, fill = 'Focus', onClick, disabled = false, forwardedRef, ...props }) => {
    return (
      <Container {...props} fill={fill} onClick={onClick} disabled={disabled} ref={forwardedRef}>
        {children}
      </Container>
    )
  }
)

const Container = styled.button<{ fill: Fill }>`
  ${({ fill, theme }) => css`
    ${theme.font.Body}
    min-height: ${MIN_BUTTON_SIZE}px;
    color: white;
    ${theme.fill[fill]}
    border-radius: 8px;
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
