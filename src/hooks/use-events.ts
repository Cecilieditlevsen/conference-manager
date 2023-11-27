import { useSuspenseInfiniteQuery } from '@tanstack/react-query'
import ms from 'ms'

import { eventService } from '@modules/events/event.service.ts'
import type { EventOptions } from '@modules/events/repositories/operations/get-events.ts'

import { createQueryFn } from '@utils/create-query-fn.ts'

export const queryEvent = createQueryFn(eventService.getEvents)

export function useEvents(opts: EventOptions) {
  return useSuspenseInfiniteQuery({
    queryKey: ['events', opts],
    queryFn: ({ pageParam }) => queryEvent({ ...opts, ...pageParam }),
    initialPageParam: { page: 1 },
    staleTime: ms('5m'),
    getNextPageParam: (lastPage, allPages) => {
      const pageLength = allPages.length
      const maxPage = Math.ceil(lastPage.totalEvents / opts.pageSize)

      if (pageLength >= maxPage) {
        return
      }

      return {
        page: pageLength + 1,
      }
    },
  })
}
