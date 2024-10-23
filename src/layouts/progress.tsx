import { css } from '@emotion/react'
import styled from '@emotion/styled'
import React from 'react'
import { Children } from 'react'
import { View } from '../foundation'
import { Fill } from '../themes/default/fill'

interface Props {
  children?: React.ReactNode
  type?: Fill
  stage: number
}

export const ProgressLayout = View<Props>(({ children, stage, type = 'Focus', forwardedRef, ...props }) => {
  return (
    <Container {...props}>
      {Children.map(children, (child, i) => {
        const staus = i < stage ? 'Complete' : i === stage ? 'InProgress' : 'NotComplete'
        return (
          <Stage key={i} fill={type}>
            <Header>
              <Status fill={type} status={staus} />
              {child}
            </Header>
          </Stage>
        )
      })}
    </Container>
  )
})

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 12px;
`

const Header = styled.div`
  display: grid;
  grid-template-columns: 24px auto;
  justify-content: start;
`

const Stage = styled.div<{ fill: Fill }>`
  ${({ theme, fill }) => css`
    &:not(:last-of-type) {
      padding-bottom: 16px;
      ${theme.border[fill]}
      border-width: 0;
      border-left-width: 2px;
    }
    &:last-of-type {
      margin-left: 2px;
    }
  `}
`

const Status = styled.div<{ fill: Fill; status: 'Complete' | 'InProgress' | 'NotComplete' }>`
  ${({ theme, status, fill }) => css`
    width: 24px;
    height: 24px;
    border-radius: 50%;
    ${theme.border[fill]}
    ${status === 'Complete' ? theme.fill[fill] : theme.fill.Primary}
    display: flex;
    justify-content: center;
    align-items: center;
    ${theme.color[fill]}
    ${status === 'Complete' && 'font-size: 0;'}
    line-height: normal;
    transform: translateX(-13px);
    position: relative;

    ::before {
      content: '';
      width: 12px;
      height: 12px;
      border-radius: 50%;
      ${theme.fill[fill]}
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: ${status === 'InProgress' ? 'block' : 'none'};
    }

    ::after {
      content: '';
      ${theme.border.Contrast}
      width: 12px;
      height: 6px;
      border-width: 0 0 2px 2px;
      position: absolute;
      top: 0px;
      left: 0px;
      transform: translate(3px, 4px) rotate(-45deg);
      display: ${status === 'Complete' ? 'block' : 'none'};
    }
  `}
`
