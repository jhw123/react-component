import { css } from '@emotion/react'
import { BaseColor } from './base'

export const Fill = {
  Base: css`
    background-color: ${BaseColor.Gray005};
  `,
  Action: css`
    background-color: ${BaseColor.Green};
  `,
  Success: css`
    background-color: ${BaseColor.Green};
  `,
  Sheet: css`
    background-color: ${BaseColor.Gray000};
  `,
  Info: css`
    background-color: ${BaseColor.Gray010};
  `,
  Help: css`
    background-color: ${BaseColor.LightBlue};
  `,
  Danger: css`
    background-color: ${BaseColor.Red};
  `,
  Disabled: css`
    background-color: ${BaseColor.Gray030};
  `,
  Focus: css`
    background-color: ${BaseColor.RoyalBlue};
  `,
  Transparent: css`
    background-color: transparent;
  `,
  Primary: css`
    background-color: ${BaseColor.Gray080};
  `,
  Secondary: css`
    background-color: ${BaseColor.Gray030};
  `,
}

export type Fill = keyof typeof Fill
