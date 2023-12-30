import React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { tw } from 'twind'

type EventCardDetailProps = {
  icon?: React.ReactNode
  children?: React.ReactNode
}

export const EventCardDetail = (props: EventCardDetailProps) => {
  return (
    <div
      data-testid={'event-card-detail'}
      className={tw`text-sm flex items-center gap-2`}
    >
      {props.icon ? (
        <div className={tw`flex items-center gap-2`}>
          <Slot className={tw`w-6 h-6`}>{props.icon}</Slot>
        </div>
      ) : null}
      {props.children}
    </div>
  )
}
