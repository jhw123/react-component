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
  Placeholder: css`
    color: ${BaseColor.Gray020};
  `,
  Highlight: css`
    color: ${BaseColor.Gray000};
  `,
  Focus: css`
    color: ${BaseColor.RoyalBlue};
  `,
  Action: css`
    color: ${BaseColor.Green};
  `,
  Inherit: css`
    color: inherit;
  `,
} as const

export type Color = keyof typeof Color
