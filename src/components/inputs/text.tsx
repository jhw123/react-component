import { css } from '@emotion/react'
import styled from '@emotion/styled'
import React, { ChangeEvent, KeyboardEvent, useCallback } from 'react'
import { View } from '../../foundation'
import { Color } from '../../themes/default/color'
import { Border } from '../../themes/default/border'

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
      <Container {...props} color={color} maxRows={maxRows} minRows={minRows} border={border}>
        <Wrapper>
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
        </Wrapper>
      </Container>
    )
  }
)

const Container = styled.div<{ maxRows: number; minRows: number; color: Color; border: Border }>`
  ${({ theme, maxRows, minRows, color, border }) => css`
    width: calc(100% - 18px);
    border-radius: 8px;
    ${theme.border.Secondary}
    ${theme.color[color]}
    padding: 8px;
    height: fit-content;
    box-sizing: content-box;
    ${0 < maxRows &&
    css`
      max-height: ${maxRows * 1.4}rem;
    `}
    ${0 < minRows &&
    css`
      min-height: ${minRows * 1.4}rem;
    `}
    overflow: auto;

    &:focus-within {
      ${theme.border[border]}
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
