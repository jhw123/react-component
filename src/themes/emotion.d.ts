import '@emotion/react'
import { DEFAULT_THEME } from './default'

declare module '@emotion/react' {
  export interface Theme {
    color: typeof DEFAULT_Color
    font: typeof DEFAULT_Font
    border: typeof DEFAULT_Border
    elevation: typeof DEFAULT_Elevation
    fill: typeof DEFAULT_Fill
  }
}
