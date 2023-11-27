import { useSuspenseQuery } from '@tanstack/react-query'

import { getAreas } from '@modules/categories/operations/get-areas.ts'

import { createQueryFn } from '../utils/create-query-fn.ts'

const queryEvent = createQueryFn(getAreas)

export function useAreas() {
  return useSuspenseQuery({
    queryKey: ['areas'],
    queryFn: () => queryEvent(),

    staleTime: 5 * 60 * 1000,
  })
}
