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

## Semantic Styling

You can use predefined semantic styles from the library as follows. Check out the foundation tab in the storybook to check the list of our semantic styles.

```tsx
import { Border, Color, Elevation, Fill, Font } from '@wookiejin/react-component'

const Component = styled.button`
  ${Border.Primary}
  ${Color.Secondary}
  ${Elevation.L2}
  ${Fill.Focus}
  ${Font.Title}
  border-radius: 4px;
`
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

```tsx
import { Fill, FillButton } from '@wookiejin/react-component'

function App() {
  const onClick = () => {
    console.log('Clicked!')
  }

  return (
    <div>
      <HeaderText marginBottom={4}>Header<HeaderText>
      <FillButton fill="Secondary" onClick={onClick}>
        Click Me
      </FillButton>
    </div>
  )
}
```
