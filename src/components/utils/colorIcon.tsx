import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { useId } from 'react'
import { View } from '../../foundation'
import { Fill } from '../../themes/default/fill'
import React from 'react'

interface Props {
  size?: number
  src: string
  type?: Fill
  alt: string
}

export const ColorIcon = View<Props>(({ size = 20, forwardedRef, src, alt, type = 'Primary', ...props }) => {
  const id = useId()
  return (
    <Container {...props} size={size}>
      <Icon size={size} id={id} src={src} fill={type} />
      <svg height="0" width="0">
        <mask id={id}>
          <image xlinkHref={src} x="0" y="0" height={`${size}px`} width={`${size}px`} />
        </mask>
      </svg>
    </Container>
  )
})

const Container = styled.div<{ size: number }>`
  ${({ size }) => css`
    width: ${size}px;
    height: ${size}px;
  `}
`

const Icon = styled.div<{ size: number; id: string; src: string; fill: Fill }>`
  ${({ size, id, src, theme, fill }) => css`
    ${theme.fill[fill]}
    width: ${size}px;
    height: ${size}px;
    mask: url(#${id});
    mask-image: url(${src});
    -webkit-mask-box-image: url(${src});
  `}
`
