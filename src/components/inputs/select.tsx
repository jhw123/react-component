import styled from '@emotion/styled'
import React, { ChangeEvent, useCallback } from 'react'
import { View } from '../../foundation'
import { MIN_BUTTON_SIZE } from '../../foundation/size'
import { css } from '@emotion/react'

interface Props {
  options: Readonly<string[]>
  value?: string
  onSelect: (index: number, value: string) => void
}

export const SelectInput = View<Props>(({ options, onSelect, value, forwardedRef, ...props }) => {
  const onClick = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      const i = options.findIndex(op => op === e.target.value)
      onSelect(i, options[i])
    },
    [onSelect, options]
  )

  return (
    <Container {...props}>
      <Options onChange={onClick} value={value} ref={forwardedRef}>
        {options.map((option, i) => (
          <option key={i}>{option}</option>
        ))}
      </Options>
      <ArrowDown />
    </Container>
  )
})

const Container = styled.div`
  position: relative;
`

const Options = styled.select`
  ${({ theme }) => css`
    padding: 4px;
    padding-right: 16px;
    border-radius: 8px;
    height: ${MIN_BUTTON_SIZE}px;
    cursor: pointer;
    ${theme.border.Secondary}
    outline: none;
    width: 100%;
    font-size: inherit;
    text-align: center;
    appearance: none;
  `}
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
