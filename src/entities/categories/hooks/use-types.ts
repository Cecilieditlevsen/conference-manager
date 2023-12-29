import { getTypes } from '@entities/categories/operations/get-types.ts'
import { createQueryFn } from '@shared/lib/create-query-fn.ts'
import { useSuspenseQuery } from '@tanstack/react-query'


const queryEvent = createQueryFn(getTypes)

export function useTypes() {
  return useSuspenseQuery({
    queryKey: ['types'],
    queryFn: () => queryEvent(),

    staleTime: 5 * 60 * 1000,
  })
}
