import React from 'react'
import { useThemeContext } from '@app/contexts/theme/theme-context.ts'
import { cva } from 'class-variance-authority'
import { tw } from 'twind'

type TitleProps = {
  children?: React.ReactNode
}

const styles = cva('text-heading-4-lg font-primary font-heading-weight mb-4', {
  variants: {
    isDarkTheme: {
      true: 'text-white',
      false: 'text-black',
    },
  },
})

export function Title(props: TitleProps) {
  const theme = useThemeContext()

  const isDarkTheme = theme === 'dark-theme'

  return <h3 className={tw(styles({ isDarkTheme }))}>{props.children}</h3>
}
