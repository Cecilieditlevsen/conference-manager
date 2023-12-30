import { useRef, useState } from 'react'
import {
  Button,
  Calendar,
  CalendarCell,
  CalendarGrid,
  DateInput,
  DatePicker,
  DateSegment,
  Dialog,
  Group,
  Heading,
  Popover
} from 'react-aria-components'
import { useThemeContext } from '@app/contexts/theme/theme-context.ts'
import { isToday, parseDate, today } from '@internationalized/date'
import { IconChevronDown } from '@shared/icons/icon-chevron-down.tsx'
import { IconChevronLeft } from '@shared/icons/icon-chevron-left.tsx'
import { IconChevronRight } from '@shared/icons/icon-chevron-right.tsx'
import { fadeIn } from '@shared/styles/animatiosn.style.ts'
import { clsx } from 'clsx'
import { tw } from 'twind'

type Props = {
  date: string | null
  setDate: (date: string | null) => void
}
export const DatePickerView = ({ date, setDate }: Props) => {
  const theme = useThemeContext()
  const triggerRef = useRef<HTMLButtonElement>(null)
  const [open, setOpen] = useState(false)

  const hasPickedDate = date
    ? !isToday(parseDate(date), 'Europe/Copenhagen')
    : false

  return (
    <DatePicker
      aria-label={'vælg dato'}
      isOpen={open}
      onOpenChange={setOpen}
      className={tw`w-full  relative rounded  p-[10px] border( solid )
            ${clsx({
              'bg-white': open && theme !== 'dark-theme',
              'bg-white border(secondary 2)':
                hasPickedDate && theme === 'light-theme',
              'bg-grey-light border(grey-medium 1)':
                !hasPickedDate && theme === 'light-theme',
              'bg-dark-700 border(gray-400 1) text-white':
                theme === 'dark-theme' && !hasPickedDate,
              'bg-dark-800 text-white': hasPickedDate && theme === 'dark-theme',
            })}`}
      minValue={today('Europe/Copenhagen')}
      value={date ? parseDate(date) : undefined}
      onChange={(value) => {
        setDate(String(value))
      }}
    >
      <Group className={tw`flex w-full`}>
        {hasPickedDate ? (
          <DateInput className={tw`flex`}>
            {(segment) => (
              <DateSegment
                className={tw`text-base focus:(outline-none ring ring-2 ring-offset-0 ring-secondary rounded) font-secondary`}
                segment={segment}
              />
            )}
          </DateInput>
        ) : (
          <p className={tw`p-0 m-0 text-base font-secondary`}>Vælg fra dato</p>
        )}
        <Button
          ref={triggerRef}
          className={({ isFocused }) =>
            `${
              isFocused ? tw`outline-none ring(secondary 2 offset-2)` : ''
            } ${tw`rounded flex items-center absolute transition p-[10px] top-0 right-0 w-full h-full `}`
          }
        >
          <IconChevronDown
            className={tw`ml-auto w-4 h-4 transition ${
              theme === 'dark-theme' ? 'text-white' : 'text-black'
            } ${open ? 'rotate-180' : ''}`}
          />
        </Button>
      </Group>

      <Popover
        className={tw`transition animate-${fadeIn}`}
        placement={'bottom start'}
      >
        <Dialog>
          <Calendar
            className={tw`${
              theme === 'dark-theme' ? 'bg-dark-600 text-white' : 'bg-white'
            } p-[20px] w-full min-w-[290px] max-w-[320px] rounded shadow`}
          >
            <header className={tw`flex justify-between mb-4`}>
              <Button slot={'previous'}>
                <IconChevronLeft
                  className={tw`w-6 h-6  ${
                    theme === 'dark-theme' ? 'text-white' : 'text-black'
                  } `}
                />
              </Button>
              <Heading />
              <Button slot={'next'}>
                <IconChevronRight
                  className={tw`w-6 h-6 ${
                    theme === 'dark-theme' ? 'text-white' : 'text-black'
                  }`}
                />
              </Button>
            </header>

            <CalendarGrid className={tw`w-full`}>
              {(date) => (
                <CalendarCell
                  className={({ isDisabled, isFocused, isSelected }) =>
                    tw`${clsx(
                      [
                        `text-sm font-secondary rounded-full flex justify-center items-center p-1`,
                      ],
                      {
                        'text-gray-300': isDisabled && theme === 'light-theme',
                        'text-gray-600': isDisabled && theme === 'dark-theme',
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
        </Dialog>
      </Popover>
    </DatePicker>
  )
}
