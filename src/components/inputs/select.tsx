import styled from '@emotion/styled'
import React, { ChangeEvent, useCallback } from 'react'
import { View } from '../../foundation'
import { MIN_BUTTON_SIZE } from '../../foundation/size'
import { css } from '@emotion/react'
import { Border } from '../../themes/default/border'

interface Props {
  children?: React.ReactNode
  options: Readonly<string[]>
  value?: string
  border?: Border
  onSelect: (index: number, value: string) => void
}

export const SelectInput = View<Props>(
  ({ options, border = 'Secondary', onSelect, value, forwardedRef, children, ...props }) => {
    const onClick = useCallback(
      (e: ChangeEvent<HTMLSelectElement>) => {
        const i = options.findIndex(op => op === e.target.value)
        onSelect(i, options[i])
      },
      [onSelect, options]
    )

    return (
      <Container {...props} border={border}>
        {children}
        <Options onChange={onClick} value={value} ref={forwardedRef}>
          {options.map((option, i) => (
            <option key={i}>{option}</option>
          ))}
        </Options>
        <ArrowDown />
      </Container>
    )
  }
)

const Container = styled.div<{ border: Border }>`
  ${({ theme, border }) => css`
    ${theme.border[border]}
    border-radius: 8px;
    position: relative;
    display: flex;
    align-items: center;
    gap: 4px;
  `}
`

const Options = styled.select`
  padding: 4px;
  padding-right: 20px;
  height: ${MIN_BUTTON_SIZE}px;
  cursor: pointer;
  outline: none;
  width: max-content;
  font-size: inherit;
  text-align: center;
  appearance: none;
`

const ArrowDown = styled.div`
  position: absolute;
  top: calc(50% - 4px);
  right: 6px;
  width: 6px;
  height: 6px;
  pointer-events: none;
  border: 2px solid currentColor;
  border-right: none;
  border-top: none;
  transform: rotate(-45deg);
`
