import React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva } from 'class-variance-authority'
import { tw } from 'twind'

type EventCardDetailProps = {
  icon?: React.ReactNode
  children?: React.ReactNode
  variant: 'warning' | 'danger' | 'success' | 'default'
  isDarkTheme: boolean
}

export const EventCardDetail = (props: EventCardDetailProps) => {
  const styles = cva('flex items-center text-sm gap-2', {
    variants: {
      variant: {
        warning: [],
        danger: [],
        success: [],
        default: [],
      },
      isDarkTheme: {
        true: [],
        false: [],
      },
    },
    compoundVariants: [
      {
        variant: 'danger',
        isDarkTheme: true,
        className: 'text-[#FF9592]',
      },
      {
        variant: 'danger',
        isDarkTheme: false,
        className: 'text-red-500',
      },
      {
        variant: 'default',
        isDarkTheme: true,
        className: 'text-white',
      },
      {
        variant: 'default',
        isDarkTheme: false,
        className: 'text-icon',
      },
    ],
  })

  return (
    <div
      data-testid={'event-card-detail'}
      className={tw(
        styles({ variant: props.variant, isDarkTheme: props.isDarkTheme }),
      )}
    >
      {props.icon ? <Slot className={tw`w-6 h-6`}>{props.icon}</Slot> : null}

      {props.children}
    </div>
  )
}
