import React from 'react'
import type { ListBoxItemProps as RAListBoxItemProps } from 'react-aria-components'
import { ListBoxItem as RAListBoxItem } from 'react-aria-components'
import { useThemeContext } from '@app/contexts/theme/theme-context.ts'
import { IconChevronRight } from '@shared/icons/icon-chevron-right.tsx'
import { cva } from 'class-variance-authority'
import { tw } from 'twind'

type ItemProps = RAListBoxItemProps

export function Item(props: ItemProps) {
  const theme = useThemeContext()

  const styles = cva(
    'font-secondary flex group items-center text-base font-medium cursor-pointer hover:underline focus:(outline-none ring ring-offset-4 rounded ring-2 ring-primary)',
    {
      variants: {
        isSelected: {
          true: [],
        },
        isDarkTheme: {
          true: [],
        },
      },
      compoundVariants: [
        {
          isSelected: true,
          isDarkTheme: true,
          className: 'text-dark-highlight-2',
        },
        {
          isSelected: false,
          isDarkTheme: true,
          className: 'text-white',
        },
        {
          isSelected: true,
          isDarkTheme: false,
          className: 'text-link',
        },
        {
          isSelected: false,
          isDarkTheme: false,
          className: 'text-black',
        },
      ],
    },
  )

  const isDarkTheme = theme === 'dark-theme'

  return (
    <RAListBoxItem
      className={({ isSelected }) => tw(styles({ isSelected, isDarkTheme }))}
      {...props}
    >
      <>
        <IconChevronRight
          className={tw`w-5 h-5 mr-[10px] group-hover:translate-x-[6px] transition duration-200`}
        />

        {props.children}
      </>
    </RAListBoxItem>
  )
}
