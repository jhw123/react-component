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
  Contrast: css`
    background-color: ${BaseColor.Gray100};
    @media (prefers-color-scheme: dark) {
      background-color: ${BaseColor.Gray000};
    }
  `,
  Brand: css`
    background-color: ${BaseColor.Purple};
  `,
}

export type Fill = keyof typeof Fill
