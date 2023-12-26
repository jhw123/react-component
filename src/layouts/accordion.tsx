import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { TextButton } from '@src/components/buttons/text'
import { Divider } from '@src/components/utils/divider'
import { View } from '@src/foundation/view'
import React, { useCallback, useState } from 'react'
import { Collapsible } from './collapsible'
import { Font } from '@src/foundation/font'
import { Border } from '@src/foundation/border'

interface Props {
  children: React.ReactNode
  titles: string[]
  initialStates?: boolean[]
}

export const Accordion = View<Props>(({ children, titles, initialStates = [], ...props }) => {
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
          <Collapsible state={show[i] ? 'Checked' : 'Default'}>
            <Box>{child}</Box>
          </Collapsible>

          <Divider fill="Secondary" />
        </Row>
      ))}
    </div>
  )
})

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: bold;
  width: 100%;
  ${Font.SubTitle}
`

const Box = styled.div`
  border-top: none;
  padding: 0 8px 8px 8px;
`

const ArrowUp = styled.div`
  ${Border.Primary}
  width: 12px;
  height: 12px;
  transform: rotate(45deg);
  border-bottom: none;
  border-right: none;
`

const ArrowDown = styled.div`
  ${Border.Primary}
  width: 12px;
  height: 12px;
  transform: rotate(225deg);
  border-bottom: none;
  border-right: none;
`

const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`
