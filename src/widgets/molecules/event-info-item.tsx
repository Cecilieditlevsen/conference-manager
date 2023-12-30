import { useThemeContext } from '@app/contexts/theme/theme-context.ts'
import { IconAlert } from '@shared/icons/icon-alert.tsx'
import { IconCalendar } from '@shared/icons/icon-calendar.tsx'
import { IconCalendarDue } from '@shared/icons/icon-calendar-due.tsx'
import { IconTime } from '@shared/icons/icon-time.tsx'
import { clsx } from 'clsx'
import { tw } from 'twind'

type EventListItemProps = {
  title: string
  icon: 'alert' | 'calendar' | 'time' | 'calendarDue'
  variant?: 'warning' | 'danger' | 'success' | 'default'
}

const icons = {
  alert: IconAlert,
  calendar: IconCalendar,
  time: IconTime,
  calendarDue: IconCalendarDue,
}

export const EventInfoItem = ({
  title,
  icon,
  variant = 'default',
}: EventListItemProps) => {
  const theme = useThemeContext()

  const IconElement = icons[icon]

  const colorClasses = clsx([], {
    'text-[#FF9592]': variant === 'danger' && theme === 'dark-theme',
    'text-red-500': variant === 'danger' && theme !== 'dark-theme',
  })

  return (
    <div className={tw`flex items-center  ${colorClasses}`}>
      <span className={tw`mr-[10px] flex justify-center items-center `}>
        <IconElement
          className={tw`w-6 h-6 ${clsx({
            'text-icon': variant === 'default' && theme !== 'dark-theme',
            'text-dark-highlight-1':
              variant === 'default' && theme === 'dark-theme',
          })} `}
        />
      </span>

      <p className={tw`m-0 font-primary text-component ${colorClasses}`}>
        {title}
      </p>
    </div>
  )
}
