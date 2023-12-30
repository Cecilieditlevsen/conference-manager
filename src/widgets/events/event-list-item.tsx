import { useThemeContext } from '@app/contexts/theme/theme-context.ts'
import dayjs from 'dayjs'
import { tw } from 'twind'

import 'dayjs/locale/da'

import { EventDate } from '../molecules/event-date.tsx'
import { EventInfoItem } from '../molecules/event-info-item.tsx'

type EventListItemProps = {
  title: string
  startDate: string
  endDate: string
  deadline: string
  isFullyBooked?: boolean
  isCancelled?: boolean
  fewAvailableSpots?: boolean
  type?: string | null
}


export const EventListItem = ({
  title,
  startDate,
  deadline,
  endDate,
  isFullyBooked = false,
  isCancelled = false,
  fewAvailableSpots = false,
  type,
}: EventListItemProps) => {
  const theme = useThemeContext()

  const daysDuration = dayjs(endDate).diff(dayjs(startDate), 'day')

  return (
    <div className={tw`w-full flex py-[30px]`}>
      <EventDate startDate={startDate} daysDuration={daysDuration} />

      <div className={tw`ml-[20px] md:ml-[30px]`}>
        {type ? (
          <div className={tw`flex mb-[10px] space-x-[10px]`}>
            <span
              className={tw`${
                theme === 'dark-theme' ? 'text-dark-highlight-2' : 'text-tag'
              } font-primary text-sm  font-semibold`}
            >
              {type}
            </span>
          </div>
        ) : null}

        <h3
          className={tw`text-heading-3-lg md:text-heading-3-lg font-heading-weight font-primary`}
        >
          {title}
        </h3>

        <ul className={tw`list-none space-y-[12px] mt-[15px] m-0 p-0`}>
          <li>
            <EventInfoItem
              title={`Tilmeldingsfrist: ${dayjs(deadline)
                .utc()
                .format('DD. MMM YYYY')}`}
              icon={'calendarDue'}
            />
          </li>

          <li>
            <EventInfoItem
              title={`${dayjs(startDate).utc().format('HH:mm')}-${dayjs(endDate)
                .utc()
                .format('HH:mm')}`}
              icon={'time'}
            />
          </li>

          {daysDuration > 0 && (
            <li>
              <EventInfoItem
                title={`${dayjs(startDate)
                  .utc()
                  .format('DD. MMM YYYY')} - ${dayjs(endDate)
                  .utc()
                  .format('DD. MMM YYYY')}`}
                icon={'calendar'}
              />
            </li>
          )}

          {fewAvailableSpots && !isCancelled && !isFullyBooked ? (
            <li>
              <EventInfoItem
                title={'Få ledige pladser'}
                icon={'alert'}
                variant={'danger'}
              />
            </li>
          ) : null}

          {isFullyBooked ? (
            <li>
              <EventInfoItem
                title={'Udsolgt'}
                icon={'alert'}
                variant={'danger'}
              />
            </li>
          ) : null}
        </ul>
      </div>
    </div>
  )
}
