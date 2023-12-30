import { ThemeContextProvider } from '@app/contexts/theme/theme-context.provider.tsx'
import { IconCalendar } from '@shared/icons/icon-calendar.tsx'
import { IconCalendarDue } from '@shared/icons/icon-calendar-due.tsx'
import { IconChevronDown } from '@shared/icons/icon-chevron-down.tsx'
import { IconTime } from '@shared/icons/icon-time.tsx'
import type { Meta, StoryObj } from '@storybook/react'
import { tw } from 'twind'

import { EventCard } from './event-card.tsx'

const meta = {
  title: 'Event Card',
  component: EventCard,
  args: {
    date: new Date().toISOString(),
    eventDays: 5,
    title: 'Default event title',
    category: 'Default category',
  },
  render: (args) => (
    <ThemeContextProvider>
      <EventCard
        {...args}
        details={
          <div className={tw`flex flex-col gap-4`}>
            <EventCard.Detail icon={<IconCalendarDue />}>
              Tilmeldingsfrist: 01. Jan 2037
            </EventCard.Detail>

            <EventCard.Detail icon={<IconTime />}>00:00-17:00</EventCard.Detail>

            <EventCard.Detail icon={<IconCalendar />}>
              01. Jan 2024 - 30. Maj 2024: 01. Jan 2037
            </EventCard.Detail>
          </div>
        }
      />
      ,
    </ThemeContextProvider>
  ),
} satisfies Meta<typeof EventCard>

export default meta

type Story = StoryObj<typeof meta>

export const Default = {
  args: {},
} satisfies Story
