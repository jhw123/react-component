import { css } from '@emotion/react'

export const Font = {
  Title: css`
    font-size: 1.5rem;
    font-weight: bold;
    line-height: 1.5;
  `,
  SubTitle: css`
    font-size: 1.25rem;
    font-weight: bold;
    line-height: 1.4;
  `,
  Body: css`
    font-size: 1rem;
    line-height: 1.4;
  `,
  Caption: css`
    font-size: 0.8rem;
    line-height: 1.2;
  `,
}

export type Font = keyof typeof Font
