import { css } from '@emotion/react'
import { BaseColor } from './base'

export const Border = {
  Primary: css`
    border: 2px solid ${BaseColor.Gray050};
  `,
  Secondary: css`
    border: 2px solid ${BaseColor.Gray030};
  `,
  Success: css`
    border: 2px solid ${BaseColor.Green};
  `,
  Danger: css`
    border: 2px solid ${BaseColor.Red};
  `,
  Warning: css`
    border: 2px solid ${BaseColor.Orange};
  `,
  Focus: css`
    border: 2px solid ${BaseColor.Blue030};
  `,
} as const

export type Border = keyof typeof Border
