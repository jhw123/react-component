import { css } from '@emotion/react'
import styled from '@emotion/styled'
import React, { useCallback, useId } from 'react'
import { View } from '../../foundation'
import { Border } from '../../themes/default/border'
import { Fill } from '../../themes/default/fill'

interface Props {
  children?: React.ReactNode
  checked?: boolean
  disabled?: boolean
  fill?: Fill & Border
  onCheck?: (nextState: boolean) => void
}

export const RadioInput = View<Props>(
  ({ checked = true, disabled = false, children, onCheck, fill = 'Focus', forwardedRef, ...props }) => {
    const id = useId()

    const onClick = useCallback(() => {
      onCheck?.(!checked)
    }, [onCheck, checked])

    return (
      <Container {...props}>
        <RadioCircle id={id} border={fill} type="radio" onClick={onClick} disabled={disabled} ref={forwardedRef} />
        <Label htmlFor={id}>{children}</Label>
        {checked && <Check fill={fill} />}
      </Container>
    )
  }
)

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: start;
  cursor: pointer;
  user-select: none;
`

const RadioCircle = styled.input<{ border: Border }>`
  ${({ theme, border }) => css`
    padding-right: 16px;
    border-radius: 50%;
    height: 28px;
    width: 28px;
    appearance: none;
    margin: 0 8px 0 0;
    cursor: pointer;
    ${theme.border[border]}
    flex-shrink: 0;

    &:disabled {
      cursor: not-allowed;
      filter: grayscale(1);
    }
  `}
`

const Label = styled.label`
  ${({ theme }) => css`
    cursor: pointer;
    ${theme.font.Body}
    margin-top: 3px;
  `}
`

const Check = styled.div<{ fill: Fill }>`
  ${({ theme, fill }) => css`
    ${theme.fill[fill]}
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
