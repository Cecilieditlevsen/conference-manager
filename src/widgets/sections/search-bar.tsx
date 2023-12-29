import { useRef } from 'react'
import { useTextField } from 'react-aria'
import { IconSearch } from '@shared/icons/icon-search.tsx'
import { container } from '@shared/styles/container.style.ts'
import { tw } from 'twind'

import { useCMParamsContext } from '../../app/contexts/cm-params/cm-params.context.tsx'
import { useThemeContext } from '../../app/contexts/theme-context'

export const SearchBar = () => {
  const theme = useThemeContext()
  const inputRef = useRef<HTMLInputElement | null>(null)
  const { setSearch } = useCMParamsContext()

  const { inputProps, labelProps } = useTextField(
    {
      label: 'søg',
      placeholder: 'søg her',
      inputElementType: 'input',
      onChange: (e) => setSearch(e),
    },
    inputRef,
  )

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

          <form className={tw`w-full`}>
            <div className={tw`relative w-full`}>
              <label {...labelProps} className={tw`sr-only`} />
              <input
                {...inputProps}
                className={tw`h-[50px] md:h-[70px] w-full px-[20px] my-[10px] md:my-[15px] placeholder::(text-form text-grey-dark) text-form rounded-search-bar border(solid grey-medium 1) focus:(outline-none ring ring-offset-1 ring-primary ring-2) ${
                  theme === 'dark-theme'
                    ? 'bg-dark-600 text-white placeholder::text-white'
                    : 'bg-white text-black'
                }`}
                id={'searchInput'}
              />

              <IconSearch
                className={tw`w-[23px] absolute p-0 right-0 bottom-1/2 translate-y-1/2 -translate-x-[20px] ${
                  theme === 'dark-theme' ? 'text-white' : 'text-icon'
                }`}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
