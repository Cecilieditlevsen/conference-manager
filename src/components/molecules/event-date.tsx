import { useThemeContext } from '@contexts/theme-context.ts'
import dayjs from 'dayjs'
import { tw } from 'twind'

type EventDateProps = {
  startDate: string
  daysDuration: number
}

export const EventDate = ({ startDate, daysDuration }: EventDateProps) => {
  const theme = useThemeContext()

  return (
    <div
      className={tw`${
        theme === 'dark-theme'
          ? 'bg-dark-highlight-2 text-black'
          : 'bg-primary text-primary-text'
      } flex flex-col items-center h-[fit-content] min-w-[60px] py-[15px]`}
    >
      {daysDuration > 0 ? (
        <span className={tw`font-secondary text-component-body mb-1`}>Fra</span>
      ) : null}
      <span className={tw`font-secondary text-2xl`}>
        {dayjs(startDate).format('DD')}
      </span>

      <span className={tw`font-secondary text-component-body mt-[2px]`}>
        {dayjs(startDate).format('MMM')}
      </span>
    </div>
  )
}
