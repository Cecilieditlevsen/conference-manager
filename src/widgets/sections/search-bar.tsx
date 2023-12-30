import { useCMParamsContext } from '@app/contexts/cm-params/cm-params.context.tsx'
import { useThemeContext } from '@app/contexts/theme/theme-context.ts'
import { container } from '@shared/styles/container.style.ts'
import { SearchField } from '@shared/ui/search-field/search-field.tsx'
import { useDebounceFn } from 'ahooks'
import { tw } from 'twind'

export const SearchBar = () => {
  const theme = useThemeContext()
  const { setSearch } = useCMParamsContext()

  const { run: debouncedSearch } = useDebounceFn(
    (value: string) => setSearch(value),
    {
      wait: 300,
    },
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

          <SearchField onChange={debouncedSearch} label={'Søg'} />
        </div>
      </div>
    </div>
  )
}
