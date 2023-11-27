import { useCallback, useEffect, useState } from 'react'

export function useCMSearchParams() {
  const [type, setType] = useState<string | null>(null)
  const [area, setArea] = useState<string | null>(null)
  const [date, setDate] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState<string | null>(null)

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search)

    setType(searchParams.get('type'))
    setArea(searchParams.get('area'))
    setSearchQuery(searchParams.get('search'))

    const startDateParam = searchParams.get('startDate')
    const initialDate = startDateParam ?? new Date().toISOString().split('T')[0]

    setDate(initialDate)

    const onChange = () => {
      setType(searchParams.get('type'))
      setArea(searchParams.get('area'))
      setSearchQuery(searchParams.get('search'))

      const startDateParam = searchParams.get('startDate')
      const updatedDate =
        startDateParam ?? new Date().toISOString().split('T')[0]
      setDate(updatedDate)
    }

    window.addEventListener('popstate', onChange)
    window.addEventListener('pushstate', onChange)
    window.addEventListener('replacestate', onChange)

    return () => {
      window.removeEventListener('popstate', onChange)
      window.removeEventListener('pushstate', onChange)
      window.removeEventListener('replacestate', onChange)
    }
  }, [])

  const clearQuery = useCallback(() => {
    const searchParams = new URLSearchParams(window.location.search)

    searchParams.delete('type')
    searchParams.delete('area')
    searchParams.delete('startDate')
    searchParams.delete('name')

    window.history.replaceState({}, '', `?${searchParams.toString()}`)

    setType(null)
    setArea(null)
    setDate(null)
    setSearchQuery(null)
  }, [])

  const setTypeValue = useCallback((value: string | null) => {
    setType(value)
    const searchParams = new URLSearchParams(window.location.search)

    if (value) {
      searchParams.set('type', value)
    } else {
      searchParams.delete('type')
    }

    window.history.replaceState({}, '', `?${searchParams.toString()}`)
  }, [])

  const setAreaValue = useCallback((value: string | null) => {
    setArea(value)
    const searchParams = new URLSearchParams(window.location.search)

    if (value) {
      searchParams.set('area', value)
    } else {
      searchParams.delete('area')
    }

    window.history.replaceState({}, '', `?${searchParams.toString()}`)
  }, [])

  const setDateValue = useCallback((value: string | null) => {
    setDate(value)

    const searchParams = new URLSearchParams(window.location.search)

    if (value) {
      searchParams.set('startDate', value)
    } else {
      searchParams.delete('startDate')
    }

    window.history.replaceState({}, '', `?${searchParams.toString()}`)
  }, [])

  const setSearchValue = useCallback((value: string | null) => {
    setSearchQuery(value)
    const searchParams = new URLSearchParams(window.location.search)

    if (value) {
      searchParams.set('name', value)
    } else {
      searchParams.delete('name')
    }

    window.history.replaceState({}, '', `?${searchParams.toString()}`)
  }, [])

  return {
    clear: clearQuery,
    setArea: setAreaValue,
    setType: setTypeValue,
    setDate: setDateValue,
    setSearch: setSearchValue,
    area,
    searchQuery,
    type,
    date: date ?? new Date().toISOString().split('T')[0],
  }
}
