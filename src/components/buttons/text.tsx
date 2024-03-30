import { css } from '@emotion/react'
import styled from '@emotion/styled'
import React from 'react'
import { View } from '../../foundation'
import { MIN_BUTTON_SIZE } from '../../foundation/size'
import { Color } from '../../themes/default/color'
import { Font } from '../../themes/default/font'

interface Props {
  disabled?: boolean
  children: React.ReactNode
  color?: Color
  font?: Font
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export const TextButton = View<Props>(
  ({ children, color = 'Secondary', font = 'Caption', onClick, disabled = false, forwardedRef, ...props }) => {
    return (
      <Container {...props} color={color} font={font} onClick={onClick} disabled={disabled} ref={forwardedRef}>
        {children}
      </Container>
    )
  }
)

const Container = styled.button<{ color: Color; font: Font }>`
  ${({ color, font, theme }) => css`
    ${theme.font[font]}
    min-height: ${MIN_BUTTON_SIZE}px;
    ${theme.color[color]}
    border-radius: 8px;
    cursor: pointer;
    padding: 4px 8px;
    display: inline-flex;
    align-items: center;
    justify-content: center;

    &:not(:disabled):hover {
      filter: brightness(0.8);
    }

    &:disabled {
      cursor: not-allowed;
      filter: grayscale(1);
    }
  `}
`
