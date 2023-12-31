import React from 'react'
import { clsx } from 'clsx'
import { tw } from 'twind'

type CategoryProps = {
  children?: React.ReactNode
  isDarkTheme?: boolean
}
export function EventCategory(props: CategoryProps) {
  return (
    <div className={tw`flex space-x-[10px]`}>
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
