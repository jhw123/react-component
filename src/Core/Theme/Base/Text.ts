import { css } from '@emotion/react'
import { Color } from './Pallete'

export const TextColor = {
  Primary: css`
    color: ${Color.Gray85};
    @media (prefers-color-scheme: dark) {
      color: ${Color.Gray10};
    }
  `,
  Secondary: css`
    color: ${Color.Gray40};
    @media (prefers-color-scheme: dark) {
      color: ${Color.Gray30};
    }
  `,
  Action: css`
    color: ${Color.Blue10};
    @media (prefers-color-scheme: dark) {
      color: ${Color.Blue00};
    }
  `,
  Complete: css`
    color: ${Color.Green10};
    @media (prefers-color-scheme: dark) {
      color: ${Color.Green20};
    }
  `,
  Warning: css`
    color: ${Color.Orange00};
    @media (prefers-color-scheme: dark) {
      color: ${Color.Orange20};
    }
  `,
  Error: css`
    color: ${Color.Red00};
    @media (prefers-color-scheme: dark) {
      color: ${Color.Red20};
    }
  `,
}
