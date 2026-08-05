import { css } from '@emotion/react'
import styled from '@emotion/styled'
import React, { ChangeEvent, KeyboardEvent, useCallback } from 'react'
import { View } from '../../foundation'
import { Border } from '../../themes/default/border'
import { Color } from '../../themes/default/color'

interface Props {
  value: string
  disabled?: boolean
  placeholder?: string
  maxRows?: number
  minRows?: number
  readonly?: boolean
  color?: Color
  border?: Border
  autoFocus?: boolean
  children?: React.ReactNode
  onChange?: (value: string) => void
  onEnter?: () => void
}

export const TextInput = View<Props>(
  ({
    value,
    onChange,
    disabled = false,
    placeholder,
    maxRows = 0,
    minRows = 0,
    readonly = false,
    forwardedRef,
    color = 'Primary',
    border = 'Focus',
    autoFocus = false,
    onEnter,
    children,
    ...props
  }) => {
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
      <Container {...props} color={color} border={border}>
        {children}
        <InputArea maxRows={maxRows} minRows={minRows}>
          <HeightResizer>{value + '\n'}</HeightResizer>
          <InputBox
            onChange={onWrite}
            value={value}
            disabled={disabled}
            placeholder={placeholder}
            readOnly={readonly}
            onKeyUp={onKeyDown}
            ref={forwardedRef}
            autoFocus={autoFocus}
          />
        </InputArea>
      </Container>
    )
  }
)

const Container = styled.div<{ color: Color; border: Border }>`
  ${({ theme, color, border }) => css`
    width: calc(100% - 18px);
    border-radius: 8px;
    ${theme.border.Secondary}
    ${theme.color[color]}

    &:focus-within {
      ${theme.border[border]}
    }
  `}
`

const InputArea = styled.div<{ maxRows: number; minRows: number }>`
  ${({ maxRows, minRows }) => css`
    position: relative;
    height: fit-content;
    box-sizing: content-box;
    overflow: auto;
    padding: 8px;

    ${0 < maxRows &&
    css`
      max-height: ${maxRows * 1.4}rem;
    `}
    ${0 < minRows &&
    css`
      min-height: ${minRows * 1.4}rem;
    `}
  `}
`

const InputBox = styled.textarea`
  ${({ theme }) => css`
    box-sizing: border-box;
    font-family: inherit;
    ${theme.font.Body}
    outline: none;
    position: absolute;
    height: calc(100% - 16px);
    resize: none;
    overflow: hidden;
    top: 8px;
    left: 8px;
    right: 8px;
    word-break: break-word;
    white-space: pre-line;

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
    word-break: break-word;
  `}
`
