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
  disabled?: boolean
  onChange?: (value: number) => void
}

const THUMB_SIZE = 16

export const SliderInput = View<Props>(
  ({ min, max, minLabel, maxLabel, fill = 'Focus', value = min, onChange, disabled = false, ...props }) => {
    const ticks = useMemo(() => Array.from({ length: max - min + 1 }, (_, i) => i + min), [max, min])

    return (
      <Container {...props}>
        <Track />
        <Slider
          type="range"
          fill={fill}
          min={min}
          max={max}
          outside={value < min || max < value}
          value={value}
          onChange={e => onChange?.(Number(e.target.value))}
          disabled={disabled}
        />
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

const Slider = styled.input<{ fill: Fill; outside: boolean }>`
  ${({ theme, fill, outside }) => css`
    width: 100%;
    height: ${THUMB_SIZE}px;
    appearance: none;
    position: relative;
    cursor: pointer;

    ::-webkit-slider-thumb {
      appearance: none;
      width: ${THUMB_SIZE}px;
      height: ${THUMB_SIZE}px;
      ${theme.fill[fill]}
      border-radius: 50%;
      cursor: pointer;
    }

    :disabled,
    :disabled::-webkit-slider-thumb {
      filter: contrast(0.6);
      cursor: not-allowed;
    }

    ${outside &&
    css`
      ::-webkit-slider-thumb {
        appearance: none;
        width: 0;
        height: 0;
      }
    `}
  `}
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
