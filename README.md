# React-Component

This library aims to provide useful semantic colorsets, HOCs and components for easy layout building.

## Requirement

### React & Emotion

This library requires react and emotion as peer dependencies. Install these packages before using this library.

```json
"react": "^16.9.0",
"@emotion/react": "^11.7.1",
"@emotion/styled": "^11.6.0"
```

```sh
npm install --save react @emotion/react @emotion/styled
```

## Core

### ResetStyle

### Color

```typescript
const { TextColor, FillColor, BorderColor } = BaseTheme

const Button = styled.button`
  ${TextColor.Primary};
  ${FillColor.Base};
  ${BorderColor.Basic};
`
```

### View
