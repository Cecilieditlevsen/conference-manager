import React, { useEffect, useState } from 'react'
import {
  ThemeContext,
  type ThemeContextProps,
} from '@app/contexts/theme/theme-context.ts'

function getTheme() {
  const body = document.body

  if (body.classList.contains('dark-theme')) {
    return 'dark-theme'
  } else if (body.classList.contains('light-theme')) {
    return 'light-theme'
  } else {
    return 'light-theme'
  }
}

export function ThemeContextProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [theme, setTheme] = useState<ThemeContextProps>(getTheme())

  useEffect(() => {
    const body = document.body

    // Create a new MutationObserver instance
    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (
          mutation.type === 'attributes' &&
          mutation.attributeName === 'class'
        ) {
          // Get the updated theme class from the body element
          const updatedThemeClass = getTheme()

          // Update the theme class state in your React app
          setTheme(updatedThemeClass)
        }
      }
    })

    // Start observing changes on the body element's class attribute
    observer.observe(body, { attributes: true })

    // Clean up the observer on unmount
    return () => {
      observer.disconnect()
    }
  }, [])

  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
}
