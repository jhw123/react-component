import { css } from '@emotion/react'
import styled from '@emotion/styled'
import React, { MutableRefObject, useCallback, useEffect, useId, useState } from 'react'
import { View } from '../../foundation'
import { Fill } from '../../themes/default/fill'

interface Props {
  children: React.ReactNode
  fill?: Fill
  noSelectionText?: string
  accept?: string
  onInput?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const FileInput = View<Props>(
  ({ children, fill = 'Focus', noSelectionText = 'No file selected', accept, forwardedRef, ...props }) => {
    const id = useId()
    const [fileName, setFileName] = useState(noSelectionText)

    const fileInputHandler = useCallback(
      (event: Event) => {
        const files = event.target && (event.target as HTMLInputElement).files
        if (files && files[0]) {
          setFileName(files[0].name ?? noSelectionText)
        }
      },
      [noSelectionText]
    )

    useEffect(() => {
      const ref = (forwardedRef as MutableRefObject<HTMLInputElement>)?.current

      if (ref) {
        ref.addEventListener('change', fileInputHandler)
      }
      return () => {
        ref?.removeEventListener('change', fileInputHandler)
      }
    }, [fileInputHandler, forwardedRef])

    useEffect(() => {
      if (noSelectionText) {
        setFileName(noSelectionText)
      }
    }, [noSelectionText])

    return (
      <Container {...props}>
        <Label htmlFor={id}>
          <Button fill={fill}>{children}</Button>
          <FileName>{fileName}</FileName>
        </Label>
        <Input type="file" id={id} ref={forwardedRef} accept={accept} />
      </Container>
    )
  }
)

const Container = styled.div`
  width: fit-content;
`

const Button = styled.div<{ fill: Fill }>`
  ${({ theme, fill }) => css`
    ${theme.fill[fill]}
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    padding: 8px;
    min-height: 42px;
    cursor: pointer;
  `}
`

const Label = styled.label`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  justify-content: center;
  gap: 8px;
`

const FileName = styled.div`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`

const Input = styled.input`
  display: none;
`
