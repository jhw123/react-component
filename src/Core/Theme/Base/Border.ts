import { css } from '@emotion/react'
import { Color } from './Pallete'

export const BorderColor = {
  Basic: css`
    border-width: 1px;
    border-style: solid;
    border-color: ${Color.Gray60};
    @media (prefers-color-scheme: dark) {
      border-color: ${Color.Gray20};
    }
  `,
}
