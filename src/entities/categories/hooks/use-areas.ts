import { getAreas } from '@entities/categories/operations/get-areas.ts'
import { createQueryFn } from '@shared/lib/create-query-fn.ts'
import { useSuspenseQuery } from '@tanstack/react-query'


const queryEvent = createQueryFn(getAreas)

export function useAreas() {
  return useSuspenseQuery({
    queryKey: ['areas'],
    queryFn: () => queryEvent(),

    staleTime: 5 * 60 * 1000,
  })
}
