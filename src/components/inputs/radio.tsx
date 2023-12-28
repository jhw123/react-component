import { css } from '@emotion/react'
import styled from '@emotion/styled'
import React from 'react'
import { useCallback, useId } from 'react'
import { Fill, Border, View, ComponentState } from '../../foundation'

interface Props {
  children?: React.ReactNode
  state?: ComponentState
  fill?: Fill & Border
  onCheck?: (nextState: ComponentState) => void
}

export const RadioInput = View(({ state = 'Default', children, onCheck, fill = 'Focus', ...props }: Props) => {
  const id = useId()

  const onClick = useCallback(() => {
    onCheck?.(state === 'Default' ? 'Checked' : 'Default')
  }, [onCheck, state])

  return (
    <Container {...props}>
      <RadioCircle id={id} fill={state === 'Checked' ? fill : 'Primary'} type="radio" onClick={onClick} />
      <Label htmlFor={id}>{children}</Label>
      {state === 'Checked' && <Check />}
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

const RadioCircle = styled.input<{ fill: Fill }>`
  ${({ fill }) => css`
    padding-right: 16px;
    border-radius: 50%;
    height: 24px;
    width: 24px;
    ${Fill[fill]}
    appearance: none;
    margin: 0 8px 0 0;
    cursor: pointer;
    ${fill === 'Primary' && Border.Secondary}
    flex-shrink: 0;
  `}
`

const Label = styled.label`
  cursor: pointer;
`

const Check = styled.div`
  ${Fill.Primary}
  width: 12px;
  height: 12px;
  position: absolute;
  left: 0;
  top: 0;
  pointer-events: none;
  border-radius: 50%;
  transform: translate(50%, 50%);
`
