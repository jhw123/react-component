import { css } from '@emotion/react'
import styled from '@emotion/styled'
import React from 'react'
import { ComponentState, useCallback, useId } from 'react'
import { Border, View } from '../../foundation'

interface Props {
  children?: React.ReactNode
  state?: ComponentState
  checkColor?: Exclude<Border, 'Secondary'>
  onCheck?: (nextState: ComponentState) => void
}

export const CheckInput = View(({ state = 'Default', children, onCheck, checkColor = 'Focus', ...props }: Props) => {
  const id = useId()

  const onClick = useCallback(() => {
    onCheck?.(state === 'Default' ? 'Checked' : 'Default')
  }, [onCheck, state])

  return (
    <Container {...props}>
      <Checkbox id={id} type="checkbox" onClick={onClick} />
      <Label htmlFor={id}>{children}</Label>
      <Check border={checkColor} checked={state === 'Checked'} />
    </Container>
  )
})

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: start;
  cursor: pointer;
  user-select: none;
`

const Checkbox = styled.input`
  padding: 4px;
  padding-right: 16px;
  border-radius: 8px;
  height: 28px;
  width: 28px;
  ${Border.Secondary}
  appearance: none;
  margin: 0 8px 0 0;
  cursor: pointer;
`

const Label = styled.label`
  margin-top: 3px;
  cursor: pointer;
`

const Check = styled.div<{ border: Border; checked: boolean }>`
  ${({ border, checked }) => css`
    ${Border[border]}
    ${!checked &&
    css`
      filter: grayscale(1);
      opacity: 0.3;
    `}
    border-width: 4px;
    border-left: none;
    border-top: none;
    width: 12px;
    height: 18px;
    position: absolute;
    transform: rotate(45deg);
    left: 8px;
    top: 3px;
    pointer-events: none;
  `}
`
