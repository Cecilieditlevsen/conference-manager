import React from 'react'
import { clsx } from 'clsx'
import { tw } from 'twind'

type CategoryProps = {
  children?: React.ReactNode
  isDarkTheme?: boolean
}
export function Category(props: CategoryProps) {
  return (
    <div className={tw`flex mb-[10px] space-x-[10px]`}>
      <span
        className={tw(
          clsx('font-primary text-sm font-semibold', {
            'text-dark-highlight-2': props.isDarkTheme,
            'text-tag': !props.isDarkTheme,
          }),
        )}
      >
        {props.children}
      </span>
    </div>
  )
}
