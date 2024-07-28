import { css } from '@emotion/react'
import styled from '@emotion/styled'
import React, { useCallback } from 'react'
import { View } from '../foundation'
import { Fill } from '../themes/default/fill'

interface Props {
  tabTitles: string[]
  tabIcons?: string[]
  children: React.ReactNode
  fill?: Fill
  onTabChange?: (index: number) => void
}

export const TabLayout = View<Props>(
  ({ children, forwardedRef, tabIcons, tabTitles, fill = 'Brand', onTabChange, ...props }) => {
    const [selected, setSelected] = React.useState(0)

    const handleTabChange = useCallback(
      (index: number) => () => {
        setSelected(index)
        onTabChange?.(index)
      },
      [onTabChange]
    )

    return (
      <Container {...props}>
        <TabContainer>
          {tabTitles.map((title, i) => (
            <Tab key={i} onClick={handleTabChange(i)} fill={fill} active={selected === i}>
              {tabIcons && <img src={tabIcons[i]} width={24} height={24} alt={title} />}
              {title}
            </Tab>
          ))}
        </TabContainer>
        {React.Children.map(children, (child, i) => selected === i && child)}
      </Container>
    )
  }
)

const Container = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: auto 1fr;
`

const TabContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: 8px;
    position: relative;
    padding: 8px 8px 0 8px;
    ${theme.border.Secondary}
    border-left: none;
    border-right: none;
    border-top: none;
  `}
`

const Tab = styled.button<{ active: boolean; fill: Fill }>`
  ${({ theme, active, fill }) => css`
    padding: 8px;
    border-bottom: none;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    cursor: pointer;
    ${!active &&
    css`
      filter: opacity(0.4);
    `}

    ${active &&
    css`
      &::after {
        content: '';
        position: absolute;
        bottom: -2px;
        left: 0;
        height: 4px;
        width: 100%;
        ${theme.fill[fill]};
      }
    `}
  `}
`
