import { css } from '@emotion/react'
import { Color } from './Pallete'

export const FillColor = {
  Base: css`
    background-color: ${Color.Gray00};
    @media (prefers-color-scheme: dark) {
      background-color: ${Color.Gray90};
    }
  `,
  Action: css`
    background-color: ${Color.Blue20};
    @media (prefers-color-scheme: dark) {
      background-color: ${Color.Blue10};
    }
  `,
  Elevated: css`
    background-color: ${Color.Gray10};
    @media (prefers-color-scheme: dark) {
      background-color: ${Color.Gray85};
    }
  `,
  Transparent: css`
    background-color: transparent;
  `,
}
