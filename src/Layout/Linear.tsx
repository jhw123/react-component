import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { View } from '@src/Core/View'
import { LinearAlign, LinearDirection, LinearJustify } from './Enums'

interface Option {
  direction?: LinearDirection
  justify?: LinearJustify
  align?: LinearAlign
  children: React.ReactNode
}

const Linear = styled.div<{ layoutDirection: LinearDirection; justify: LinearJustify; align: LinearAlign }>`
  ${({ justify, align, layoutDirection }) => css`
    display: flex;

    justify-content: ${(() => {
      switch (justify) {
        case LinearJustify.Center:
          return 'center'
        case LinearJustify.End:
          return 'flex-end'
        case LinearJustify.SpaceBetween:
          return 'space-between'
        case LinearJustify.SpaceAround:
          return 'space-around'
        case LinearJustify.Start:
          return 'start'
      }
    })()};

    align-items: ${(() => {
      switch (align) {
        case LinearAlign.Center:
          return 'center'
        case LinearAlign.End:
          return 'flex-end'
        case LinearAlign.Stretch:
          return 'stretch'
        case LinearAlign.Start:
          return 'flex-start'
      }
    })()};

    flex-direction: ${(() => {
      switch (layoutDirection) {
        case LinearDirection.Vertical:
          return 'column'
        case LinearDirection.Horizontal:
          return 'row'
      }
    })()};
  `}
`

export const LinearLayout = View<Option, HTMLDivElement>(
  ({
    direction = LinearDirection.Horizontal,
    justify = LinearJustify.Start,
    align = LinearAlign.Stretch,
    children,
    ...props
  }) => {
    return (
      <Linear {...props} layoutDirection={direction} justify={justify} align={align}>
        {children}
      </Linear>
    )
  }
)
