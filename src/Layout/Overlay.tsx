import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { View } from '@src/Core/View'
import React, { useMemo } from 'react'
import { OverlayAlign } from './Enums'

interface Option {
  align?: OverlayAlign
  width: number | string
  height: number | string
  children: React.ReactNode
}

const Overlay = styled.div<{ w: number | string; h: number | string }>`
  ${props => css`
    position: absolute;
    width: ${typeof props.w === 'number' ? `${props.w}px` : props.w};
    height: ${typeof props.h === 'number' ? `${props.h}px` : props.h};
  `}
`

export const OverlayLayout = View<Option, HTMLDivElement>(
  ({ align = OverlayAlign.TopLeft, width, height, children, className, style }) => {
    const childStyle = useMemo(
      () =>
        Object.assign(
          {
            position: 'absolute',
          },
          ...(OverlayAlign[align].match(/[A-Z][a-z]+/g)?.map(dir => ({ [dir.toLowerCase()]: 0 })) ?? [])
        ),
      [align]
    )

    return (
      <Overlay w={width} h={height} className={className} style={style}>
        {React.Children.map(children, (child: any, i) => {
          return (
            <div style={childStyle} key={child?.key ?? i}>
              {child}
            </div>
          )
        })}
      </Overlay>
    )
  }
)
