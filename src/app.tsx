import { Suspense, useEffect, useState } from 'react'
import { Spinner } from '@chakra-ui/spinner'
import type { ThemeContextProps } from '@contexts/theme-context.ts'
import { ThemeContext } from '@contexts/theme-context.ts'
import { setup, tw } from 'twind'

import { MainContent } from '@components/sections/main-content.tsx'
import { SearchBar } from '@components/sections/search-bar.tsx'

import { useCMSearchParams } from '@hooks/use-cm-search-params.tsx'
import { useBodyThemeSync } from '@hooks/use-mutation-theme-class.ts'

import './app.css'
import './global.css'

setup({
  preflight: false,
  hash: true,
  theme: {
    extend: {
      screens: {
        xs: '576px',
        sm: '769px',
        md: '992px',
        lg: '1200px',
      },
      colors: {
        black: 'var(--color-black)',
        white: 'var(--color-white)',
        primary: 'var(--color-primary)',
        'primary-text': 'var(--color-primary-text)',
        secondary: 'var(--color-secondary)',
        'secondary-text': 'var(--color-secondary-text)',
        tag: 'var(--color-tag)',
        icon: 'var(--color-icons)',
        orange: 'var(--orange)',
        link: 'var(--color-link)',
        arrow: 'var(--color-arrows)',
        button: 'var(--color-btn-primary)',
        'button-text': 'var(--color-btn-primary-text)',
        'grey-light': 'var(--color-grey-light)',
        'grey-medium': 'var(--color-grey-medium)',
        'grey-dark': 'var(--color-grey-dark)',
        'dark-900': 'var(--darkmode-900)',
        'dark-800': 'var(--darkmode-800)',
        'dark-700': 'var(--darkmode-700)',
        'dark-600': 'var(--darkmode-600)',
        'dark-highlight-1': 'var(--darkmode-hightlight-1-200)',
        'dark-highlight-2': 'var(--darkmode-hightlight-2-200)',
      },
      borderRadius: {
        'search-bar': 'var(--sleeve-search-bar-small-border-radius)',
      },
      fontFamily: {
        primary: 'var(--font-primary)',
        secondary: 'var(--font-secondary)',
      },
      fontSize: {
        'heading-1-lg': 'var(--h1-font-size-lg)',
        'heading-1': 'var(--h1-font-size-sm)',
        'heading-3-lg': 'var(--h3-font-size-lg)',
        'heading-4-lg': 'var(--h4-font-size-lg)',
        'component-body': 'var(--component-body-font-size)',
        sm: 'var(--small-font-size)',
        base: 'var(--base-font-size)',
        component: 'var(--component-font-size)',
        form: 'var(--form-font-size)',
        button: 'var(--btn-font-size)',
      },
      fontWeight: {
        'heading-weight': 'var(--heading-font-weight)',
      },
      spacing: {
        'section-small-md': 'var(--section-margin-bottom-md--small)',
        'section-small': 'var(--section-margin-bottom-sm--small)',
        'section-medium-md': 'var(--section-margin-bottom-md--medium)',
        'section-medium': 'var(--section-margin-bottom-sm--medium)',
        'section-large-md': 'var(--section-margin-bottom-md--large)',
        'section-large': 'var(--section-margin-bottom-sm--large)',
      },
    },
  },
})

function App() {
  const bodyClass = useBodyThemeSync()

  const [theme, setTheme] = useState<ThemeContextProps>(bodyClass)

  useEffect(() => {
    setTheme(bodyClass)
  }, [bodyClass])

  const params = useCMSearchParams()

  if (import.meta.env.MODE === 'section') {
    return <h1> Hello from section</h1>
  }

  if (import.meta.env.PROD) {
    return (
      <ThemeContext.Provider value={theme}>
        <SearchBar setSearch={params.setSearch} />

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
          <MainContent {...params} />
        </Suspense>
      </ThemeContext.Provider>
    )
  }

  return (
    <main
      className={tw`min-h-screen ${
        theme === 'dark-theme' ? 'bg-dark-900' : 'bg-[#f5f5f5]'
      }`}
    >
      {/* should be inserted in container--wide*/}
      {/*include from this in build*/}

      <ThemeContext.Provider value={theme}>
        <SearchBar setSearch={params.setSearch} />

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
          <MainContent {...params} />
        </Suspense>
      </ThemeContext.Provider>
    </main>
  )
}

export default App
