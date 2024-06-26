import { Global, ThemeProvider, css } from '@emotion/react'
import styled from '@emotion/styled'
import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import {
  BodyText,
  CaptionText,
  CheckInput,
  DEFAULT_LIGHT_THEME,
  DEFAULT_THEME,
  Divider,
  FileInput,
  FillButton,
  HeaderText,
  RadioInput,
  ResetStyle,
  Sheet,
  SubHeaderText,
  TextButton,
  TextInput,
} from '..'

const Window = styled.div`
  ${({ theme }) => css`
    padding: 16px;
    ${theme.fill.Primary}
    ${theme.color.Secondary}
  `}
`

const Themes = {
  Default: DEFAULT_THEME,
  DefaultLight: DEFAULT_LIGHT_THEME,
}

type PagePropsAndCustomArgs = { theme: keyof typeof Themes }

const meta: Meta<PagePropsAndCustomArgs> = {
  title: 'Theme/Example',
  parameters: {
    layout: 'left',
  },
  argTypes: {},
  render: args => (
    <>
      <Global styles={ResetStyle} />
      <ThemeProvider theme={Themes[args.theme]}>
        <Window>
          <HeaderText color="Brand" marginBottom={8}>
            Sign Up
          </HeaderText>
          <BodyText>Fill out the form below to create an account.</BodyText>

          <SubHeaderText marginBottom={8}>Name</SubHeaderText>
          <CaptionText marginBottom={8}>First Name</CaptionText>
          <TextInput placeholder="John" value="" marginBottom={8} />

          <CaptionText marginBottom={8}>Last Name</CaptionText>
          <TextInput placeholder="Doe" value="" marginBottom={8} />

          <CaptionText marginBottom={8}>Gender</CaptionText>
          <RadioInput fill="Secondary" marginBottom={4} checked={false}>
            Female
          </RadioInput>
          <RadioInput fill="Secondary" marginBottom={4} checked={false}>
            Male
          </RadioInput>
          <RadioInput fill="Secondary" marginBottom={4}>
            Other
          </RadioInput>

          <Divider marginVertical={16} />

          <SubHeaderText marginBottom={8}>Account</SubHeaderText>

          <CaptionText marginBottom={8}>Email</CaptionText>
          <TextInput placeholder="user@example.com" value="" marginBottom={8} />

          <CaptionText marginBottom={8}>Password</CaptionText>
          <TextInput placeholder="Enter your password" value="" marginBottom={8} />

          <CaptionText marginBottom={8}>Confirm Password</CaptionText>
          <TextInput placeholder="Re-enter your password" value="" marginBottom={8} />

          <Divider marginVertical={16} />

          <SubHeaderText marginBottom={8}>Profile Picture</SubHeaderText>
          <BodyText marginBottom={8}>Upload a profile picture.</BodyText>
          <FileInput marginBottom={8}>Choose File</FileInput>

          <SubHeaderText marginBottom={8}>Bio</SubHeaderText>
          <TextInput placeholder="Tell us about yourself." value="" marginBottom={8} />

          <Divider marginVertical={16} />

          <SubHeaderText color="Warning" marginBottom={8}>
            Terms of Service
          </SubHeaderText>
          <BodyText marginBottom={8}>
            By creating an account, you agree to our Terms of Service. This includes our Privacy Policy and Cookie
            Policy. You may receive SMS notifications from us and can opt out at any time.{' '}
            <TextButton>Read more.</TextButton>
          </BodyText>
          <CheckInput checkColor="Warning">Agree to Terms of Service</CheckInput>

          <Divider marginVertical={16} />

          <Sheet padding={16} marginBottom={8}>
            <SubHeaderText color="Success" marginBottom={8}>
              Success!
            </SubHeaderText>
            <BodyText color="Success">
              Your account has been created. Please check your email to verify your account.
            </BodyText>
          </Sheet>

          <Sheet padding={16} marginBottom={8}>
            <SubHeaderText color="Danger" marginBottom={8}>
              Failed
            </SubHeaderText>
            <BodyText color="Danger">
              An error occurred while creating your account. Please try again later or contact support for assistance.
            </BodyText>
          </Sheet>

          <FillButton>Submit</FillButton>
        </Window>
      </ThemeProvider>
    </>
  ),
}

export default meta
type Story = StoryObj<typeof meta>

export const SignUpPage: Story = {
  args: {
    theme: 'Default',
  },
  argTypes: { theme: { control: 'select', options: Object.keys(Themes) } },
}
