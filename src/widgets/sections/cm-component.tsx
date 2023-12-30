import { Suspense } from 'react'
import { Button } from 'react-aria-components'
import { useThemeContext } from '@app/contexts/theme/theme-context.ts'
import { Spinner } from '@chakra-ui/spinner'
import { changeTheme } from '@features/change-theme.ts'
import { container } from '@shared/styles/container.style.ts'
import { MainContent } from '@widgets/sections/main-content.tsx'
import { SearchBar } from '@widgets/sections/search-bar.tsx'
import { clsx } from 'clsx'
import { tw } from 'twind'

export const CMComponent = () => {
  const theme = useThemeContext()
  return (
    <main
      className={tw(
        clsx('min-h-screen', {
          'bg-dark-900': theme === 'dark-theme',
          'bg-[#f5f5f5]': theme !== 'dark-theme',
        }),
      )}
    >
      <SearchBar />

      <div className={tw`${container}`}>
        <Button onPress={() => changeTheme()}>Change theme</Button>
      </div>

      <Suspense
        fallback={
          <div
            className={tw`w-full py-[200px] flex justify-center items-center`}
          >
            <Spinner
              className={tw(
                clsx('w-6 h-6', {
                  'text-white': theme === 'dark-theme',
                  'text-black': theme !== 'dark-theme',
                }),
              )}
            />
          </div>
        }
      >
        <MainContent />
      </Suspense>
    </main>
  )
}
