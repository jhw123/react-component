import { css } from '@emotion/react'
import { BaseColor } from './base'

export const Fill = {
  Primary: css`
    background-color: ${BaseColor.Gray000};
    @media (prefers-color-scheme: dark) {
      background-color: ${BaseColor.Gray080};
    }
  `,
  Secondary: css`
    background-color: ${BaseColor.Gray005};
    @media (prefers-color-scheme: dark) {
      background-color: ${BaseColor.Gray070};
    }
  `,
  Success: css`
    background-color: ${BaseColor.Green};
  `,
  Danger: css`
    background-color: ${BaseColor.Red};
  `,
  Warning: css`
    background-color: ${BaseColor.Orange};
  `,
  Focus: css`
    background-color: ${BaseColor.Blue020};
    @media (prefers-color-scheme: dark) {
      background-color: ${BaseColor.Blue030};
    }
  `,
}

export type Fill = keyof typeof Fill
