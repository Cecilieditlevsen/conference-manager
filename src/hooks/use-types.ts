import { useSuspenseQuery } from '@tanstack/react-query'

import { getTypes } from '@modules/categories/operations/get-types.ts'

import { createQueryFn } from '../utils/create-query-fn.ts'

const queryEvent = createQueryFn(getTypes)

export function useTypes() {
  return useSuspenseQuery({
    queryKey: ['types'],
    queryFn: () => queryEvent(),

    staleTime: 5 * 60 * 1000,
  })
}
