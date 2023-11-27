import type { ReactNode } from 'react'
import { useRef, useState } from 'react'
import { Button, Popover, Select, SelectValue } from 'react-aria-components'
import { clsx } from 'clsx'
import { tw } from 'twind'
import { animation } from 'twind/css'

import { IconChevronDown } from '@utils/icons/icon-chevron-down.tsx'
import { useThemeContext } from '@contexts/theme-context'

export const fadeIn = animation('0.2s ease-in-out', {
  from: {
    opacity: '0',
  },
  to: {
    opacity: '1',
  },
})

type Props = {
  value: string | null
  setValue: (value: string) => void
  children: ReactNode
  ariaLabel: string
  placeholder: string
}

export const AriaSelect = ({
  children,
  value,
  setValue,
  ariaLabel,
  placeholder,
}: Props) => {
  const [open, setOpen] = useState(false)
  const theme = useThemeContext()
  const triggerRef = useRef<HTMLButtonElement>(null)

  const triggerClassName = tw(
    clsx(
      [
        'relative box-border transition  text-base flex w-full  font-secondary p-[10px] rounded items-center focus:(outline-none ring ring-2 ring-offset-2 ring-secondary) border(solid)',
      ],
      {
        'bg-white text-black': open && theme !== 'dark-theme',
        'border(2 secondary) bg-white text-black':
          value && theme !== 'dark-theme',
        'border(1 grey-medium) bg-grey-light text-black':
          !value && !open && theme !== 'dark-theme',
        'bg-dark-700 border(1 gray-400) text-white':
          !open && !value && theme === 'dark-theme',
        'bg-dark-800 text-white': value && theme === 'dark-theme',
        'text-white border(1 grey-medium)': open && theme === 'dark-theme',
      },
    ),
  )
  return (
    <Select
      aria-label={ariaLabel}
      selectedKey={value}
      isOpen={open}
      onOpenChange={setOpen}
      onSelectionChange={(e) => setValue(String(e))}
      className={tw`w-full flex`}
      placeholder={placeholder}
    >
      <Button className={triggerClassName} ref={triggerRef}>
        <SelectValue />
        <IconChevronDown
          aria-hidden={'true'}
          className={tw`w-4 h-4 ml-auto transition  ${
            open ? 'rotate-180' : ''
          }`}
        />
      </Button>

      <Popover
        triggerRef={triggerRef}
        placement={'bottom start'}
        className={tw`${
          theme === 'dark-theme' ? 'bg-dark-600 text-white' : 'bg-white'
        } flex flex-col overflow-scroll shadow  animate-${fadeIn}`}
      >
        {children}
      </Popover>
    </Select>
  )
}
