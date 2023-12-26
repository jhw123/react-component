import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { View } from '@src/foundation/view'
import { Border } from '@src/themes/default/border'
import { Color } from '@src/themes/default/color'
import { Fill } from '@src/themes/default/fill'
import React from 'react'
import { Children } from 'react'

interface Props {
  children?: React.ReactNode
  stage: number
}

export const ProgressBar = View<Props>(({ children, stage, ...props }) => {
  return (
    <Container {...props}>
      {Children.map(children, (child, i) => {
        return (
          <Stage key={i}>
            <Header>
              <Status status={i < stage ? 'Complete' : 'InProgress'} />
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

const Stage = styled.div`
  &:not(:last-of-type) {
    padding-bottom: 16px;
    ${Border.Focus}
    border-width: 0;
    border-left-width: 2px;
  }
  &:last-of-type {
    margin-left: 2px;
  }
`

const Status = styled.div<{ status: 'Complete' | 'InProgress' }>`
  ${({ status }) => css`
    width: 24px;
    height: 24px;
    border-radius: 50%;
    ${Border.Focus}
    ${status === 'Complete' ? Fill.Focus : Fill.Primary}
    display: flex;
    justify-content: center;
    align-items: center;
    ${Color.Focus}
    ${status === 'Complete' && 'font-size: 0;'}
    line-height: normal;
    transform: translateX(-13px);

    ::after {
      content: '';
      ${Border.Focus}
      width: 12px;
      height: 6px;
      border-width: 0 0 2px 2px;
      position: absolute;
      top: 0;
      left: 1px;
      transform: translate(3px, 4px) rotate(-45deg);
      display: ${status === 'Complete' ? 'block' : 'none'};
    }
  `}
`
