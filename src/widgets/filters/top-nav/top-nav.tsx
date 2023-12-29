import { ListBox, ListBoxItem } from 'react-aria-components'
import { useCMParamsContext } from '@app/contexts/cm-params/cm-params.context.tsx'
import { useThemeContext } from '@app/contexts/theme-context.ts'
import { useAreas } from '@entities/categories/hooks/use-areas.ts'
import { useTypes } from '@entities/categories/hooks/use-types.ts'
import { isToday, parseDate } from '@internationalized/date'
import { DatePickerView } from '@widgets/filters/top-nav/calendar-picker.tsx'
import { AriaSelect } from '@widgets/filters/top-nav/select.tsx'
import { clsx } from 'clsx'
import { tw } from 'twind'

export const TopNav = () => {
  const { date, setDate, type, setType, area, setArea } = useCMParamsContext()
  const types = useTypes()
  const areas = useAreas()
  const theme = useThemeContext()

  return (
    <div className={tw`flex gap-[20px] flex-wrap md:hidden mb-[40px]`}>
      <div className={tw`flex w-full relative`}>
        <button
          aria-label={'Nulstil Fagområde'}
          className={tw`ml-[15px] ${
            theme === 'dark-theme' ? 'text-[#FF9592]' : 'text-red-500'
          } items-center ${area ? 'flex' : 'hidden'}`}
          onClick={() => setArea('')}
        >
          Nulstil
        </button>
      </div>

      <div className={tw`w-full flex`}>
        <AriaSelect
          ariaLabel={'Filtrer efter Type'}
          placeholder={'Vælg Type'}
          value={type}
          setValue={setType}
        >
          <ListBox items={types.data}>
            {(item) => (
              <ListBoxItem
                className={({ isSelected }) =>
                  tw`${clsx(
                    'px-[20px] min-w-[290px] text-start  font-secondary text-base rounded py-3 select-none overflow-hidden',
                    {
                      'bg-secondary text-secondary-text': isSelected,
                      'focus-visible:(outline-none ring ring-offset-0 ring-primary ring-2)':
                        theme === 'light-theme',
                      'focus-visible:(outline-none ring ring-offset-0 ring-gray-200 ring-2)':
                        theme === 'dark-theme',
                    },
                  )}`
                }
                id={item.name}
              >
                {item.name}
              </ListBoxItem>
            )}
          </ListBox>
        </AriaSelect>

        <button
          aria-label={'Nulstil Type'}
          className={tw`ml-[15px] ${
            theme === 'dark-theme' ? 'text-[#FF9592]' : 'text-red-500'
          } items-center ${type ? 'flex' : 'hidden'}`}
          onClick={() => setType('')}
        >
          Nulstil
        </button>
      </div>

      <div className={tw`flex w-full`}>
        <AriaSelect
          ariaLabel={'Filtrer efter Fagområde'}
          placeholder={'Vælg Fagområde'}
          value={area}
          setValue={setArea}
        >
          <ListBox items={areas.data}>
            {(item) => (
              <ListBoxItem
                className={({ isSelected }) =>
                  tw`${clsx(
                    'px-[20px] min-w-[290px] text-start font-secondary text-base rounded py-3 select-none overflow-hidden',
                    {
                      'bg-secondary text-secondary-text': isSelected,
                      'focus-visible:(outline-none ring ring-offset-0 ring-primary ring-2)':
                        theme === 'light-theme',
                      'focus-visible:(outline-none ring ring-offset-0 ring-gray-200 ring-2)':
                        theme === 'dark-theme',
                    },
                  )}`
                }
                id={item.name}
              >
                {item.name}
              </ListBoxItem>
            )}
          </ListBox>
        </AriaSelect>
        <button
          aria-label={'Nulstil Fagområde'}
          className={tw`ml-[15px] ${
            theme === 'dark-theme' ? 'text-[#FF9592]' : 'text-red-500'
          } items-center ${area ? 'flex' : 'hidden'}`}
          onClick={() => setArea('')}
        >
          Nulstil
        </button>
      </div>

      <div className={tw`flex w-full `}>
        <DatePickerView date={date} setDate={setDate} />

        <button
          className={tw`ml-[15px] ${
            theme === 'dark-theme' ? 'text-[#FF9592]' : 'text-red-500'
          } items-center ${
            date && !isToday(parseDate(date), 'Europe/copenhagen')
              ? 'flex'
              : 'hidden'
          }`}
          onClick={() => setDate('')}
        >
          Nustil
        </button>
      </div>
    </div>
  )
}
