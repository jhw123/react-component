import { css } from '@emotion/react'
import { BaseColor } from './base'

export const Color = {
  Primary: css`
    color: ${BaseColor.Gray080};
  `,
  Secondary: css`
    color: ${BaseColor.Gray050};
  `,
  Success: css`
    color: ${BaseColor.Green};
  `,
  Danger: css`
    color: ${BaseColor.Red};
  `,
  Warning: css`
    color: ${BaseColor.Orange};
  `,
  Focus: css`
    color: ${BaseColor.Gray090};
  `,
  Highlight: css`
    background-color: ${BaseColor.Gray000};
  `,
  Brand: css`
    color: ${BaseColor.Blue};
  `,
} as const

export type Color = keyof typeof Color
