import React, { FC, ForwardedRef, PropsWithoutRef } from 'react'

export interface ViewOption {
  margin?: number
  marginLeft?: number
  marginRight?: number
  marginTop?: number
  marginBottom?: number
  marginHorizontal?: number
  marginVertical?: number
}

export function View<T>(
  Component: FC<
    T & {
      style: Pick<ViewOption, 'marginLeft' | 'marginRight' | 'marginTop' | 'marginBottom'>
      className?: string
      forwardedRef: ForwardedRef<any>
    }
  >
) {
  return React.forwardRef((propsWithUIOptions: T & ViewOption, ref) => {
    const { margin, marginTop, marginBottom, marginLeft, marginRight, marginHorizontal, marginVertical, ...props } =
      propsWithUIOptions

    const style = {
      marginLeft: marginLeft ?? marginHorizontal ?? margin,
      marginRight: marginRight ?? marginHorizontal ?? margin,
      marginTop: marginTop ?? marginVertical ?? margin,
      marginBottom: marginBottom ?? marginVertical ?? margin,
    }

    return <Component style={style} forwardedRef={ref} {...(props as T)} />
  })
}
