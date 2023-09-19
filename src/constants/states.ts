export const ComponentState = {
  Default: 'Default',
  Disabled: 'Disabled',
  Checked: 'Checked',
} as const

export type ComponentState = keyof typeof ComponentState
