# React-Component

This library aims to provide useful semantic colorsets, HOCs, and components for easy layout building. Check out [our storybook](https://jhw123.github.io/react-component/)!

## Install

This library requires `React` and `Emotion` as peer dependencies. Install these packages before using this library.

```json
"@emotion/react": "^11.7.1",
"@emotion/styled": "^11.6.0",
"react": "^18.2.0"
```

```sh
yarn add react @emotion/react @emotion/styled
yarn add @wookiejin/react-component
```

## ResetStyle

The library provides a stylesheet for resetting browser-specific styling. Use `<Gloabl/>` from `@emotion` to import the stylesheet to your app.

```tsx
import { Global } from '@emotion/react'
import { ResetStyle } from '@wookiejin/react-component'

function App() {
  return (
    <>
      <Global styles={ResetStyle} />
      ...
    </>
  )
}
```

## View

The library provides a higher-order component `View` for layout building. You can wrap your custom component with `View` to inherit parameters for margins. You should pass the remaining `props` to the outermost component.

```tsx
import { View } from '@wookiejin/react-component'

interface Props {
  children: React.ReactNode
}

const CustomComponent = View<Props>(({ children, ...props }) => {
  return <div {...props}>{children}</div>
})

function App() {
  return (
    <div>
      <CustomComponent marginLeft={4} marginVertical={8}>
    </div>
  )
}
```

## Components & Layouts

The components are styled by [Emotion theme context API](https://emotion.sh/docs/theming). You should wrap the components from this library with `ThemeProvider` from Emotion and inject a theme object predefined in this library.

```tsx
import { ThemeProvider } from '@emotion/react'
import { Fill, FillButton, DEFAULT_THEME } from '@wookiejin/react-component'

function App() {
  const onClick = () => {
    console.log('Clicked!')
  }

  return (
    <ThemeProvider theme={DEFAULT_THEME}>
      <HeaderText marginBottom={4}>Header<HeaderText>
      <FillButton fill="Secondary" onClick={onClick}>
        Click Me
      </FillButton>
    </ThemeProvider>
  )
}
```

## Themes

The library provides a list of predefined themes. You can also define your theme. Refer to the theme files in `/src/themes/` on the GitHub page.

```ts
import { css } from '@emotion/react'

export const CUSTOM_THEME = {
  font: {
    Title: css`
      font-size: 2rem;
    `,
    SubTitle: css`
      font-size: 1.3rem;
    `,
    SubSubTitle: css`
      font-size: 1.1rem;
    `,
    Body: css`
      font-size: 1rem;
    `,
    Caption: css`
      font-size: 0.8rem;
    `,
  },
  ...
}
```

## Typescript

If you use typescript, add the following type definition to access the theme type safely.

```ts
// emotion.d.ts
import '@emotion/react'
import { DEFAULT_THEME } from '@wookiejin/react-component'

declare module '@emotion/react' {
  export interface Theme {
    color: typeof DEFAULT_THEME.color
    font: typeof DEFAULT_THEME.font
    border: typeof DEFAULT_THEME.border
    elevation: typeof DEFAULT_THEME.elevation
    fill: typeof DEFAULT_THEME.fill
  }
}
```
