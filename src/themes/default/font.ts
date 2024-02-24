import { css } from '@emotion/react'

export const Font = {
  Title: css`
    font-size: 2rem;
    font-weight: 400;
    line-height: 1.6;
  `,
  SubTitle: css`
    font-size: 1.3rem;
    font-weight: 400;
    line-height: 1.4;
  `,
  SubSubTitle: css`
    font-size: 1.1rem;
    font-weight: 200;
    line-height: 1.4;
  `,
  Body: css`
    font-size: 1rem;
    font-weight: 200;
    line-height: 1.4;
  `,
  Caption: css`
    font-size: 0.8rem;
    font-weight: 200;
    line-height: 1.2;
  `,
}

export type Font = keyof typeof Font
