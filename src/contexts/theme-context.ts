import { createStrictContext } from '@utils/create-strict-context.ts'

export type ThemeContextProps = 'dark-theme' | 'light-theme'

export const [ThemeContext, useThemeContext] =
  createStrictContext<ThemeContextProps>({
    name: 'ThemeContext',
    errorMessage: 'PageTeaser is used outside of its context',
    allowMissingProvider: false,
  })
