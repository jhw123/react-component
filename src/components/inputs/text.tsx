import styled from '@emotion/styled'
import React, { ChangeEvent, KeyboardEvent, useCallback } from 'react'
import { MIN_BUTTON_SIZE } from '../../foundation/size'
import { Border, Color, ComponentState, Fill, Font, View } from '../../foundation'

interface Props {
  value: string
  state?: Exclude<ComponentState, 'Checked'>
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
    filter: grayscale(1);
  }
`
