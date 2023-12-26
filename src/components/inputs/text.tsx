import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { MIN_BUTTON_SIZE } from '@src/constants/size'
import { ComponentState } from '@src/constants/states'
import { View } from '@src/foundation/view'
import { Border } from '@src/foundation/border'
import { Color } from '@src/foundation/color'
import { Fill } from '@src/foundation/fill'
import { Font } from '@src/foundation/font'
import React from 'react'
import { ChangeEvent, KeyboardEvent, useCallback } from 'react'

interface Props {
  value: string
  state?: ComponentState
  placeholder?: string
  rows?: number
  readonly?: boolean
  onChange?: (value: string) => void
  onEnter?: () => void
}

export const TextInput = View<Props>(
  ({ value, onChange, state = 'Default', placeholder, rows = 3, readonly = false, onEnter, ...props }) => {
    const onWrite = useCallback(
      (e: ChangeEvent<HTMLTextAreaElement>) => {
        onChange?.(e.target.value)
      },
      [onChange]
    )

    const onKeyDown = useCallback(
      (e: KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
          e.preventDefault()
          onEnter?.()
        }
      },
      [onEnter]
    )

    return (
      <Container
        {...props}
        onChange={onWrite}
        value={value}
        disabled={state === 'Disabled'}
        placeholder={placeholder}
        rows={rows}
        readOnly={readonly}
        onKeyUp={onKeyDown}
      />
    )
  }
)

const Container = styled.textarea`
  width: 100%;
  resize: vertical;
  box-sizing: border-box;
  font-family: inherit;
  ${Font.Body}
  border-radius: 8px;
  ${Border.Secondary}
  padding: 8px;
  line-height: inherit;
  min-height: ${MIN_BUTTON_SIZE}px;
  ${Fill.Secondary}
  outline: none;

  &:focus {
    ${Color.Primary}
    ${Border.Focus}
  }

  ::placeholder {
    ${Color.Secondary}
  }

  &:disabled {
    cursor: not-allowed;
  }
`
