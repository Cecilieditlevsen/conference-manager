import React from 'react'
import { clsx } from 'clsx'
import dayjs from 'dayjs'
import { tw } from 'twind'

type DateProps = {
  startDate: string
  isDarkTheme: boolean
}

export function EventDate({ startDate, isDarkTheme }: DateProps) {
  return (
    <div
      className={tw(
        clsx(
          'flex flex-col items-center h-[fit-content] min-w-[60px] py-[15px]',
          {
            'bg-dark-highlight-2 text-black': isDarkTheme,
            'bg-primary text-primary-text': !isDarkTheme,
          },
        ),
      )}
    >
      <span className={tw`font-secondary text-2xl`}>
        {dayjs(startDate).format('DD')}
      </span>

      <span className={tw`font-secondary text-component-body mt-[2px]`}>
        {dayjs(startDate).format('MMM')}
      </span>
    </div>
  )
}
