import styled from '@emotion/styled'
import React, { useCallback, useState } from 'react'
import { CollapsibleLayout } from './collapsible'
import { Divider, TextButton } from '../components'
import { View } from '../foundation'
import { css } from '@emotion/react'

interface Props {
  children: React.ReactNode
  titles: string[]
  initialStates?: boolean[]
}

export const AccordionLayout = View<Props>(({ children, titles, initialStates = [], ...props }) => {
  const [show, setShow] = useState<boolean[]>(React.Children.map(children, (_, i) => initialStates[i] ?? false) ?? [])

  const toggle = useCallback(
    (i: number) => () => {
      const newShow = [...show]
      newShow[i] = !newShow[i]
      setShow(newShow)
    },
    [show]
  )

  return (
    <div {...props}>
      <Divider fill="Secondary" />

      {React.Children.map(children, (child, i) => (
        <Row key={i}>
          <TextButton key={i} font="Body" color="Primary" onClick={toggle(i)}>
            <Title>
              {titles[i]}
              {show[i] ? <ArrowUp /> : <ArrowDown />}
            </Title>
          </TextButton>
          <CollapsibleLayout checked={!show[i]}>
            <Box>{child}</Box>
          </CollapsibleLayout>

          <Divider fill="Secondary" />
        </Row>
      ))}
    </div>
  )
})

const Title = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: bold;
    width: 100%;
    gap: 16px;
    ${theme.font.SubTitle}
  `}
`

const Box = styled.div`
  border-top: none;
  padding: 0 8px 8px 8px;
`

const ArrowUp = styled.div`
  ${({ theme }) => css`
    ${theme.border.Primary}
    width: 12px;
    height: 12px;
    transform: rotate(45deg);
    border-bottom: none;
    border-right: none;
  `}
`

const ArrowDown = styled.div`
  ${({ theme }) => css`
    ${theme.border.Primary}
    width: 12px;
    height: 12px;
    transform: rotate(225deg);
    border-bottom: none;
    border-right: none;
  `}
`

const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`
