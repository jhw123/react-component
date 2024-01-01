import { css } from '@emotion/react'
import styled from '@emotion/styled'
import React, { useCallback } from 'react'
import { MIN_BUTTON_SIZE } from '../../foundation/size'
import { Fill, Color, View, Font, ComponentState, Border } from '../../foundation'

interface Props {
  state?: Exclude<ComponentState, 'Checked'>
  onClick?: (next: boolean) => void
  left: string
  right: string
  isLeft?: boolean
  fill: Exclude<Fill & Color & Border, 'Primary'>
}

export const ToggleButton = View<Props>(
  ({ left, right, fill, onClick, isLeft = true, state = 'Default', ...props }) => {
    const onToggle = useCallback(() => {
      onClick?.(!isLeft)
    }, [isLeft, onClick])

    return (
      <Container {...props} border={fill} onClick={onToggle} disabled={state === 'Disabled'}>
        <Toggle fill={fill} isLeft={isLeft} />
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

const Container = styled.button<{ border: Border }>`
  ${({ border }) => css`
    ${Font.Body}
    min-height: ${MIN_BUTTON_SIZE}px;
    ${Border[border]}
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
      filter: grayscale(0.8);
      cursor: not-allowed;
    }
  `}
`

const Toggle = styled.div<{ isLeft: boolean; fill: Fill }>`
  ${({ isLeft, fill }) => css`
    left: ${isLeft ? '4px' : 'calc(50%)'};
    width: calc(50% - 4px);
    height: calc(100% - 8px);
    ${Fill[fill]}
    position: absolute;
    border-radius: 6px;
    transition: left 0.2s ease-in-out;
  `}
`

const Label = styled.div<{ active: boolean; color: Fill & Color }>`
  ${({ active, color }) => css`
    ${active ? 'color: white;' : Color[color]}
    position: relative;
    transition: color 0.2s ease-in-out;
  `}
`
