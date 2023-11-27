import type { RefObject } from 'react'
import { isToday, parseDate } from '@internationalized/date'
import { tw } from 'twind'

import { SideBar } from '@components/filters/side-bar/side-bar.tsx'
import { TopNav } from '@components/filters/top-nav/top-nav.tsx'

import { IconX } from '@utils/icons/icon-x.tsx'
import { useThemeContext } from '@contexts/theme-context.ts'

type FiltersProps = {
  date: string | null
  setDate: (date: string | null) => void
  type: string | null
  setType: (type: string | null) => void
  area: string | null
  setArea: (area: string | null) => void
  clear: () => void
  scrollRef: RefObject<HTMLDivElement>
}

export const Filters = (props: FiltersProps) => {
  const { date, type, area, clear } = props
  const theme = useThemeContext()

  return (
    <div className={tw`col-span-12 md:col-span-3`}>
      <SideBar {...props} />
      <TopNav {...props} />

      {(date && !isToday(parseDate(date), 'Europe/copenhagen')) ||
      type ||
      area ? (
        <button
          className={tw`flex items-center md:hidden ${
            theme === 'dark-theme' ? 'text-[#FF9592]' : 'text-red-500'
          }`}
          onClick={() => clear()}
        >
          <IconX className={tw`w-4`} />
          Nulstil filtrer
        </button>
      ) : null}
    </div>
  )
}
