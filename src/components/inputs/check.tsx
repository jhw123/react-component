import { css } from '@emotion/react'
import styled from '@emotion/styled'
import React, { useCallback, useId } from 'react'
import { Border } from '../../themes/default/border'
import { View } from '../..'

interface Props {
  children?: React.ReactNode
  disabled?: boolean
  checked?: boolean
  checkColor?: Exclude<Border, 'Secondary'>
  onCheck?: (nextState: boolean) => void
}

export const CheckInput = View(
  ({ disabled = false, checked = true, children, onCheck, checkColor = 'Focus', ...props }: Props) => {
    const id = useId()

    const onClick = useCallback(() => {
      onCheck?.(!checked)
    }, [onCheck, checked])

    return (
      <Container {...props}>
        <Checkbox id={id} type="checkbox" border={checkColor} onClick={onClick} disabled={disabled} />
        <Label htmlFor={id}>{children}</Label>
        <Check border={checkColor} checked={checked} />
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

const Checkbox = styled.input<{ border: Border }>`
  ${({ border, theme }) => css`
    padding: 4px;
    padding-right: 16px;
    border-radius: 8px;
    height: 28px;
    width: 28px;
    ${theme.border[border]}
    appearance: none;
    margin: 0 8px 0 0;
    cursor: pointer;

    &:disabled {
      cursor: not-allowed;
      filter: grayscale(1);
    }
  `}
`

const Label = styled.label`
  ${({ theme }) => css`
    margin-top: 3px;
    cursor: pointer;
    ${theme.font.Body}
  `}
`

const Check = styled.div<{ border: Border; checked: boolean }>`
  ${({ theme, border, checked }) => css`
    ${theme.border[border]}
    ${!checked &&
    css`
      filter: grayscale(1);
      opacity: 0.3;
    `}
    border-width: 4px;
    border-left: none;
    border-top: none;
    width: 8px;
    height: 14px;
    position: absolute;
    transform: rotate(45deg);
    left: 8px;
    top: 3px;
    pointer-events: none;
  `}
`
