import React from 'react'
import { EventCategory } from '@shared/ui/event-card/event-card-category.tsx'
import { EventDate } from '@shared/ui/event-card/event-card-date.tsx'
import { EventCardDetail } from '@shared/ui/event-card/event-card-detail.tsx'
import { tw } from 'twind'

type EventCardProps = {
  startDate: string
  endDate?: string
  category?: string
  title: string
  details?: React.ReactNode
  isDarkTheme: boolean
}

export function EventCard(props: EventCardProps) {
  return (
    <div
      className={tw`w-full flex py-[30px] gap-4 border-t border-t-solid border-gray-500`}
    >
      <EventDate startDate={props.startDate} isDarkTheme={props.isDarkTheme} />

      <div className={tw`ml-4`}>
        {props.category ? (
          <EventCategory isDarkTheme={props.isDarkTheme}>
            {props.category}
          </EventCategory>
        ) : null}

        <h3
          className={tw`text-heading-3-lg md:text-heading-3-lg font-heading-weight font-primary`}
        >
          {props.title}
        </h3>

        <div className={tw`mt-3`}>{props.details}</div>
      </div>
    </div>
  )
}

EventCard.Detail = EventCardDetail
