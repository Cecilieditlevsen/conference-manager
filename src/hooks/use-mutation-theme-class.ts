import { useEffect, useState } from 'react'

export const useBodyThemeSync = () => {
  const [bodyThemeClass, setBodyThemeClass] = useState<
    'light-theme' | 'dark-theme'
  >(() => {
    const body = document.body
    if (body.classList.contains('dark-theme')) {
      return 'dark-theme'
    } else if (body.classList.contains('light-theme')) {
      return 'light-theme'
    } else if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      return 'dark-theme'
    } else {
      return 'light-theme'
    }
  })

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
          const updatedThemeClass = body.classList.contains('dark-theme')
            ? 'dark-theme'
            : body.classList.contains('light-theme')
            ? 'light-theme'
            : window.matchMedia &&
              window.matchMedia('(prefers-color-scheme: dark)').matches
            ? 'dark-theme'
            : 'light-theme'

          // Update the theme class state in your React app
          setBodyThemeClass(updatedThemeClass)
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

  return bodyThemeClass
}
