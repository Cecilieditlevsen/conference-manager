import { ThemeContextProvider } from '@app/contexts/theme/theme-context.provider.tsx'
import { IconAlert } from '@shared/icons/icon-alert.tsx'
import { IconCalendar } from '@shared/icons/icon-calendar.tsx'
import { IconCalendarDue } from '@shared/icons/icon-calendar-due.tsx'
import { IconTime } from '@shared/icons/icon-time.tsx'
import type { Meta, StoryObj } from '@storybook/react'
import { tw } from 'twind'

import { EventCard } from './event-card.tsx'

const meta = {
  title: 'Event Card',
  component: EventCard,
  args: {
    startDate: new Date().toISOString(),
    endDate: new Date().toISOString(),
    title: 'Kommunalt Nøgletalssamarbejde på ejendomsområdet Tilmelding',
    isDarkTheme: false,
  },
  render: (args) => (
    <ThemeContextProvider>
      <EventCard
        details={
          <div className={tw`flex flex-col gap-3`}>
            <EventCard.Detail
              variant={'default'}
              isDarkTheme={false}
              icon={<IconCalendarDue />}
            >
              Tilmeldingsfrist: 01. Jan 2024
            </EventCard.Detail>

            <EventCard.Detail
              variant={'default'}
              isDarkTheme={false}
              icon={<IconTime />}
            >
              08:00 - 16:00
            </EventCard.Detail>

            <EventCard.Detail
              variant={'default'}
              isDarkTheme={false}
              icon={<IconCalendar />}
            >
              01. Jan 2024 - 30. Maj 2024
            </EventCard.Detail>
          </div>
        }
        {...args}
      />
      ,
    </ThemeContextProvider>
  ),
} satisfies Meta<typeof EventCard>

export default meta

type Story = StoryObj<typeof meta>

export const Default = {
  args: {
    title: 'Kommunalt Nøgletalssamarbejde på ejendomsområdet Tilmelding',
    category: 'Møder og Netværk',
  },
} satisfies Story

export const NoCategory = {
  args: {
    title: 'Kommunalt Nøgletalssamarbejde på ejendomsområdet Tilmelding',
  },
} satisfies Story

export const WithWarning = {
  args: {
    details: (
      <div className={tw`flex flex-col gap-3`}>
        <EventCard.Detail
          variant={'default'}
          isDarkTheme={false}
          icon={<IconCalendarDue />}
        >
          Tilmeldingsfrist: 01. Jan 2024
        </EventCard.Detail>

        <EventCard.Detail
          variant={'default'}
          isDarkTheme={false}
          icon={<IconTime />}
        >
          08:00 - 16:00
        </EventCard.Detail>

        <EventCard.Detail
          variant={'danger'}
          icon={<IconAlert />}
          isDarkTheme={false}
        >
          Eventet er udsolgt
        </EventCard.Detail>
      </div>
    ),
  },
} satisfies Story
