import { useCMParamsContext } from '@app/contexts/cm-params/cm-params.context.tsx'
import { useThemeContext } from '@app/contexts/theme/theme-context.ts'
import { isToday, parseDate } from '@internationalized/date'
import { IconX } from '@shared/icons/icon-x.tsx'
import { SideBar } from '@widgets/filters/side-bar/side-bar.tsx'
import { TopNav } from '@widgets/filters/top-nav/top-nav.tsx'
import { tw } from 'twind'

export const Filters = () => {
  const { date, type, area, clear } = useCMParamsContext()
  const theme = useThemeContext()

  return (
    <div className={tw`col-span-12 md:col-span-3`}>
      <SideBar />
      <TopNav />

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
