import { css } from '@emotion/react'
import { BaseColor } from './base'

export const Fill = {
  Primary: css`
    background-color: ${BaseColor.Gray000};
  `,
  Secondary: css`
    background-color: ${BaseColor.Gray020};
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
    background-color: ${BaseColor.Gray090};
  `,
  Brand: css`
    background-color: ${BaseColor.Blue};
  `,
}

export type Fill = keyof typeof Fill
