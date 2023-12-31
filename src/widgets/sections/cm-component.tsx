import { Suspense } from 'react'
import { Button } from 'react-aria-components'
import { ErrorBoundary } from 'react-error-boundary'
import { useThemeContext } from '@app/contexts/theme/theme-context.ts'
import { Spinner } from '@chakra-ui/spinner'
import { changeTheme } from '@features/change-theme.ts'
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
      <div className={tw` absolute right-10 mt-6`}>
        <Button
          className={tw`${
            theme === 'light-theme' ? 'text-black' : 'text-white'
          }`}
          onPress={() => changeTheme()}
        >
          toggle Theme
        </Button>
      </div>

      <SearchBar />

      <ErrorBoundary fallback={<div>Der skete en fejl</div>}>
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
      </ErrorBoundary>
    </main>
  )
}
