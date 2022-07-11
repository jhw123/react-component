import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { View } from '@src/Core/View'
import { StackAlign } from './Enums'

interface Option {
  align?: StackAlign
  children: React.ReactNode
}

const Stack = styled.div<{ align: StackAlign }>`
  ${props => css`
    text-align: ${(() => {
      switch (props.align) {
        case StackAlign.Start:
          return 'left'
        case StackAlign.End:
          return 'right'
        case StackAlign.Center:
          return 'center'
      }
    })()};
  `}
`

const ChildWrapper = styled.div`
  display: inline-block;
`

export const StackLayout = View<Option, HTMLDivElement>(({ align = StackAlign.Start, children, ...props }) => {
  return (
    <Stack align={align} {...props}>
      {React.Children.map(children, (child: any, i) => {
        return <ChildWrapper key={child?.key ?? i}>{child}</ChildWrapper>
      })}
    </Stack>
  )
})
