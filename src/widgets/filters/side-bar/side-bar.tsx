import { ListBox, ListBoxItem } from 'react-aria-components'
import { useCMParamsContext } from '@app/contexts/cm-params/cm-params.context.tsx'
import { useThemeContext } from '@app/contexts/theme/theme-context.ts'
import { useAreas } from '@entities/categories/hooks/use-areas.ts'
import { useTypes } from '@entities/categories/hooks/use-types.ts'
import { today } from '@internationalized/date'
import { IconChevronRight } from '@shared/icons/icon-chevron-right.tsx'
import { CalendarView } from '@widgets/filters/side-bar/calendar.tsx'
import { clsx } from 'clsx'
import { tw } from 'twind'

export const SideBar = () => {
  const { date, setDate, type, area, clear, setArea, setType } =
    useCMParamsContext()
  const theme = useThemeContext()
  const types = useTypes()
  const areas = useAreas()

  return (
    <div className={tw`hidden md:flex md:flex-col gap-[30px]`}>
      <ListBox
        aria-label={'Alle resultater'}
        selectionMode={'single'}
        className={tw`list-none p-0 m-0 mt-[20px] space-y-[12px]`}
        selectedKeys={
          !type && !area && date === today('Europe/Copenhagen').toString()
            ? ['alleResultater']
            : []
        }
        onSelectionChange={() => clear()}
      >
        <ListBoxItem
          textValue={'alle Resultater'}
          className={({ isSelected }) =>
            tw`${
              isSelected
                ? `${theme === 'dark-theme' ? 'text-white' : 'text-link'}`
                : `${theme === 'dark-theme' ? 'text-white' : 'text-black'}`
            } font-secondary flex group items-center text-base font-medium cursor-pointer hover:underline focus:(outline-none ring ring-offset-4 rounded ring-2 ring-primary)`
          }
          id={'alleResultater'}
        >
          <IconChevronRight
            className={tw`w-5 h-5 mr-[10px] group-hover:translate-x-[6px] transition  duration-200`}
          />
          Alle Resultater
        </ListBoxItem>
      </ListBox>

      <div>
        <h3
          className={tw`text-heading-4-lg font-primary font-heading-weight ${
            theme === 'dark-theme' ? 'text-white' : 'text-black'
          }`}
        >
          Typer
        </h3>

        <ListBox
          aria-label={'filtrer begivenheder efter type'}
          items={types.data}
          selectionMode={'single'}
          className={tw`list-none p-0 m-0 mt-[20px] space-y-[12px]`}
          selectedKeys={type ? [type] : []}
          onSelectionChange={(e) => {
            return [...e].length === 0
              ? setType(null)
              : setType(String([...e][0]))
          }}
        >
          {(item) => (
            <ListBoxItem
              textValue={item.name}
              className={({ isSelected }) =>
                tw(
                  clsx(
                    `${
                      isSelected
                        ? theme === 'dark-theme'
                          ? 'text-white'
                          : 'text-link'
                        : theme === 'dark-theme'
                        ? 'text-white'
                        : 'text-black'
                    }`,
                    'font-secondary flex group items-center text-base font-medium cursor-pointer hover:underline focus:(outline-none ring ring-offset-4 rounded ring-2 ring-primary)',
                  ),
                )
              }
              id={item.name}
            >
              <IconChevronRight
                className={tw`w-5 h-5 mr-[10px] group-hover:translate-x-[6px] transition  duration-200`}
              />
              {item.name}
            </ListBoxItem>
          )}
        </ListBox>
      </div>

      <div>
        <h3
          className={tw`text-heading-4-lg font-primary font-heading-weight ${
            theme === 'dark-theme' ? 'text-white' : 'text-black'
          }`}
        >
          Fagområder
        </h3>

        <ListBox
          aria-label={'filtrer begivenheder efter type'}
          items={areas.data}
          selectionMode={'single'}
          className={tw`list-none p-0 m-0 mt-[20px] space-y-[12px]`}
          selectedKeys={area ? [area] : []}
          onSelectionChange={(e) => {
            return [...e].length === 0
              ? setArea(null)
              : setArea(String([...e][0]))
          }}
        >
          {(item) => (
            <ListBoxItem
              textValue={item.name}
              className={({ isSelected }) =>
                tw`${
                  isSelected
                    ? `${theme === 'dark-theme' ? 'text-white' : 'text-link'}`
                    : `${theme === 'dark-theme' ? 'text-white' : 'text-black'}`
                } font-secondary flex  group  items-center text-base font-medium cursor-pointer hover:underline focus:(outline-none ring ring-offset-4 rounded ring-2 ring-primary)`
              }
              id={item.name}
            >
              <IconChevronRight
                className={tw`w-5 h-5 mr-[10px] group-hover:translate-x-[6px] transition  duration-200`}
              />
              {item.name}
            </ListBoxItem>
          )}
        </ListBox>
      </div>

      <div>
        <h2
          className={tw`text-heading-4-lg font-primary font-heading-weight ${
            theme === 'dark-theme' ? 'text-white' : 'text-black'
          }`}
        >
          Vælg Dato
        </h2>

        <CalendarView date={date} setDate={setDate} />
      </div>
    </div>
  )
}
