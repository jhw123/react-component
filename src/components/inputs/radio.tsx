import { css } from '@emotion/react'
import styled from '@emotion/styled'
import React from 'react'
import { useCallback, useId } from 'react'
import { Fill, Border, View, ComponentState, Font } from '../../foundation'

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
      <RadioCircle id={id} border={fill} type="radio" onClick={onClick} disabled={state === 'Disabled'} />
      <Label htmlFor={id}>{children}</Label>
      {state === 'Checked' && <Check fill={fill} />}
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

const RadioCircle = styled.input<{ border: Border }>`
  ${({ border }) => css`
    padding-right: 16px;
    border-radius: 50%;
    height: 28px;
    width: 28px;
    appearance: none;
    margin: 0 8px 0 0;
    cursor: pointer;
    ${Border[border]}
    flex-shrink: 0;

    &:disabled {
      cursor: not-allowed;
      filter: grayscale(1);
    }
  `}
`

const Label = styled.label`
  cursor: pointer;
  ${Font.Body}
  margin-top: 3px;
`

const Check = styled.div<{ fill: Fill }>`
  ${({ fill }) => css`
    ${Fill[fill]}
    width: 18px;
    height: 18px;
    position: absolute;
    left: -4px;
    top: -4px;
    pointer-events: none;
    border-radius: 50%;
    transform: translate(50%, 50%);
  `}
`
