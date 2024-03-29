import { css } from '@emotion/react'
import styled from '@emotion/styled'
import React, { ChangeEvent, KeyboardEvent, useCallback } from 'react'
import { View } from '../../foundation'

interface Props {
  value: string
  disabled?: boolean
  placeholder?: string
  maxRows?: number
  readonly?: boolean
  onChange?: (value: string) => void
  onEnter?: () => void
}

export const TextInput = View<Props>(
  ({ value, onChange, disabled = false, placeholder, maxRows = 0, readonly = false, onEnter, ...props }) => {
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
        <Wrapper>
          <HeightResizer>{value + '\n'}</HeightResizer>
          <InputBox
            onChange={onWrite}
            value={value}
            disabled={disabled}
            placeholder={placeholder}
            readOnly={readonly}
            onKeyUp={onKeyDown}
          />
        </Wrapper>
      </Container>
    )
  }
)

const Container = styled.div<{ rows: number }>`
  ${({ theme, rows }) => css`
    width: calc(100% - 18px);
    border-radius: 8px;
    ${theme.border.Secondary}
    padding: 8px;
    height: fit-content;
    box-sizing: content-box;
    ${0 < rows &&
    css`
      max-height: ${rows * 1.4}rem;
    `}
    overflow: auto;

    &:focus-within {
      ${theme.color.Primary}
      ${theme.border.Focus}
    }
  `}
`

const Wrapper = styled.div`
  position: relative;
`

const InputBox = styled.textarea`
  ${({ theme }) => css`
    width: 100%;
    box-sizing: border-box;
    font-family: inherit;
    ${theme.font.Body}
    outline: none;
    position: absolute;
    height: 100%;
    resize: none;
    overflow: hidden;
    top: 0;
    left: 0;
    word-break: break-all;

    ::placeholder {
      ${theme.color.Secondary}
    }

    &:disabled {
      cursor: not-allowed;
      filter: grayscale(1);
    }
  `}
`

const HeightResizer = styled.div`
  ${({ theme }) => css`
    white-space: pre-line;
    ${theme.font.Body}
    opacity: 0;
    word-break: break-all;
  `}
`
