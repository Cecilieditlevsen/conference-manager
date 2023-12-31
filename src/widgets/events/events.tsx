import { Fragment } from 'react'
import { Button } from 'react-aria-components'
import { useCMParamsContext } from '@app/contexts/cm-params/cm-params.context.tsx'
import { useThemeContext } from '@app/contexts/theme/theme-context.ts'
import { Spinner } from '@chakra-ui/spinner'
import { useInfiniteEvents } from '@entities/events/hooks/use-infinite-events.ts'
import { IconAlert } from '@shared/icons/icon-alert.tsx'
import { IconCalendar } from '@shared/icons/icon-calendar.tsx'
import { IconCalendarDue } from '@shared/icons/icon-calendar-due.tsx'
import { IconTime } from '@shared/icons/icon-time.tsx'
import { EventCard } from '@shared/ui/event-card/event-card.tsx'
import { clsx } from 'clsx'
import dayjs from 'dayjs'
import { tw } from 'twind'

export const Events = () => {
  const { date, type, area, searchQuery } = useCMParamsContext()
  const theme = useThemeContext()
  const isDarkTheme = theme === 'dark-theme'

  const {
    isSuccess,
    isError,
    data,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useInfiniteEvents({
    startDate: date,
    type,
    area,
    name: searchQuery,
    page: 1,
    pageSize: 10,
  })

  return (
    <div className={tw`w-full`}>
      {isError && <p className={tw`text-red-500`}>Der skete en fejl</p>}

      {isSuccess && (
        <div className={tw`w-full`}>
          <div className={tw`mb-section-medium md:mb-section-medium-md`}>
            {data.pages.length === 0 && (
              <p
                className={tw(
                  clsx('text-center', {
                    'text-white': theme === 'dark-theme',
                    'text-black': theme !== 'dark-theme',
                  }),
                )}
              >
                Der er ingen arrangementer der matcher din søgning
              </p>
            )}

            {data.pages.map((group, i) => (
              <Fragment key={i}>
                {group.events.length === 0 ? (
                  <p
                    className={tw(
                      clsx('text-center', {
                        'text-white': theme === 'dark-theme',
                        'text-black': theme !== 'dark-theme',
                      }),
                    )}
                  >
                    Der er ingen arrangementer der matcher din søgning
                  </p>
                ) : (
                  <ul className={tw`list-none p-0 m-0 `}>
                    {group.events.map((event) => (
                      <li
                        key={event.eventID.toString()}
                        className={tw(
                          clsx({
                            'border-dark-800': theme === 'dark-theme',
                            'border-grey-medium': theme !== 'dark-theme',
                          }),
                        )}
                      >
                        <a
                          href={event.eventWebsiteURL}
                          className={tw(
                            clsx('no-underline', {
                              'text-white': theme === 'dark-theme',
                              'text-black': theme !== 'dark-theme',
                            }),
                          )}
                        >
                          <EventCard
                            startDate={event.eventStartTS}
                            title={event.eventName}
                            category={
                              event.companyCustomFields.type?.value ?? undefined
                            }
                            details={
                              <div className={tw`flex flex-col gap-3`}>
                                <EventCard.Detail
                                  variant={'default'}
                                  isDarkTheme={isDarkTheme}
                                  icon={<IconCalendarDue />}
                                >
                                  Tildmedlingsfrist:{' '}
                                  {dayjs(event.registrationDeadlineTS)
                                    .utc()
                                    .format('DD. MMM YYYY')}
                                </EventCard.Detail>

                                <EventCard.Detail
                                  variant={'default'}
                                  isDarkTheme={isDarkTheme}
                                  icon={<IconTime />}
                                >
                                  {dayjs(event.eventStartTS)
                                    .utc()
                                    .format('HH:mm')}
                                  -
                                  {dayjs(event.eventEndTS)
                                    .utc()
                                    .format('HH:mm')}
                                </EventCard.Detail>

                                {dayjs(event.eventStartTS).date() !==
                                  dayjs(event.eventEndTS).date() && (
                                  <EventCard.Detail
                                    variant={'default'}
                                    isDarkTheme={isDarkTheme}
                                    icon={<IconCalendar />}
                                  >
                                    {dayjs(event.eventStartTS)
                                      .utc()
                                      .format('DD. MMM YYYY')}{' '}
                                    -{' '}
                                    {dayjs(event.eventEndTS)
                                      .utc()
                                      .format('DD. MMM YYYY')}
                                  </EventCard.Detail>
                                )}

                                {event.capacityUsed === event.capacityTotal && (
                                  <EventCard.Detail
                                    variant={'danger'}
                                    isDarkTheme={isDarkTheme}
                                    icon={<IconAlert />}
                                  >
                                    Arrangementet er fuldt booket
                                  </EventCard.Detail>
                                )}

                                {event.capacityTotal - event.capacityUsed < 5 &&
                                  event.capacityTotal - event.capacityUsed >
                                    0 && (
                                    <EventCard.Detail
                                      variant={'danger'}
                                      isDarkTheme={isDarkTheme}
                                      icon={<IconAlert />}
                                    >
                                      Få ledige pladser
                                    </EventCard.Detail>
                                  )}
                              </div>
                            }
                          />
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </Fragment>
            ))}
          </div>

          <div className={tw`flex mb-section-large md:mb-section-large-md`}>
            {hasNextPage ? (
              <Button
                onPress={() => fetchNextPage()}
                className={tw`px-4 py-3  min-w-[150px] text-button mx-auto flex ${
                  theme === 'dark-theme'
                    ? 'bg-dark-highlight-1 text-black'
                    : 'bg-button text-button-text'
                }`}
              >
                {isFetchingNextPage ? (
                  <Spinner className={tw`w-6 h-6 mx-auto`} />
                ) : hasNextPage ? (
                  'Indlæs flere arrangementer'
                ) : (
                  'Ingen flere'
                )}
              </Button>
            ) : null}
          </div>
        </div>
      )}
    </div>
  )
}
