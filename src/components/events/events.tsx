import { Fragment } from 'react'
import { Spinner } from '@chakra-ui/spinner'
import { tw } from 'twind'

import { EventListItem } from '@components/events/event-list-item.tsx'

import { useEvents } from '@hooks/use-events.ts'
import { useThemeContext } from '@contexts/theme-context'

type Props = {
  date: string | null
  setDate: (date: string | null) => void
  type: string | null
  setType: (type: string | null) => void
  area: string | null
  setArea: (area: string | null) => void
  searchQuery: string | null
  clear: () => void
}

export const Events = (props: Props) => {
  const { date, type, area, searchQuery } = props
  const theme = useThemeContext()

  const {
    isSuccess,
    isError,
    data,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useEvents({
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
        <div className={tw`w-full `}>
          <div className={tw`mb-section-medium md:mb-section-medium-md`}>
            {data.pages.length === 0 && (
              <p
                className={tw`text-center ${
                  theme === 'dark-theme' ? 'text-white' : 'text-black'
                }`}
              >
                Der er ingen arrangementer der matcher din søgning
              </p>
            )}
            {data.pages.map((group, i) => (
              <Fragment key={i}>
                {group.events.length === 0 ? (
                  <p
                    className={tw`text-center ${
                      theme === 'dark-theme' ? 'text-white' : 'text-black'
                    }`}
                  >
                    Der er ingen arrangementer der matcher din søgning
                  </p>
                ) : (
                  <ul className={tw`list-none p-0 m-0 `}>
                    {group.events.map((event) => (
                      <li
                        key={event.eventID.toString()}
                        className={tw`border-t border-t-solid ${
                          theme === 'dark-theme'
                            ? 'border-dark-800'
                            : 'border-grey-medium'
                        }`}
                      >
                        <a
                          href={event.eventWebsiteURL}
                          className={tw`no-underline ${
                            theme === 'dark-theme' ? 'text-white' : 'text-black'
                          }`}
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
              <button
                onClick={() => fetchNextPage()}
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
              </button>
            ) : null}
          </div>
        </div>
      )}
    </div>
  )
}
