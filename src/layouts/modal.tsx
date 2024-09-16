import { css } from '@emotion/react'
import styled from '@emotion/styled'
import React from 'react'

interface Props {
  children: React.ReactNode
  open: boolean
  width?: number
  onClose?: () => void
}

export const ModalLayout = ({ children, open, width = 600, onClose }: Props) => {
  return (
    <View>
      <Background open={open} onClick={onClose}>
        <Close />
        <Container
          open={open}
          width={width}
          onClick={e => {
            e.stopPropagation()
          }}
        >
          {children}
        </Container>
      </Background>
    </View>
  )
}

const View = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  overflow: hidden;
  pointer-events: none;
`

const Background = styled.div<{ open: boolean }>`
  ${({ open }) => css`
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.9);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 100;
    opacity: ${open ? 1 : 0};
    transition: opacity 0.2s;
    ${open ? 'pointer-events: all;' : 'pointer-events: none;'}
  `}
`

const Container = styled.div<{ open: boolean; width: number }>`
  ${({ theme, open, width }) => css`
    position: absolute;
    max-width: calc(100% - 32px);
    max-height: 80vh;
    width: ${width}px;
    padding: 16px;
    border-radius: 8px;
    top: ${open ? '50%' : '100%'};
    left: 50%;
    transform: translate(-50%, -50%);
    transition: top 0.2s;
    ${theme.fill.Primary}
    ${theme.elevation.L1}
    overflow-y: auto;
    overflow-x: hidden;
  `}
`

const Close = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;

  ::before {
    content: '';
    width: 2px;
    height: 40px;
  }

  ::after {
    content: '';
    width: 2px;
    height: 40px;
  }
`
