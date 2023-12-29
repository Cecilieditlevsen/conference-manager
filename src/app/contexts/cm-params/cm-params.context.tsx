import { createStrictContext } from '@shared/lib/create-strict-context.ts'

type CMParamsContext = {
  date: string | null
  setDate: (date: string | null) => void
  type: string | null
  setType: (type: string | null) => void
  area: string | null
  setArea: (area: string | null) => void
  searchQuery: string | null
  clear: () => void
  setSearch: (search: string | null) => void
}

export const [CMParamsContext, useCMParamsContext] =
  createStrictContext<CMParamsContext>({
    name: 'CMParamsContext',
    errorMessage: 'useCMParamsContext is used outside of its context',
    allowMissingProvider: false,
  })
