import type { ChangeEvent, FormEvent } from 'react'
import { useRef } from 'react'
import { debounce } from 'radash'
import { tw } from 'twind'

import { container } from '@styles/container.style.ts'
import { IconSearch } from '@utils/icons/icon-search.tsx'
import { useThemeContext } from '@contexts/theme-context'

type SearchBarProps = {
  setSearch: (search: string) => void
}

export const SearchBar = ({ setSearch }: SearchBarProps) => {
  const theme = useThemeContext()
  const inputRef = useRef<HTMLInputElement | null>(null)

  function makeSearchRequest(e: ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value)
  }

  function makeSubmitSearchRequest(
    e: FormEvent<HTMLFormElement | HTMLButtonElement>,
  ) {
    e.preventDefault()
    if (inputRef.current) {
      setSearch(inputRef.current.value)
      inputRef.current?.blur()
    }
  }

  return (
    <div
      className={tw`${
        theme === 'dark-theme' ? 'bg-dark-800' : 'bg-grey-light'
      } mb-section-small md:mb-section-small-md pt-[40px] md:pt-[60px] pb-[15px]`}
    >
      <div className={tw`${container}`}>
        <div className={tw`flex flex-col`}>
          <h1
            className={tw`font-heading-weight font-primary  text-heading-1 md:text-heading-1-lg ${
              theme === 'dark-theme' ? 'text-white' : 'text-black'
            }`}
          >
            Arrangementer
          </h1>

          <form
            className={tw`w-full`}
            onSubmit={(e) => makeSubmitSearchRequest(e)}
          >
            <label className={tw`hidden`} htmlFor="searchInput">
              Søg...
            </label>

            <div className={tw`relative w-full`}>
              <input
                ref={inputRef}
                className={tw`h-[50px] md:h-[70px] w-full px-[20px] my-[10px] md:my-[15px] placeholder::(text-form text-grey-dark) text-form rounded-search-bar border(solid grey-medium 1) focus:(outline-none ring ring-offset-1 ring-primary ring-2) ${
                  theme === 'dark-theme'
                    ? 'bg-dark-600 text-white placeholder::text-white'
                    : 'bg-white text-black'
                }`}
                title="Søg efter arrangementer"
                id={'searchInput'}
                onChange={debounce({ delay: 200 }, makeSearchRequest)}
                type="search"
                aria-label={'søg efter arrangementer'}
                placeholder="Søg..."
              />

              <button
                type={'submit'}
                onSubmit={(e) => makeSubmitSearchRequest(e)}
                className={tw`absolute p-0 right-0 bottom-1/2 translate-y-1/2 -translate-x-[20px]`}
              >
                <IconSearch
                  className={tw`w-[23px] ${
                    theme === 'dark-theme' ? 'text-white' : 'text-icon'
                  }`}
                />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
