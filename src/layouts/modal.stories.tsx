import { Global, ThemeProvider } from '@emotion/react'
import styled from '@emotion/styled'
import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { DEFAULT_THEME, ModalLayout, ResetStyle } from '..'
import { Elevation } from '../themes/default/elevation'

const meta = {
  title: 'Layout/Modal',
  component: ModalLayout,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  decorators: [
    Story => (
      <>
        <Global styles={ResetStyle} />
        <ThemeProvider theme={DEFAULT_THEME}>
          <Window>
            <Story />
          </Window>
        </ThemeProvider>
      </>
    ),
  ],
} satisfies Meta<typeof ModalLayout>

const Window = styled.div`
  width: 500px;
  height: 300px;
  ${Elevation.L1}
`

export default meta
type Story = StoryObj<typeof meta>

export const Example: Story = {
  args: {
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget fermentum nibh. Ut lobortis accumsan viverra. Quisque sed tellus pharetra, laoreet ante et, egestas arcu. Vestibulum quis enim in quam convallis accumsan sit amet ut augue. Suspendisse consectetur mi eget laoreet ornare. Aliquam erat volutpat. Etiam ac diam pellentesque, ultricies nibh eget, rutrum tellus. Vestibulum diam leo, egestas nec consectetur eu, viverra eu elit. Donec et tincidunt lectus, id interdum erat. Praesent ut enim ultricies, convallis massa in, malesuada nulla.',
    open: true,
  },
}
