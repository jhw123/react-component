import { css } from '@emotion/react'

export const Elevation = {
  L1: css`
    z-index: 10;
    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.1);
  `,
  L2: css`
    z-index: 20;
    box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.1);
  `,
  L3: css`
    z-index: 30;
    box-shadow: 0 4px 14px 0 rgba(0, 0, 0, 0.1);
  `,
  L4: css`
    z-index: 40;
    box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.1);
  `,
} as const

export type Elevation = keyof typeof Elevation
