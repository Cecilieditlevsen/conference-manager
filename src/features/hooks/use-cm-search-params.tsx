import { useCallback, useEffect, useState } from 'react'


export function useCMSearchParams() {
  const [type, setType] = useState<string | null>(null)
  const [area, setArea] = useState<string | null>(null)
  const [date, setDate] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState<string | null>(null)

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search)

    // Set the initial values for type, area, and search query from the URL parameters
    setType(searchParams.get('type'))
    setArea(searchParams.get('area'))
    setSearchQuery(searchParams.get('search'))

    // Get the value of startDate parameter or set it to the current date
    const startDateParam = searchParams.get('startDate')
    const initialDate = startDateParam ?? new Date().toISOString().split('T')[0]

    setDate(initialDate)

    // Event listener callback for handling state changes when the URL parameters change
    const onChange = () => {
      setType(searchParams.get('type'))
      setArea(searchParams.get('area'))
      setSearchQuery(searchParams.get('search'))

      const startDateParam = searchParams.get('startDate')
      const updatedDate =
        startDateParam ?? new Date().toISOString().split('T')[0]

      setDate(updatedDate)
    }

    // Add event listeners to handle state changes when the URL parameters change
    window.addEventListener('popstate', onChange)
    window.addEventListener('pushstate', onChange)
    window.addEventListener('replacestate', onChange)

    // Clean up by removing the event listeners when the component unmounts
    return () => {
      window.removeEventListener('popstate', onChange)
      window.removeEventListener('pushstate', onChange)
      window.removeEventListener('replacestate', onChange)
    }
  }, [])

  // Function to clear the search query and update the URL
  const clearQuery = useCallback(() => {
    const searchParams = new URLSearchParams(window.location.search)

    searchParams.delete('type')
    searchParams.delete('area')
    searchParams.delete('startDate')
    searchParams.delete('name')

    // Replace the URL with the updated search parameters
    window.history.replaceState({}, '', `?${searchParams.toString()}`)

    // Reset the state variables to null
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
