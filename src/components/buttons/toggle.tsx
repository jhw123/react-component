import { css } from '@emotion/react'
import styled from '@emotion/styled'
import React, { useCallback } from 'react'
import { View } from '../../foundation'
import { MIN_BUTTON_SIZE } from '../../foundation/size'
import { Border } from '../../themes/default/border'
import { Color } from '../../themes/default/color'
import { Fill } from '../../themes/default/fill'

interface Props {
  disabled?: boolean
  onClick?: (next: boolean, e: React.MouseEvent<HTMLButtonElement>) => void
  left: string
  right: string
  isLeft?: boolean
  fill: Exclude<Fill & Color & Border, 'Primary'>
}

export const ToggleButton = View<Props>(({ left, right, fill, onClick, isLeft = true, disabled = false, ...props }) => {
  const onToggle = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      onClick?.(!isLeft, e)
    },
    [isLeft, onClick]
  )

  return (
    <Container {...props} border={fill} onClick={onToggle} disabled={disabled}>
      <Toggle fill={fill} isLeft={isLeft} />
      <Label active={isLeft} color={fill}>
        {left}
      </Label>
      <Label active={!isLeft} color={fill}>
        {right}
      </Label>
    </Container>
  )
})

const Container = styled.button<{ border: Border }>`
  ${({ border, theme }) => css`
    ${theme.font.Body}
    min-height: ${MIN_BUTTON_SIZE}px;
    ${theme.border[border]}
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
  ${({ isLeft, fill, theme }) => css`
    left: ${isLeft ? '4px' : 'calc(50%)'};
    width: calc(50% - 4px);
    height: calc(100% - 8px);
    ${theme.fill[fill]}
    position: absolute;
    border-radius: 6px;
    transition: left 0.2s ease-in-out;
  `}
`

const Label = styled.div<{ active: boolean; color: Fill & Color }>`
  ${({ active, color, theme }) => css`
    ${active ? 'color: white;' : theme.color[color]}
    position: relative;
    transition: color 0.2s ease-in-out;
  `}
`
