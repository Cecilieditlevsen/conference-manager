import { Suspense, useEffect, useState } from 'react'
import { Spinner } from '@chakra-ui/spinner'
import { useBodyThemeSync } from '@features/hooks/use-mutation-theme-class.ts'
import { MainContent } from '@widgets/sections/main-content.tsx'
import { SearchBar } from '@widgets/sections/search-bar.tsx'
import { tw } from 'twind'

import { CMParamsContextProvider } from './app/contexts/cm-params/cm-params.provider.tsx'
import type { ThemeContextProps } from './app/contexts/theme-context.ts'
import { ThemeContext } from './app/contexts/theme-context.ts'
import { setupTwind } from './setup-twind.ts'

import './app.css'
import './global.css'

setupTwind()

function App() {
  const bodyClass = useBodyThemeSync()
  const [theme, setTheme] = useState<ThemeContextProps>(bodyClass)

  useEffect(() => {
    setTheme(bodyClass)
  }, [bodyClass])

  return (
    <ThemeContext.Provider value={theme}>
      <CMParamsContextProvider>
        <main
          className={tw`min-h-screen ${
            theme === 'dark-theme' ? 'bg-dark-900' : 'bg-[#f5f5f5]'
          }`}
        >
          <SearchBar />

          <Suspense
            fallback={
              <div
                className={tw`w-full py-[200px] flex justify-center items-center`}
              >
                <Spinner
                  className={tw`w-6 h-6 ${
                    theme === 'dark-theme' ? 'text-white' : 'text-black'
                  }`}
                />
              </div>
            }
          >
            <MainContent />
          </Suspense>
        </main>
      </CMParamsContextProvider>
    </ThemeContext.Provider>
  )
}

export default App
