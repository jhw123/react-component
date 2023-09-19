import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { View } from '@src/foundation/view'
import { produce } from 'immer'
import isEqual from 'lodash/isEqual'
import React, { MouseEvent, TouchEvent, useCallback, useEffect } from 'react'
import { useWindowSize } from 'react-use'

type Direction = 'horizontal' | 'vertical'

interface Props {
  children: React.ReactNode
  initialSizes?: number[]
  direction?: Direction
}

const BAR_WIDTH = 12

const DRAG_THRESHOLD = 5

export const SplitView = View<Props>(({ children, initialSizes, direction = 'horizontal', ...props }) => {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const childrenCnt = React.Children.count(children)
  const [draggedbarIndex, setDraggedBarIndex] = React.useState(-1)
  const [sizes, setSizes] = React.useState<number[]>([])
  const [prevInitialSizes, setPrevInitialSizes] = React.useState(initialSizes)
  const { width, height } = useWindowSize()

  const dragBarStart = useCallback(
    (i: number) => () => {
      setDraggedBarIndex(i)
      return false
    },
    []
  )

  const dragBarEnd = useCallback(() => {
    setDraggedBarIndex(-1)
  }, [])

  const dragBarOver = useCallback(
    (event: MouseEvent) => {
      const container = containerRef.current
      if (
        [event.clientX, event.clientY].some(cor => cor <= DRAG_THRESHOLD) ||
        width - DRAG_THRESHOLD <= event.clientX ||
        height - DRAG_THRESHOLD <= event.clientY
      ) {
        setDraggedBarIndex(-1)
      }
      if (container && draggedbarIndex >= 0) {
        event.preventDefault()
        setSizes(sizes =>
          produce(sizes, draft => {
            const base = draft.slice(0, draggedbarIndex).reduce((s, n) => s + n, 0)
            const diff =
              direction === 'horizontal'
                ? event.clientX - base - container.getBoundingClientRect().left - draft[draggedbarIndex]
                : event.clientY - base - container.getBoundingClientRect().top - draft[draggedbarIndex]
            draft[draggedbarIndex] += diff
            draft[draggedbarIndex + 1] -= diff
          })
        )
      }
    },
    [direction, draggedbarIndex, height, width]
  )

  const dragBarOverByTouch = useCallback(
    (event: TouchEvent) => {
      const container = containerRef.current
      if (container && draggedbarIndex >= 0) {
        event.preventDefault()
        setSizes(sizes =>
          produce(sizes, draft => {
            const base = draft.slice(0, draggedbarIndex).reduce((s, n) => s + n, 0)
            const diff =
              direction === 'horizontal'
                ? event.touches[0].clientX - base - container.getBoundingClientRect().left - draft[draggedbarIndex]
                : event.touches[0].clientY - base - container.getBoundingClientRect().top - draft[draggedbarIndex]
            draft[draggedbarIndex] += diff
            draft[draggedbarIndex + 1] -= diff
          })
        )
      }
    },
    [direction, draggedbarIndex]
  )

  useEffect(() => {
    const observer = new ResizeObserver(() => {
      const fraction = prevInitialSizes?.reduce((s, n) => s + n, 0) ?? childrenCnt
      const portion =
        direction === 'horizontal'
          ? Math.max(0, (containerRef.current?.clientWidth ?? 0) - (childrenCnt - 1) * BAR_WIDTH) / fraction
          : Math.max(0, (containerRef.current?.clientHeight ?? 0) - (childrenCnt - 1) * BAR_WIDTH) / fraction
      const newSizes = [...Array(childrenCnt)].map((_, i) => (prevInitialSizes?.[i] ?? 1) * portion)
      setSizes(newSizes)
    })
    const container = containerRef.current

    if (container) {
      observer.observe(containerRef.current)
    }

    return () => {
      if (container) {
        observer.unobserve(container)
      }
    }
  }, [childrenCnt, direction, prevInitialSizes])

  useEffect(() => {
    if (!isEqual(initialSizes, prevInitialSizes)) {
      setPrevInitialSizes(initialSizes)
    }
  }, [initialSizes, prevInitialSizes])

  return (
    <Container
      {...props}
      ref={containerRef}
      direction={direction}
      onTouchMove={dragBarOverByTouch}
      onMouseMove={dragBarOver}
      onMouseUp={dragBarEnd}
      onTouchEnd={dragBarEnd}
    >
      {React.Children.map(children, (child, i) => {
        const hasBar = i < childrenCnt - 1
        return (
          <>
            <ChildView style={{ [direction === 'horizontal' ? 'width' : 'height']: sizes[i] }}>{child}</ChildView>
            {hasBar && (
              <Bar
                direction={direction}
                isOnDrag={i === draggedbarIndex}
                onTouchStart={dragBarStart(i)}
                onMouseDown={dragBarStart(i)}
              />
            )}
          </>
        )
      })}
    </Container>
  )
})

const Container = styled.div<{ direction: Direction }>`
  ${({ direction }) => css`
    width: 100%;
    display: flex;
    flex-direction: ${direction === 'horizontal' ? 'row' : 'column'};
    justify-content: stretch;
    align-items: stretch;
    height: 100%;
  `}
`

const ChildView = styled.div`
  width: 100%;
  position: relative;
  overflow: auto;
`

const Bar = styled.div<{ isOnDrag: boolean; direction: Direction }>`
  ${({ isOnDrag, direction, theme }) => css`
    width: ${direction === 'horizontal' ? BAR_WIDTH + 'px' : '100%'};
    height: ${direction === 'horizontal' ? '100%' : BAR_WIDTH + 'px'};
    ${isOnDrag ? theme.fill.Focus : theme.fill.Base}
    cursor: ${direction === 'horizontal' ? 'col-resize' : 'row-resize'};
    ${isOnDrag ? theme.color.Highlight : theme.color.Secondary}
    position: relative;

    &:hover {
      ${theme.fill.Focus}
      ${theme.color.Highlight}
    }

    &::after {
      content: '•••';
      font-size: ${BAR_WIDTH}px;
      display: block;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) rotate(${direction === 'horizontal' ? 90 : 0}deg);
      position: absolute;
      line-height: ${BAR_WIDTH}px;
    }
  `}
`
