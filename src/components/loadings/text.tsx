import { css, keyframes } from '@emotion/react'
import styled from '@emotion/styled'
import React from 'react'
import { View } from '../../foundation'
import { Fill } from '../../themes/default/fill'
import { Color } from '../../themes/default/color'

interface Props {
  fill?: Fill & Color
}

export const TextLoading = View<Props>(({ fill = 'Focus', ...props }) => {
  return <Container {...props} fill={fill} />
})

const DOT_SIZE = 8

const dotFlashing = keyframes`
    0% {
        opacity: 1;
    }
    50%,
    100% {
        opacity: 0.2;
    }
`

const Container = styled.div<{ fill: Fill & Color }>`
  ${({ theme, fill }) => css`
    position: relative;
    width: ${DOT_SIZE}px;
    height: ${DOT_SIZE}px;
    border-radius: 5px;
    display: inline-block;
    ${theme.fill[fill]}
    ${theme.color[fill]}
    animation: ${dotFlashing} 0.8s infinite linear alternate;
    animation-delay: 0.4s;
    margin-left: ${DOT_SIZE + 4}px;
    margin-right: ${DOT_SIZE + 4}px;

    &::before,
    &::after {
      content: '';
      display: inline-block;
      position: absolute;
      top: 0;
    }
    &::before {
      left: -12px;
      width: ${DOT_SIZE}px;
      height: ${DOT_SIZE}px;
      border-radius: 5px;
      ${theme.fill[fill]}
      ${theme.color[fill]}
      animation: ${dotFlashing} 0.8s infinite alternate;
      animation-delay: 0s;
    }
    &::after {
      left: 12px;
      width: ${DOT_SIZE}px;
      height: ${DOT_SIZE}px;
      border-radius: 5px;
      ${theme.fill[fill]}
      ${theme.color[fill]}
      animation: ${dotFlashing} 0.8s infinite alternate;
      animation-delay: 0.8s;
    }
  `}
`
