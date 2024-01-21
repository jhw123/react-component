import { css, keyframes } from '@emotion/react'
import styled from '@emotion/styled'
import React from 'react'
import { Border, View } from '../../foundation'

interface Props {
  border?: Border
}

export const CircleLoading = View<Props>(({ border = 'Focus', ...props }) => {
  return <Container {...props} border={border} />
})

const spinning = keyframes`
  100%
  {
    transform: rotate(360deg);
  }
`

const Container = styled.div<{ border: Border }>`
  ${({ border }) => css`
    width: 1.5rem;
    height: 1.5rem;
    box-sizing: border-box;
    ${Border[border]}
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
      ${Border[border]}
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
