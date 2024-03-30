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
  fill: Fill
}

export const FillButton = View<Props>(({ children, fill, onClick, disabled = false, forwardedRef, ...props }) => {
  return (
    <Container {...props} fill={fill} onClick={onClick} disabled={disabled} ref={forwardedRef}>
      {children}
    </Container>
  )
})

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
      background-image: linear-gradient(rgb(0 0 0/20%) 0 0);
      background-blend-mode: darken;
    }

    &:disabled {
      filter: grayscale(0.8);
      cursor: not-allowed;
    }
  `}
`
