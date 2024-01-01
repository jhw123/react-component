import styled from '@emotion/styled'
import React, { ChangeEvent, KeyboardEvent, useCallback } from 'react'
import { Border, Color, ComponentState, Fill, Font, View } from '../../foundation'
import { css } from '@emotion/react'

interface Props {
  value: string
  state?: Exclude<ComponentState, 'Checked'>
  placeholder?: string
  maxRows?: number
  readonly?: boolean
  onChange?: (value: string) => void
  onEnter?: () => void
}

export const TextInput = View<Props>(
  ({ value, onChange, state = 'Default', placeholder, maxRows = 0, readonly = false, onEnter, ...props }) => {
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
      <Container {...props} rows={maxRows}>
        <HeightResizer>{value + '\n'}</HeightResizer>
        <InputBox
          onChange={onWrite}
          value={value}
          disabled={state === 'Disabled'}
          placeholder={placeholder}
          readOnly={readonly}
          onKeyUp={onKeyDown}
        />
      </Container>
    )
  }
)

const Container = styled.div<{ rows: number }>`
  ${({ rows }) => css`
    position: relative;
    width: 100%;
    border-radius: 8px;
    ${Border.Secondary}
    padding: 8px;
    ${Fill.Secondary}
    height: fit-content;
    ${0 < rows &&
    css`
      max-height: ${rows * 1.4}rem;
    `}
    overflow: auto;

    &:focus-within {
      ${Color.Primary}
      ${Border.Focus}
    }
  `}
`

const InputBox = styled.textarea`
  width: calc(100% - 16px);
  resize: vertical;
  box-sizing: border-box;
  font-family: inherit;
  ${Font.Body}
  outline: none;
  position: absolute;
  height: calc(100% - 16px);
  resize: none;
  overflow: hidden;
  top: 8px;
  left: 8px;

  ::placeholder {
    ${Color.Secondary}
  }

  &:disabled {
    cursor: not-allowed;
    filter: grayscale(1);
  }
`

const HeightResizer = styled.div`
  white-space: pre-line;
  ${Font.Body}
  opacity: 0;
`
