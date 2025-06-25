import { css, keyframes } from '@emotion/react'
import styled from '@emotion/styled'
import React from 'react'
import { View } from '../../foundation'
import { Fill } from '../../themes/default/fill'
import { Color } from '../../themes/default/color'

interface Props {
  fill?: Fill & Color
  size?: number
}

export const TextLoading = View<Props>(({ fill = 'Focus', size = 8, ...props }) => {
  return <Container {...props} fill={fill} size={size} />
})

const dotFlashing = keyframes`
    0% {
        opacity: 1;
    }
    50%,
    100% {
        opacity: 0.2;
    }
`

const Container = styled.div<{ fill: Fill & Color; size: number }>`
  ${({ theme, fill, size }) => css`
    position: relative;
    width: ${size}px;
    height: ${size}px;
    border-radius: 5px;
    display: inline-block;
    ${theme.fill[fill]}
    ${theme.color[fill]}
    animation: ${dotFlashing} 0.8s infinite linear alternate;
    animation-delay: 0.4s;
    margin-left: ${size + 4}px;
    margin-right: ${size + 4}px;

    &::before,
    &::after {
      content: '';
      display: inline-block;
      position: absolute;
      top: 0;
    }
    &::before {
      left: -12px;
      width: ${size}px;
      height: ${size}px;
      border-radius: 5px;
      ${theme.fill[fill]}
      ${theme.color[fill]}
      animation: ${dotFlashing} 0.8s infinite alternate;
      animation-delay: 0s;
    }
    &::after {
      left: 12px;
      width: ${size}px;
      height: ${size}px;
      border-radius: 5px;
      ${theme.fill[fill]}
      ${theme.color[fill]}
      animation: ${dotFlashing} 0.8s infinite alternate;
      animation-delay: 0.8s;
    }
  `}
`
