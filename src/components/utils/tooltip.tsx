import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { View } from '@src/foundation'
import React from 'react'

interface Props {
  tooltip: string
  children: React.ReactNode
  width?: string
  position?: 'top' | 'bottom'
}

export const Tooltip = View<Props>(({ tooltip, children, position = 'top', width = 'calc(100% + 16px)', ...props }) => {
  return (
    <Container {...props} position={position} data-tooltip={tooltip} width={width}>
      {children}
    </Container>
  )
})

const Container = styled.div<{ position: 'top' | 'bottom'; width: string }>`
  ${({ position, width, theme }) => css`
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    &[data-tooltip]:hover::before {
      content: '';
      position: absolute;
      ${theme.fill.Primary}
      width: 16px;
      height: 16px;
      top: ${position === 'top' ? '-20px' : 'calc(100% + 4px)'};
      transform: rotate(45deg);
      z-index: 1000;
    }

    &[data-tooltip]:hover::after {
      content: attr(data-tooltip);
      ${theme.color.Highlight}
      position: absolute;
      ${theme.fill.Primary}
      ${theme.font.Caption}
      max-width: ${width};
      word-break: break-all;
      ${position === 'top'
        ? css`
            top: -8px;
            transform: translateY(-100%);
          `
        : css`
            top: calc(100% + 8px);
          `}
      padding: 4px;
      border-radius: 8px;
      z-index: 1000;
      text-align: center;
    }
  `}
`
