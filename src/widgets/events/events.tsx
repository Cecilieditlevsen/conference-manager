import { Fragment } from 'react'
import { Button } from 'react-aria-components'
import { useCMParamsContext } from '@app/contexts/cm-params/cm-params.context.tsx'
import { useThemeContext } from '@app/contexts/theme-context.ts'
import { Spinner } from '@chakra-ui/spinner'
import { useInfiniteEvents } from '@entities/events/hooks/use-infinite-events.ts'
import { EventListItem } from '@widgets/events/event-list-item.tsx'
import { clsx } from 'clsx'
import { tw } from 'twind'

export const Events = () => {
  const { date, type, area, searchQuery } = useCMParamsContext()
  const theme = useThemeContext()

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
      {isError && <p className={tw`text-red-500`}>Der skate en fejl</p>}

      {isSuccess && (
        <div className={tw`w-full `}>
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
                          clsx('border-t border-t-solid', {
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
                          <EventListItem
                            title={event.eventName}
                            startDate={event.eventStartTS}
                            endDate={event.eventEndTS}
                            deadline={event.registrationDeadlineTS}
                            fewAvailableSpots={
                              event.capacityTotal - event.capacityUsed < 5
                            }
                            type={event.companyCustomFields.type?.value}
                            isFullyBooked={
                              event.capacityTotal === event.capacityUsed
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
