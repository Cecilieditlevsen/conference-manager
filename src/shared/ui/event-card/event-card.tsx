import React from 'react'
import { useThemeContext } from '@app/contexts/theme/theme-context.ts'
import { EventDate } from '@shared/ui/event-card/event-card-date.tsx'
import { EventCardDetail } from '@shared/ui/event-card/event-card-detail.tsx'
import { tw } from 'twind'

type EventCardProps = {
  date: string
  eventDays: number
  category?: string
  title: string
  details?: React.ReactNode
}

export function EventCard(props: EventCardProps) {
  const theme = useThemeContext()

  const isDarkTheme = theme === 'dark-theme'

  return (
    <div className={tw`w-full flex py-[30px] gap-4`}>
      <EventDate
        startDate={props.date}
        eventDays={props.eventDays}
        isDarkTheme={isDarkTheme}
      />

      <div>
        {props.category ? (
          <div className={tw`flex mb-[10px] space-x-[10px]`}>
            <span
              className={tw`${
                isDarkTheme ? 'text-dark-highlight-2' : 'text-tag'
              } font-primary text-sm font-semibold`}
            >
              {props.category}
            </span>
          </div>
        ) : null}

        <h3
          className={tw`text-heading-3-lg md:text-heading-3-lg font-heading-weight font-primary`}
        >
          {props.title}
        </h3>

        {props.details}
      </div>
    </div>
  )
}

EventCard.Detail = EventCardDetail
