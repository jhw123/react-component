import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { MIN_BUTTON_SIZE } from '@src/constants/size'
import { View } from '@src/foundation/view'
import { Border } from '@src/themes/default/border'
import { Fill } from '@src/themes/default/fill'
import React from 'react'
import { ChangeEvent, useCallback } from 'react'

interface Props {
  options: Readonly<string[]>
  value?: string
  onSelect: (index: number, value: string) => void
}

export const SelectInput = View(({ options, onSelect, value, ...props }: Props) => {
  const onClick = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      const i = options.findIndex(op => op === e.target.value)
      onSelect(i, options[i])
    },
    [onSelect, options]
  )

  return (
    <Container {...props}>
      <Options onChange={onClick} value={value}>
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
  ${Fill.Secondary}
`

const Options = styled.select`
  padding: 4px;
  padding-right: 16px;
  border-radius: 8px;
  height: ${MIN_BUTTON_SIZE}px;
  cursor: pointer;
  ${Border.Secondary}
  outline: none;
  width: 100%;
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
