import { css } from '@emotion/react'

export const Elevation = {
  L0: css``,
  L1: css`
    z-index: 10;
    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2);
  `,
  L2: css`
    z-index: 20;
    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.3);
  `,
  L3: css`
    z-index: 30;
    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.4);
  `,
  L4: css`
    z-index: 40;
    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.5);
  `,
} as const

export type Elevation = keyof typeof Elevation
