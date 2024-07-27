import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { useMemo } from 'react'
import { View } from '../../foundation'
import { Fill } from '../../themes/default/fill'
import { CaptionText } from '../texts'
import React from 'react'

interface Props {
  min: number
  max: number
  fill?: Fill
  minLabel?: string
  maxLabel?: string
  value?: number
  onChange?: (value: number) => void
}

export const SliderInput = View<Props>(
  ({ min, max, minLabel, maxLabel, fill = 'Brand', value = min, onChange, ...props }) => {
    const ticks = useMemo(() => Array.from({ length: max - min + 1 }, (_, i) => i + min), [max, min])

    return (
      <Container {...props}>
        <Track />
        <Slider type="range" min={min} max={max} value={value} onChange={e => onChange?.(Number(e.target.value))} />
        <TickContainer>
          {ticks.map(tick => (
            <Tick key={tick} fill={fill} />
          ))}
        </TickContainer>
        <LabelContainer>
          {minLabel && <CaptionText marginTop={4}>{minLabel}</CaptionText>}
          {maxLabel && <CaptionText marginTop={4}>{maxLabel}</CaptionText>}
        </LabelContainer>
      </Container>
    )
  }
)

const Container = styled.div`
  position: relative;
`

const Slider = styled.input`
  width: 100%;
  appearance: none;
  position: relative;
  cursor: pointer;
`

const Track = styled.div`
  ${({ theme }) => css`
    ${theme.fill.Secondary}
    position: absolute;
    height: 4px;
    width: 100%;
    left: 0;
    top: 6px;
  `}
`

const TickContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 7px;
`

const Tick = styled.div<{ fill: Fill }>`
  ${({ theme, fill }) => css`
    ${theme.fill[fill]}
    width: 2px;
    height: 8px;
  `}
`

const LabelContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
