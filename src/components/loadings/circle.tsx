import { css, keyframes } from '@emotion/react'
import styled from '@emotion/styled'
import React from 'react'
import { View } from '../../foundation'
import { Border } from '../../themes/default/border'

interface Props {
  border?: Border
  size?: number | string
}

export const CircleLoading = View<Props>(({ border = 'Secondary', size = '1.5rem', forwardedRef, ...props }) => {
  return (
    <span {...props}>
      <Container size={size} border={border} />
    </span>
  )
})

const spinning = keyframes`
  100%
  {
    transform: rotate(360deg);
  }
`

const Container = styled.div<{ border: Border; size: number | string }>`
  ${({ border, size, theme }) => css`
    width: ${size};
    height: ${size};
    box-sizing: border-box;
    ${theme.border[border]}
    border-left-color: transparent;
    border-right-color: transparent;
    border-bottom-color: transparent;
    border-radius: 100%;
    position: relative;
    animation: ${spinning} 0.8s ease-in-out infinite;

    &:before {
      content: '';
      width: calc(100% + 4px);
      height: calc(100% + 4px);
      box-sizing: border-box;
      ${theme.border[border]}
      opacity: 0.3;
      border-radius: 100%;
      display: block;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  `}
`
