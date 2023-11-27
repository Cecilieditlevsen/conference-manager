import {
  Button,
  Calendar,
  CalendarCell,
  CalendarGrid,
  Heading,
} from 'react-aria-components'
import { parseDate, today } from '@internationalized/date'
import { clsx } from 'clsx'
import { tw } from 'twind'

import { IconChevronLeft } from '@utils/icons/icon-chevron-left.tsx'
import { IconChevronRight } from '@utils/icons/icon-chevron-right.tsx'
import { useThemeContext } from '@contexts/theme-context'

type Props = {
  date: string | null
  setDate: (date: string | null) => void
}

export const CalendarView = ({ date, setDate }: Props) => {
  const theme = useThemeContext()

  return (
    <Calendar
      aria-label={'vælg dato'}
      minValue={today('Europe/Copenhagen')}
      value={date ? parseDate(date) : undefined}
      onChange={(value) => setDate(String(value))}
      className={tw`p-[10px] mt-[20px]  max-w-[280px] rounded border(solid grey-medium 1)`}
    >
      <header className={tw`flex justify-between mb-3`}>
        <Button slot={'previous'}>
          <IconChevronLeft
            className={tw`w-5 h-5 ${
              theme === 'dark-theme' ? 'text-white' : 'text-black'
            }`}
          />
        </Button>
        <Heading
          className={tw`${
            theme === 'dark-theme' ? 'text-white' : 'text-black'
          } text-lg`}
        />
        <Button slot={'next'}>
          <IconChevronRight
            className={tw`w-5 h-5 ${
              theme === 'dark-theme' ? 'text-white' : 'text-black'
            }`}
          />
        </Button>
      </header>

      <CalendarGrid
        className={tw`w-full ${
          theme === 'dark-theme' ? 'text-white' : 'text-black'
        }`}
      >
        {(date) => (
          <CalendarCell
            className={({ isDisabled, isFocused, isSelected }) =>
              tw`${clsx(
                [
                  `text-sm font-secondary cursor-pointer rounded-full flex justify-center items-center p-1`,
                ],
                {
                  'text-grey-medium': isDisabled && theme === 'light-theme',
                  'text-grey-dark': isDisabled && theme === 'dark-theme',
                  'text-white': theme === 'dark-theme',
                  'outline-none ring(button offset-0 2)':
                    isFocused && theme === 'light-theme',
                  'outline-none ring(dark-highlight-2 offset-0 2)':
                    isFocused && theme === 'dark-theme',
                  'bg-button text-button-text':
                    isSelected && theme === 'light-theme',
                  'bg-dark-highlight-2 text-black':
                    isSelected && theme === 'dark-theme',
                },
              )}`
            }
            style={{ aspectRatio: '1/1' }}
            date={date}
          />
        )}
      </CalendarGrid>
    </Calendar>
  )
}
