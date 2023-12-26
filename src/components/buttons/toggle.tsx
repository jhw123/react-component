import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { MIN_BUTTON_SIZE } from '@src/constants/size'
import { ComponentState } from '@src/constants/states'
import { View } from '@src/foundation/view'
import { Color } from '@src/themes/default/color'
import { Fill } from '@src/themes/default/fill'
import { Font } from '@src/themes/default/font'
import React, { useCallback } from 'react'

interface Props {
  state?: Exclude<ComponentState, 'Checked'>
  onClick?: (next: boolean) => void
  left: string
  right: string
  isLeft?: boolean
  fill: Fill & Color
}

export const ToggleButton = View<Props>(
  ({ left, right, fill, onClick, isLeft = true, state = 'Default', ...props }) => {
    const onToggle = useCallback(() => {
      onClick?.(!isLeft)
    }, [isLeft, onClick])

    return (
      <Container {...props} fill={fill} onClick={onToggle} disabled={state === 'Disabled'}>
        <Toggle isLeft={isLeft} />
        <Label active={isLeft} color={fill}>
          {left}
        </Label>
        <Label active={!isLeft} color={fill}>
          {right}
        </Label>
      </Container>
    )
  }
)

const Container = styled.button<{ fill: Fill }>`
  ${({ fill }) => css`
    ${Font.Body}
    min-height: ${MIN_BUTTON_SIZE}px;
    ${Color.Focus}
    ${Fill[fill]}
    border-radius: 8px;
    cursor: pointer;
    padding: 4px 8px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 8px;
    position: relative;

    &:not(:disabled):hover {
      background-image: linear-gradient(rgb(0 0 0/20%) 0 0);
      background-blend-mode: darken;
    }

    &:disabled {
      ${Fill.Inactive}
      cursor: not-allowed;
    }
  `}
`

const Toggle = styled.div<{ isLeft: boolean }>`
  ${({ isLeft }) => css`
    left: ${isLeft ? '4px' : 'calc(50%)'};
    width: calc(50% - 4px);
    height: calc(100% - 8px);
    ${Fill.Primary}
    position: absolute;
    border-radius: 6px;
    transition: left 0.2s ease-in-out;
  `}
`

const Label = styled.div<{ active: boolean; color: Fill & Color }>`
  ${({ active, color, theme }) => css`
    ${Color[active ? color : 'Focus']}
    position: relative;
    transition: color 0.2s ease-in-out;
  `}
`
