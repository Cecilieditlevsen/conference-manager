import { eventService } from '@entities/events/event.service.ts'
import type { EventOptions } from '@entities/events/repositories/operations/get-events.ts'
import { createQueryFn } from '@shared/lib/create-query-fn.ts'
import { useSuspenseInfiniteQuery } from '@tanstack/react-query'
import ms from 'ms'

export const queryEvent = createQueryFn(eventService.getEvents)

export function useInfiniteEvents(opts: EventOptions) {
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
