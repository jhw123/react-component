import { css } from '@emotion/react'
import styled from '@emotion/styled'
import React, { useState } from 'react'
import { useEffectOnce } from 'react-use'
import { View } from '../foundation'

interface Props {
  checked?: boolean
  children: React.ReactNode
}

const TRANSITION_DURATION = 500

export const CollapsibleLayout = View<Props>(({ children, checked = true, ...props }) => {
  const [transitionOn, setTransitionOn] = useState(false)

  useEffectOnce(() => {
    setTimeout(() => {
      setTransitionOn(true)
    }, TRANSITION_DURATION + 1)
  })

  return (
    <Container {...props} collapsed={!checked} transitionOn={transitionOn}>
      {children}
    </Container>
  )
})

const Container = styled.div<{ collapsed: boolean; transitionOn: boolean }>`
  ${({ collapsed, transitionOn }) => css`
    max-height: ${collapsed ? 0 : '2000px'};
    overflow: hidden;
    ${transitionOn &&
    css`
      transition: max-height ${TRANSITION_DURATION}ms ease-in-out;
    `}
  `}
`
