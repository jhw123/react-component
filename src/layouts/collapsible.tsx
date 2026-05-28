import { css } from '@emotion/react'
import styled from '@emotion/styled'
import React, { useState } from 'react'
import { useEffectOnce } from 'react-use'
import { View } from '../foundation'

interface Props {
  checked?: boolean
  children: React.ReactNode
  transitionDuration?: number
}

export const CollapsibleLayout = View<Props>(({ children, checked = true, transitionDuration = 500, ...props }) => {
  const [transitionOn, setTransitionOn] = useState(false)

  useEffectOnce(() => {
    setTimeout(() => {
      setTransitionOn(true)
    }, transitionDuration + 1)
  })

  return (
    <Container {...props} collapsed={!checked} transitionOn={transitionOn} transitionDuration={transitionDuration}>
      {children}
    </Container>
  )
})

const Container = styled.div<{ collapsed: boolean; transitionOn: boolean; transitionDuration: number }>`
  ${({ collapsed, transitionOn, transitionDuration }) => css`
    max-height: ${collapsed ? 0 : '2000px'};
    overflow: hidden;
    ${transitionOn &&
    css`
      transition: max-height ${transitionDuration}ms ease-in-out;
    `}
  `}
`
