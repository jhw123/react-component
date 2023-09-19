import { css } from '@emotion/react'
import { BaseColor } from './base'

export const Border = {
  Primary: css`
    border: 2px solid ${BaseColor.Gray050};
  `,
  Highlight: css`
    border: 2px solid ${BaseColor.Gray000};
  `,
  Secondary: css`
    border: 2px solid ${BaseColor.Gray030};
  `,
  Success: css`
    border: 2px solid ${BaseColor.Green};
  `,
  Focus: css`
    border: 2px solid ${BaseColor.RoyalBlue};
  `,
  Action: css`
    border: 2px solid ${BaseColor.Green};
  `,
  Danger: css`
    border: 2px solid ${BaseColor.Red};
  `,
} as const

export type Border = keyof typeof Border
